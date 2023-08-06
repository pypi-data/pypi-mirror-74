from django.utils.translation import ugettext_lazy as _
from django.urls import reverse

from cms.toolbar_pool import toolbar_pool
from cms.toolbar_base import CMSToolbar


@toolbar_pool.register
class PollToolbar(CMSToolbar):
    def populate(self):
        if self.request.current_page:
            menu = self.toolbar.get_or_create_menu('page')
            menu.add_link_item(
                _('Export'),
                url=reverse('admin:cms_page_export',
                            args=(self.request.current_page.pk,)))
