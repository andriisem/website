odoo.define('website_breadcrumb.breadcrumb', function (require) {
"use strict";

var ajax = require('web.ajax');
var core = require('web.core');
var animation = require('web_editor.snippets.animation');

var qweb = core.qweb;
var templates = ajax.loadXML('/website_breadcrumb/static/src/xml/breadcrumbs.xml', qweb);

animation.registry.s_breadcrumb = animation.Class.extend({
    selector: ".s_breadcrumb",
    start: function () {
        ajax.rpc('/breadcrumb/get', [], {}).then(function (data) {
            var content = $(qweb.render('Breadcrumbs', data))[0].innerHTML;
            document.querySelector('.breadcrumb_header').innerHTML = content;
        });
    },
});
});
