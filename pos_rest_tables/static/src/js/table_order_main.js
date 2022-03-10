//This file is just added so we can keep the actual code debuggable
//otherwise we could directly include inline_customer_debug.js in view file

(function(){
    let dt = new Date();
    dt = dt.getMinutes() + '-' + dt.getSeconds();
    let scripts = `
    <script type="text/javascript" src="/pos_rest_tables/static/src/js/table_order_main_debug.js?v=${dt}"></script>
    `;
    $('head').append('<link rel="stylesheet" href="/pos_rest_tables/static/src/css/table_order.css?v='+dt+'" />');
    document.write(scripts);
})();
