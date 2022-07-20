
from odoo import api, fields, models, _


class ResBranch(models.Model):
    _name = 'res.branch'
    _description = 'Department'

    name = fields.Char(required=True)
    company_id = fields.Many2one('res.company', required=True)