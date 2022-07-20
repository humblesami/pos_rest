odoo.define('branch_accounting_report.account_report_generic', function (require) {
    'use strict';
    var account_report_generic = require('account_reports.account_report');
    account_report_generic.include({
        render_searchview_buttons: function () {
            let self = this;
            let res = this._super();
            console.log('v3 search view buttons', ' rendered');
            self.$searchview_buttons.find('.js_branch_auto_complete').on('change', function () {
                self.report_options.branch = self.$searchview_buttons.find('[data-filter="branch"]').val();
                //self.report_options.analytic_tags = self.$searchview_buttons.find('[data-filter="analytic_tags"]').val();
                console.log("self.report_options.branch called", self.report_options.branch);
                return self.reload().then(function () {
                    self.$searchview_buttons.find('.account_branch_filter').click();
                })
            });
            return res;
        },
    });
});
