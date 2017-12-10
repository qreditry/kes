from django.conf.urls import url, include

urlpatterns = [
    url(r'^pechi/', include('itemsShop.urls'), {'item': 'pech'}),
    url(r'^doors/', include('itemsShop.urls'), {'item': 'door'}),
    url(r'^parogeneratori/', include('itemsShop.urls'), {'item': 'parogen'}),
]
