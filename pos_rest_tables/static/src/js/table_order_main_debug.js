odoo.define('pos_rest_tables.main',function(require) {
    "use strict";

    var pos_floors = require('pos_restaurant.floors');

    var floor_screen_widget = pos_floors.FloorScreenWidget;
    floor_screen_widget.include({
        init: function(parent, options) {
            this._super(parent, options);
            console.log('Floor init');
        },
        show: function(){
            this._super();
            let selected_table = this.pos.table;
            if(selected_table){
                let table_id = selected_table.id;
                for(let table_widget of this.table_widgets){
                    if(table_widget.table.id == table_id){
                        if(table_widget.order_count == 0){
                            //console.log(selected_table);
                            console.log('Table is dirty');
                            let old_background = table_widget.$el.css('background');
                            table_widget.$el.css('background', 'red');
                            let $clean_btn = $('<div class="table-cleaner">Make Clean</div>');
                            table_widget.$el.append($clean_btn);
                            $clean_btn.click(function(e){
                                //To avoid firing the table click event we need
                                e.preventDefault();
                                e.stopPropagation();
                                table_widget.$el.css('background', old_background);
                                $clean_btn.remove();
                            });
                        }
                    }
                }
            }
        }
    });

//    var models = require('point_of_sale.models');
//    var pos_model_super = models.PosModel.prototype;
//    models.PosModel = models.PosModel.extend({
//
//    });
//
//    var posDB = require('point_of_sale.DB');
//    var posDBSearch =  posDB.include({
//
//    });
//
//    var screens = require('point_of_sale.screens');
//    var ClientListScreenWidget = screens.ClientListScreenWidget.include({
//
//    });
//
//    var table_widget = pos_floors.TableWidget;
//    table_widget.include({
//        init: function(parent, options){
//            this._super(parent, options);
//        },
//    });
});