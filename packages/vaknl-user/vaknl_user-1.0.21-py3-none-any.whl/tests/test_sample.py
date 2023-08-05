"""Sample test script for package.

Performs unit tests on elements of the package.

Created: 2020-06-11 (Merijn, DAT-1583)
Updated: 2020-06-12 (Merijn, DAT-1583)
"""

# ----------------------------------------------------------------------------------------------------------------------
# Import libraries
# ----------------------------------------------------------------------------------------------------------------------
import json
import unittest

from vaknl_user import user
from vaknl_user import event


# ----------------------------------------------------------------------------------------------------------------------
# Test classes
# ----------------------------------------------------------------------------------------------------------------------
class UserTestCase(unittest.TestCase):

    def test_user_class_1(self):
        """Test creation of User object."""
        # Failure expected
        self.assertIsInstance(user.User(), user.User)

    def test_user_class_2(self):
        """Test creation of User object."""
        # Success expected
        dmp_user_id = 'xxx'
        self.assertIsInstance(user.User(dmp_user_id), user.User)

    def test_user_class_3(self):
        """Test creation of User object."""
        # Failure expected
        dmp_user_id = None
        self.assertIsInstance(user.User(dmp_user_id), user.User)

    def test_user_class_4(self):
        """Test creation of User object."""
        # Failure expected
        dmp_user_id = 12345
        self.assertIsInstance(user.User(dmp_user_id), user.User)

    # def test_user_class_5(self):
    #     for item in [User.User('xxx'), User.User()]:
    #         self.assertIsInstance(item, User.User)

    def test_create_user_from_clickstream(self):
        """Check if user can be created with clickstream data imported from Firestore."""
        dmp_user_id = u'0:jbf1sowm:G~wbWSdw7QLdVcGP6RVZ3GT0fVHeFuqc'
        u = user.User(dmp_user_id)
        u.create_user_from_clickstream()
        self.assertIn('0:k7s6g6jz:9T~qVFXlRTEHl0DUfFR5AKvF3Or4LY1U', u.statistics['dmp_session_ids'])


class EventTestCase(unittest.TestCase):

    def setUp(self):
        """Sets up test case environment. Repeats for every separate test."""
        with open('data/clickstream_dmp_session_sample.json') as json_file:
            data = json.load(json_file)
        self.clickstream_events = data.get('event_list')
        self.user = user.User('xxx')

    def tearDown(self):
        """Tears up test case environment. Repeats for every separate test."""
        self.clickstream_events = None
        self.user = None

    def test_event_class_1(self):
        e = self.clickstream_events[0]
        self.assertIsInstance(self.user.create_event(e), event.Event)


# ----------------------------------------------------------------------------------------------------------------------
# Command-line entry point
# ----------------------------------------------------------------------------------------------------------------------
if __name__ == '__main__':
    unittest.main()
