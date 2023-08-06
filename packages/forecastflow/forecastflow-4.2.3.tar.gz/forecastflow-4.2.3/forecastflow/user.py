import logging
from typing import TYPE_CHECKING

import forecastflow
from forecastflow.firebase_api import auth
from forecastflow.firebase_api import cloud_firestore
from forecastflow.util import ExpirationTimer

if TYPE_CHECKING:
    from forecastflow import Project

logger = logging.getLogger(__name__)


class User:
    """
    ForecastFlow user class
    """

    def __init__(self, email: str, password: str):
        """
        Instantiate object with e-mail and password.

        Args:
            email:
                e-mail to sign in.

            password:
                password for sign in.
        """
        res = auth.sign_in_with_password(email, password)
        self._id_token = res['idToken']
        self.user_id = res['localId']
        self._refresh_token = res['refreshToken']
        self._expiration_timer = ExpirationTimer(int(res['expiresIn']) - 10)  # refresh 10 seconds earlier
        self._projects = {}

    @property
    def _document(self) -> dict:
        doc = cloud_firestore.get(f"users/{self.user_id}", self.id_token)
        return doc['fields']

    def get_project(self, project_id) -> 'Project':
        """
        Get project with given pid.

        Args:
            project_id:
                Project ID you want to open.

        Returns:
            ForecastFlow Project object with given pid.
        """
        if project_id not in self._projects:
            p = forecastflow.Project(self, project_id)
            self._projects[project_id] = p
        return self._projects[project_id]

    @property
    def id_token(self):
        """
        This method refreshes a ID token if expired.
        """
        if self._expiration_timer.is_expired:
            logger.info('ID Token is expired. Refreshing.')
            res = auth.refresh_id_token(self._refresh_token)
            self._id_token = res['id_token']
            self._expiration_timer = ExpirationTimer(
                int(res['expires_in']) - 10  # refresh 10 seconds earlier
            )
        return self._id_token

    @property
    def uid(self) -> str:
        return self.user_id
