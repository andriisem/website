import werkzeug.urls

from odoo import http, _
from odoo.http import request


class BreadCrumbs(http.Controller):

    @http.route('/breadcrumb/get', type='json', auth='public', website=True)
    def get_breadcrumb(self):
        referrer_url = werkzeug.urls.url_parse(request.httprequest.referrer).path
        parent_id = request.env['website.menu'].search([('url', '=', referrer_url)], limit=1)
        if parent_id.name:
            return {'menus': [[parent_id.name.title(), '#']]}
        else:
            return {'menus': [['Home', '#']]}
