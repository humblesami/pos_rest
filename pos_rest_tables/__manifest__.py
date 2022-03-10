# -*- coding: utf-8 -*-
{
    'name': "Table Order Completion",

    'summary': """
    when there are too much customers then this module helps
        """,
    'author': "Visiomate sami",

    # any module necessary for this one to work correctly
    'depends': ['pos_restaurant'],

    # always loaded
    'data': [
        'views/table_order_template.xml',
    ],
    'qweb': ['static/src/xml/table_order_main.xml'],
}