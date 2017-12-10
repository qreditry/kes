from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .funks import makeJSON, getItem


def searchItems(request, item):

    if request.method == 'GET':
        search = request.GET.get('search')

        sortItems = getItem(item).objects.filter(name__icontains=search)

        data = makeJSON(sortItems)

        return JsonResponse(data)

def sortItems(request, item):
    if request.method == 'GET':

        sortItems = getItem(item).objects.all()

        if request.GET.getlist('manufacturer'):
            manufacturers = request.GET.getlist('manufacturer')
            sortItems = sortItems.filter(manufacturer__in=manufacturers)

        if request.GET.getlist('type'):
            types = request.GET.getlist('type')
            sortItems = sortItems.filter(type__in=types)

        if request.GET.get('minPrice'):
            minPrice = request.GET.get('minPrice')
            sortItems = sortItems.filter(price__gte=minPrice)
            
        if request.GET.get('maxPrice'):
            maxPrice = request.GET.get('maxPrice')
            sortItems = sortItems.filter(price__lte=maxPrice)
            
        if request.GET.get('minPower'):
            minPower = request.GET.get('minPower')
            sortItems = sortItems.filter(power__gte=minPower)

        if request.GET.get('maxPower'):
            maxPower = request.GET.get('maxPower')
            sortItems = sortItems.filter(power__lte=maxPower)
            
        if request.GET.get('amount'):
            amount = request.GET.get('amount')
            sortItems = sortItems.filter(beforeAmount__lte=amount).filter(afterAmount__gte=amount)




        data = makeJSON(sortItems)

        return JsonResponse(data)



def itemPage(request, slug, item):
    itemModel = get_object_or_404(getItem(item), slug=slug)

    return render(request, 'shop/item.html', {'item': itemModel})

