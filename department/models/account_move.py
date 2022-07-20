# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _
from odoo.exceptions import UserError
from odoo.tools.float_utils import float_compare



class AccountMove(models.Model):
	_inherit = 'account.move'

	def _default_branch_id(self):
		branch_id = self.env['res.users'].browse(self._uid).branch_id.id
		return branch_id

	branch_id = fields.Many2one('res.branch', default=_default_branch_id,string="Department")


class AccountMoveLine(models.Model):
	_inherit = 'account.move.line'

	def _default_branch_id(self):
		branch_id = self.env['res.users'].browse(self._uid).branch_id.id
		return branch_id

	branch_id = fields.Many2one('res.branch', default=_default_branch_id,string="Department")

	@api.onchange('account_id')
	def _onchange_account_id(self):
		for rec in self:
			if rec.account_id:
				rec.branch_id = rec.account_id.branch_id.id
			else:
				rec.branch_id = None
