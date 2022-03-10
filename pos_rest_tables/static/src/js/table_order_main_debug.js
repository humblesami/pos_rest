odoo.define('pos_rest_tables.main',function(require) {
    "use strict";
    var models = require('point_of_sale.models');
    var pos_model_super = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({

    });

    var posDB = require('point_of_sale.DB');
    var posDBSearch =  posDB.include({

    });

    var screens = require('point_of_sale.screens');
    var ClientListScreenWidget = screens.ClientListScreenWidget.include({

    });


    var pos_floors = require('pos_restaurant.floors');

    var floor_screen_widget = pos_floors.FloorScreenWidget;
    floor_screen_widget.include({
        init: function(parent, options) {
            this._super(parent, options);
            console.log('Floor init');
        },
    });

    var table_widget = pos_floors.TableWidget;
    table_widget.include({
        init: function(parent, options){
            this._super(parent, options);
            console.log('Floor tables init');
        },
    });

});