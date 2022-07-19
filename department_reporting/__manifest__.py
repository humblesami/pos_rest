# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Multiple Departments',
    'version': '12.0.0.1',
    'category': 'Sales',
    'summary': 'Multiple Departments/Unit Operation',
    "description": """
       .
    """,
    'author': 'Odoo',
    'website': 'http://www.odoo.com',
    'depends': ['base','sale','purchase','stock','account'],
    'data': [
                'security/security.xml',
                'security/ir.model.access.csv',
                'views/res_department.xml',
                'views/res_users.xml',
                'views/res_partner.xml',
                'views/sale_order.xml',
                'views/purchase_order.xml',
                'views/stock_picking.xml',
                'views/account_invoice.xml',
                'views/account_move.xml',
                'views/account_account.xml', 
                'views/stock_move.xml',
             ],
    'demo': [],
    'test': [],
    'installable': True,
    'auto_install': False,
}
