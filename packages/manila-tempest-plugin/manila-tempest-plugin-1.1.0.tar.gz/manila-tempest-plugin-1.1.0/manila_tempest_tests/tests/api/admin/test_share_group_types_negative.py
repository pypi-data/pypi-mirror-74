#    Licensed under the Apache License, Version 2.0 (the "License"); you may
#    not use this file except in compliance with the License. You may obtain
#    a copy of the License at
#
#         http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
#    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
#    License for the specific language governing permissions and limitations
#    under the License.

from tempest import config
from tempest.lib.common.utils import data_utils
from tempest.lib import exceptions as lib_exc
from testtools import testcase as tc

from manila_tempest_tests.common import constants
from manila_tempest_tests.tests.api import base
from manila_tempest_tests import utils

CONF = config.CONF


class ShareGroupTypesAdminNegativeTest(base.BaseSharesMixedTest):

    @classmethod
    def skip_checks(cls):
        super(ShareGroupTypesAdminNegativeTest, cls).skip_checks()
        if not CONF.share.run_share_group_tests:
            raise cls.skipException('Share Group tests disabled.')

        utils.check_skip_if_microversion_lt(
            constants.MIN_SHARE_GROUP_MICROVERSION)

    @classmethod
    def resource_setup(cls):
        super(ShareGroupTypesAdminNegativeTest, cls).resource_setup()
        cls.share_type = cls.create_share_type(
            data_utils.rand_name("unique_st_name"),
            extra_specs=cls.add_extra_specs_to_dict({"key": "value"}),
            client=cls.admin_shares_v2_client)
        cls.share_group_type = cls.create_share_group_type(
            data_utils.rand_name("unique_sgt_name"),
            share_types=[cls.share_type['share_type']['id']],
            client=cls.admin_shares_v2_client)

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_create_share_group_type_without_name(self):
        self.assertRaises(
            lib_exc.BadRequest,
            self.admin_shares_v2_client.create_share_group_type,
            name=None,
            share_types=data_utils.rand_name("fake"))

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_create_share_group_type_with_nonexistent_share_type(self):
        self.assertRaises(
            lib_exc.NotFound,
            self.admin_shares_v2_client.create_share_group_type,
            name=data_utils.rand_name("sgt_name_should_have_not_been_created"),
            share_types=data_utils.rand_name("fake"))

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_create_share_group_type_with_empty_name(self):
        self.assertRaises(
            lib_exc.BadRequest,
            self.create_share_group_type, '',
            client=self.admin_shares_v2_client)

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_create_share_group_type_with_too_big_name(self):
        self.assertRaises(
            lib_exc.BadRequest,
            self.create_share_group_type,
            "x" * 256, client=self.admin_shares_v2_client)

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_create_share_group_type_with_wrong_value_for_group_specs(self):
        self.assertRaises(
            lib_exc.BadRequest,
            self.admin_shares_v2_client.create_share_group_type,
            name=data_utils.rand_name("tempest_manila"),
            share_types=[self.share_type['share_type']['id']],
            group_specs="expecting_error_code_400")

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_get_share_group_type_using_nonexistent_id(self):
        self.assertRaises(
            lib_exc.NotFound,
            self.admin_shares_v2_client.get_share_group_type,
            data_utils.rand_name("fake"))

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_try_delete_share_group_type_using_nonexistent_id(self):
        self.assertRaises(
            lib_exc.NotFound,
            self.admin_shares_v2_client.delete_share_group_type,
            data_utils.rand_name("fake"))

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_try_create_duplicate_of_share_group_type(self):
        unique_name = data_utils.rand_name("unique_sgt_name")
        list_of_ids = set()
        for step in (1, 2):
            sg_type = self.create_share_group_type(
                unique_name,
                share_types=[self.share_type['share_type']['id']],
                client=self.admin_shares_v2_client,
                cleanup_in_class=False)
            self.assertRaises(
                lib_exc.Conflict,
                self.create_share_group_type,
                unique_name,
                share_types=[self.share_type['share_type']['id']],
                client=self.admin_shares_v2_client)
            list_of_ids.add(sg_type['id'])
            self.assertEqual(unique_name, sg_type['name'])
            self.admin_shares_v2_client.delete_share_group_type(sg_type['id'])
        self.assertEqual(2, len(list_of_ids))

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_add_project_access_to_public_share_group_type(self):
        self.assertRaises(
            lib_exc.Conflict,
            self.admin_shares_v2_client.add_access_to_share_group_type,
            self.share_group_type["id"],
            self.admin_shares_v2_client.tenant_id)

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_remove_project_access_from_public_share_group_type(self):
        self.assertRaises(
            lib_exc.Conflict,
            self.admin_shares_v2_client.remove_access_from_share_group_type,
            self.share_group_type["id"],
            self.admin_shares_v2_client.tenant_id)

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_add_project_access_to_nonexistent_share_group_type(self):
        self.assertRaises(
            lib_exc.NotFound,
            self.admin_shares_v2_client.add_access_to_share_group_type,
            data_utils.rand_name("fake"),
            self.admin_shares_v2_client.tenant_id)

    @tc.attr(base.TAG_NEGATIVE, base.TAG_API)
    def test_remove_project_access_from_nonexistent_share_group_type(self):
        self.assertRaises(
            lib_exc.NotFound,
            self.admin_shares_v2_client.remove_access_from_share_group_type,
            data_utils.rand_name("fake"),
            self.admin_shares_v2_client.tenant_id)
