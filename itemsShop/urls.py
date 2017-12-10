from django.conf.urls import url
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='shop/itemsShop.html')),
    url(r'^sort=', views.sortItems),
    url(r'^search=', views.searchItems),
    url(r'^(?P<slug>[-*\w]+)/$', views.itemPage),
]
