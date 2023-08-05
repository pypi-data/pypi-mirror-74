# Copyright 2017 Akretion (http://www.akretion.com).
# @author Sébastien BEAU <sebastien.beau@akretion.com>
# Copyright 2019 Camptocamp SA (http://www.camptocamp.com).
# @author Simone Orsi <simone.orsi@camptocamp.com>
# Copyright 2020 Giovanni Serra
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
import base64
import fnmatch
import logging

from odoo import fields, models

_logger = logging.getLogger(__name__)


class StorageBackend(models.Model):
    _name = "storage.backend"
    _inherit = ["collection.base", "server.env.mixin"]
    _backend_name = "storage_backend"

    name = fields.Char(required=True)
    backend_type = fields.Selection(
        selection=[("filesystem", "Filesystem")], required=True
    )
    directory_path = fields.Char(
        help="Relative path to the directory to store the file"
    )

    @property
    def _server_env_fields(self):
        return {"backend_type": {}, "directory_path": {}}

    def _add_b64_data(self, relative_path, data, **kwargs):
        return self._add_bin_data(relative_path, base64.b64decode(data), **kwargs)

    def _get_b64_data(self, relative_path, **kwargs):
        data = self._get_bin_data(relative_path, **kwargs)
        return data and base64.b64encode(data) or ""

    def _add_bin_data(self, relative_path, data, **kwargs):
        return self._forward("add", relative_path, data, **kwargs)

    def _get_bin_data(self, relative_path, **kwargs):
        return self._forward("get", relative_path, **kwargs)

    def _list(self, relative_path="", pattern=False):
        names = self._forward("list", relative_path)
        if pattern:
            names = fnmatch.filter(names, pattern)
        return names

    def _delete(self, relative_path):
        return self._forward("delete", relative_path)

    def _forward(self, method, relative_path, *args, **kwargs):
        _logger.debug(
            "Backend Storage ID: %s type %s: %s file %s",
            self.backend_type,
            self.id,
            method,
            relative_path,
        )
        self.ensure_one()
        adapter = self._get_adapter()
        return getattr(adapter, method)(relative_path, *args, **kwargs)

    def _get_adapter(self):
        with self.work_on(self._name) as work:
            return work.component(usage=self.backend_type)
