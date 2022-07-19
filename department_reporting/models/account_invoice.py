# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _
from odoo.exceptions import UserError
from odoo.tools.float_utils import float_compare



class AccountInvoice(models.Model):
	_inherit = 'account.invoice'

	def _default_branch_id(self):
		branch_id = self.env['res.users'].browse(self._uid).branch_id.id
		return branch_id

	branch_id = fields.Many2one('res.branch', default=_default_branch_id,string="Department")

	def action_invoice_open(self):
		res = super(AccountInvoice, self).action_invoice_open()
		for rec in self:
			if rec.move_id:
				rec.move_id.branch_id = rec.branch_id.id
				for line in rec.move_id.line_ids:
					line.branch_id = line.account_id.branch_id.id
		return res