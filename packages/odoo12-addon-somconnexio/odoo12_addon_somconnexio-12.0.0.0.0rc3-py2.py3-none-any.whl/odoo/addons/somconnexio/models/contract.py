from odoo import models, fields, api
from odoo.exceptions import ValidationError


class Contract(models.Model):
    _inherit = 'contract.contract'

    contract_category_id = fields.Many2one(
        'contract.category',
        'Category Contract',
        required=True
    )
    service_technology_id = fields.Many2one(
        'service.technology',
        'Service Technology'
    )
    service_supplier_id = fields.Many2one(
        'service.supplier',
        'Service Supplier'
    )
    service_partner_id = fields.Many2one(
        'res.partner',
        'Service Contact',
    )
    is_broadband = fields.Boolean(
        compute='_get_is_broadband',
    )

    @api.depends('contract_category_id')
    def _get_is_broadband(self):
        for record in self:
            broadband = self.env.ref('somconnexio.broadband')
            record.is_broadband = (
                broadband.id == self.contract_category_id.id
            )

    @api.one
    @api.constrains('partner_id', 'service_partner_id')
    def _check_service_partner_id(self):
        if (
            self.contract_category_id != self.env.ref('somconnexio.broadband')
        ):
            return True
        if self.service_partner_id == self.partner_id:
            return True
        if self.service_partner_id.parent_id != self.partner_id:
            raise ValidationError(
                'Service contact must be a child of %s' % (
                    self.partner_id.name
                )
            )
        if self.service_partner_id.type != 'service':
            raise ValidationError(
                'Service contact %s must be service type' % (
                    self.service_partner_id.name
                )
            )

    @api.one
    @api.constrains('partner_id', 'invoice_partner_id')
    def _check_invoice_partner_id(self):
        if self.invoice_partner_id == self.partner_id:
            return True
        if self.invoice_partner_id.parent_id != self.partner_id:
            raise ValidationError(
                'Invoicing contact must be a child of %s' % (
                    self.partner_id.name
                )
            )
        if self.invoice_partner_id.type != 'invoice':
            raise ValidationError(
                'Invoicing contact %s must be invoice type' % (
                    self.invoice_partner_id.name
                )
            )

    @api.one
    @api.constrains('service_technology_id', 'service_supplier_id')
    def _check_service_technology_service_supplier(self):
        if self.service_supplier_id:
            available_relations = (
                self.env['service.technology.service.supplier'].search([
                    ('service_technology_id', '=', self.service_technology_id.id)
                ])
            )
            available_service_suppliers = [
                s.service_supplier_id.id for s in available_relations
            ]
            if self.service_supplier_id.id not in available_service_suppliers:
                raise ValidationError(
                    'Service supplier %s is not allowed by service technology %s'
                    % (
                        self.service_supplier_id.name,
                        self.service_technology_id.name
                    )
                )

    @api.one
    @api.constrains('contract_category_id', 'service_technology_id')
    def _check_contract_category_service_technology(self):
        if self.service_technology_id:
            available_relations = (
                self.env['contract.category.service.technology'].search([
                    ('contract_category_id', '=', self.contract_category_id.id)
                ])
            )
            available_services_tech = [
                c.service_technology_id.id for c in available_relations
            ]
            if self.service_technology_id.id not in available_services_tech:
                raise ValidationError(
                    'Service technology %s is not allowed by contract type %s' % (
                        self.service_technology_id.name,
                        self.contract_category_id.name
                    )
                )

    @api.one
    @api.constrains('service_technology_id', 'service_supplier_id', 'contract_line_ids')
    def _check_contract_category_products(self):
        available_relations = self.env['product.category.technology.supplier'].search([
            ('service_technology_id', '=', self.service_technology_id.id),
            ('service_supplier_id', '=', self.service_supplier_id.id)
        ])
        available_categories = [c.product_category_id.id for c in available_relations]
        available_products_categ = self.env['product.template'].search([
            ('categ_id', 'in', available_categories)
        ])

        for line in self.contract_line_ids:
            if line.product_id.product_tmpl_id not in available_products_categ:
                raise ValidationError(
                    'Product %s is not allowed by contract with \
                            technology %s and supplier %s' % (
                        line.product_id.name,
                        self.service_technology_id.name,
                        self.service_supplier_id.name
                    )
                )

    @api.one
    @api.constrains('partner_id', 'contract_line_ids')
    def _check_coop_agreement(self):
        if self.partner_id.coop_agreement:
            for line in self.contract_line_ids:
                line_prod_tmpl_id = line.product_id.product_tmpl_id
                agreement = self.partner_id.coop_agreement_id
                if line_prod_tmpl_id not in agreement.products:
                    raise ValidationError(
                        'Product %s is not allowed by agreement %s' % (
                            line.product_id.name, agreement.code
                        )
                    )

    @api.model
    def create(self, values):
        mobile_category_id = self.env.ref('somconnexio.mobile').id
        if values['contract_category_id'] == mobile_category_id:
            if 'service_technology_id' not in values:
                values['service_technology_id'] = self.env.ref(
                    'somconnexio.service_technology_mobile'
                ).id
            if 'service_supplier_id' not in values:
                values['service_supplier_id'] = self.env.ref(
                    'somconnexio.service_supplier_masmovil'
                ).id
        if 'service_technology_id' in values:
            service_tech_id = values['service_technology_id']
            adsl_id = self.env.ref('somconnexio.service_technology_adsl').id
            if (
                    service_tech_id == adsl_id and
                    'service_supplier_id' not in values
            ):
                values['service_supplier_id'] = self.env.ref(
                    'somconnexio.service_supplier_orange'
                ).id
        res = super(Contract, self).create(values)
        return res
