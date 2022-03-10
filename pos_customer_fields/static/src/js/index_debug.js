odoo.define('pos_customer_fields.customer_fields',function(require) {
    "use strict";
    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    var pos_model_super = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        initialize: function(session, attributes){
            let self = this;
            for(let model_obj of self.models){
                if(model_obj.model == 'res.partner'){
                    model_obj.fields.push('vehicle_number');
                }
            }
            return pos_model_super.initialize.apply(self, arguments);
        },
        load_server_data: function(){
            var self = this;
            return pos_model_super.load_server_data.apply(this, arguments);
        },
    });

    var posDB_super = require('point_of_sale.DB');
    var posDBSearch =  posDB_super.include({
        _partner_search_string: function(partner){
            console.log('partner search');
            let str = '';
            if(partner.vehicle_number)
            {
                str = original_partner_search_string(partner);
                str += '|' + partner.vehicle_number;
                str = '' + partner.id + ':' + str.replace(':', '').replace(/\n/g, ' ') + '\n';
            }
            else{
                str = this._super(partner);
            }
            return str;
        }
    });

    function original_partner_search_string(partner){
        var str =  partner.name;
        if(partner.barcode){
            str += '|' + partner.barcode;
        }
        if(partner.address){
            str += '|' + partner.address;
        }
        if(partner.phone){
            str += '|' + partner.phone.split(' ').join('');
        }
        if(partner.mobile){
            str += '|' + partner.mobile.split(' ').join('');
        }
        if(partner.email){
            str += '|' + partner.email;
        }
        if(partner.vat){
            str += '|' + partner.vat;
        }
        return str;
    }
//    return posDBSearch;
//    var ClientListScreenWidget = screens.ClientListScreenWidget.include({
//        save_client_details: function(partner){
//            console.log('client saved');
//            return this._super();
//        }
//    });
});