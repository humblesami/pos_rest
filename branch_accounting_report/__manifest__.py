# -*- coding: utf-8 -*-

{
    "name" : "Financial Reports For Branch -Enterprise Edition Odoo",
    "version" : "12.0.0.1",
    "category" : "Accounting",
    "depends" : ['account', 'account_accountant', 'account_reports','department'],
    "author": "Odoo",
    'summary': 'This app helps to provide branch wise filter on all Financial statement for Enterprise edition',
    "description": """
      multiple branch accounting reports
    """,
    "website" : "www.odoo.in",
    "currency": 'EUR',
    "data": [
        'data/account_financial_report_data.xml',
        'views/search_template_view.xml',

    ],
    'qweb': [
    ],
    "auto_install": False,
    "installable": True,
    "images":['static/description/Banner.png'],
}
