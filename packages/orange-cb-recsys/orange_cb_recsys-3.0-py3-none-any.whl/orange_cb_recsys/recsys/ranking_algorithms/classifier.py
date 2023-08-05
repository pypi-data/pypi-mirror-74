from typing import List

from scipy import sparse
from sklearn import neighbors
from sklearn.calibration import CalibratedClassifierCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction import DictVectorizer
from sklearn.gaussian_process import GaussianProcessClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import FunctionTransformer
from sklearn.svm import LinearSVC
from sklearn.tree import DecisionTreeClassifier

from orange_cb_recsys.content_analyzer.content_representation.content import Content

import pandas as pd

from orange_cb_recsys.recsys.algorithm import RankingAlgorithm
from orange_cb_recsys.utils.const import logger
from orange_cb_recsys.utils.load_content import get_rated_items, get_unrated_items, load_content_instance


class ClassifierRecommender(RankingAlgorithm):
    """
       Class that implements a logistic regression classifier.

       Args:
           item_field (str): Name of the field that contains the content to use
           field_representation (str): Id of the field_representation content
           classifier(str): classifier that will be used
               can be one of the following values:
               random_forest, svm, log_regr,
               knn, decision_tree, gaussian_process
               threshold: ratings bigger than threshold will be
               considered as positive
       """
    def __init__(self, item_field: str, field_representation: str, classifier: str, threshold=-1):
        super().__init__(item_field, field_representation)
        self.__classifier: str = classifier
        self.__threshold = threshold

    def predict(self, user_id: str, ratings: pd.DataFrame, recs_number: int, items_directory: str, candidate_item_id_list: List = None) -> pd.DataFrame:
        """
        1) Goes into items_directory and for each item takes the values corresponding to the field_representation of
        the item_field. For example, if item_field == "Plot" and field_representation == "tf-idf", the function will
        take the "tf-idf" representation of each  "Plot" field for every rated item, the tf-idf representation of rated items
        and items to classify will be parsed to dense arrays;
        2) Define target features, items with rating greater (lower) than threshold will be used as positive(negative) examples;
        3) Creates an object Classifier, uses the method fit and predicts the class of the new items

        Args:
            candidate_item_id_list: list of the items that can be recommended, if None
            all unrated items will be used
            user_id: user for which recommendations will be computed
            recs_number (list[Content]): How long the ranking will be
            ratings (pd.DataFrame): ratings of the user with id equal to user_id
            items_directory (str): Name of the directory where the items are stored.

        Returns:
            The predicted classes, or the predict values.
        """

        if candidate_item_id_list is None:
            unrated_items = get_unrated_items(items_directory, ratings)
        else:
            unrated_items = [load_content_instance(items_directory, item_id) for item_id in candidate_item_id_list]

        rated_features_bag_list = []
        unrated_features_bag_list = []

        logger.info("Retrieving rated items")
        rated_items = get_rated_items(items_directory, ratings)
        if self.__threshold == -1:
            threshold = pd.to_numeric(ratings["score"], downcast="float").mean()
        else:
            threshold = self.__threshold

        labels = []
        for item in rated_items:
            if item is not None:
                rated_features_bag_list.append(item.get_field(self.item_field).get_representation(self.item_field_representation).value)
                labels.append(1 if float(ratings[ratings['to_id'] == item.content_id].score) >= threshold else 0)

        logger.info("Labeling examples")
        for item in unrated_items:
            if item is not None:
                unrated_features_bag_list.append(item.get_field(self.item_field).get_representation(self.item_field_representation).value)

        clf = None
        if self.__classifier.lower() == "random_forest":
            clf = RandomForestClassifier(n_estimators=400, random_state=42)
        elif self.__classifier.lower() == "svm":
            clf = CalibratedClassifierCV(LinearSVC(random_state=42))
        elif self.__classifier.lower() == "log_regr":
            clf = LogisticRegression(random_state=42)
        elif self.__classifier.lower() == "knn":
            clf = neighbors.KNeighborsClassifier()
        elif self.__classifier.lower() == "decision_tree":
            clf = DecisionTreeClassifier(random_state=42)
        elif self.__classifier.lower() == "gaussian_process":
            clf = GaussianProcessClassifier(random_state=42)

        logger.info("Fitting classifier")
        if self.__classifier.lower() == "gaussian_process":
            pipe = make_pipeline(DictVectorizer(sparse=True), FunctionTransformer(lambda x: x.todense(), accept_sparse=True), clf)
        else:
            pipe = make_pipeline(DictVectorizer(sparse=True), clf)

        pipe = pipe.fit(rated_features_bag_list, labels)

        columns = ["to_id", "rating"]
        score_frame = pd.DataFrame(columns=columns)

        logger.info("Predicting scores")
        score_labels = pipe.predict_proba(unrated_features_bag_list)

        for score, item in zip(score_labels, unrated_items):
            if item is not None:
                score_frame = pd.concat([score_frame, pd.DataFrame.from_records([(item.content_id, score[1])], columns=columns)], ignore_index=True)

        score_frame = score_frame.sort_values(['rating'], ascending=False).reset_index(drop=True)
        score_frame = score_frame[:recs_number]

        return score_frame
