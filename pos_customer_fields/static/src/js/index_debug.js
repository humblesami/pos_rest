odoo.define('pos_customer_fields',function(require) {
    "use strict";
    var models = require('point_of_sale.models');
    var pos_model_super = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        load_server_data: function(){
            var self = this;
            for(let model_obj of self.models){
                if(model_obj.model == 'res.partner'){
                    model_obj.fields.push('vehicle_number')
                    model_obj.fields.push('loading_data_offline');
                }
            }
            return pos_model_super.load_server_data.apply(this, arguments);
        },
    });
});
console.log(1000);