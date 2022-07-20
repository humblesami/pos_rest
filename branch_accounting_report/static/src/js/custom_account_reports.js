odoo.define('branch_accounting_report.account_report_generic', function (require) {
    'use strict';
    var account_report_generic = require('account_reports.account_report');
    account_report_generic.include({
        render_searchview_buttons: function () {
            let self = this;
            let res = this._super();
            let branch_dom = self.$searchview_buttons.find('.js_branch_auto_complete');
            branch_dom.select2().val(self.report_options.branch).trigger("change");
            branch_dom.on('change', function () {
                self.report_options.branch = branch_dom.val();
                return self.reload().then(function () {
                    self.$searchview_buttons.find('.account_branch_filter').click();
                })
            });
            return res;
        },
    });
});
