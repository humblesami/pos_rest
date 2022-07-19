# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _
from odoo.exceptions import UserError


class ResPartner(models.Model):
	_inherit = 'res.partner'

	
	def _default_branch_id(self):
		branch_id = self.env['res.users'].browse(self._uid).branch_id.id
		return branch_id

	branch_id = fields.Many2one('res.branch', default=_default_branch_id,string="Department")
	
	