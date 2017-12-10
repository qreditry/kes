from .models import Pech


def makeJSON(sortItems):  # fixme
    items = []

    for i in range(len(sortItems)):

        items.append({
            'name': sortItems[i].name,
            'slug': sortItems[i].slug
        })

        if sortItems[i].power:
            items[i].update({
                'power': sortItems[i].power
            })

        if sortItems[i].beforeAmount and sortItems[i].afterAmount:
            items[i].update({
                'beforeAmount': sortItems[i].beforeAmount,
                'afterAmount': sortItems[i].afterAmount
            })

        if sortItems[i].price:
            items[i].update({
                'price': sortItems[i].price
            })

    # for sortItem in sortItems:
    #     items.append({
    #         'name': sortItem.name,
    #         'slug': sortItem.slug,
    #         'power': sortItem.power,
    #         'beforeAmount': sortItem.beforeAmount,
    #         'afterAmount': sortItem.afterAmount,
    #         'price': sortItem.price
    #     })

    data = {
        'number': len(sortItems),
        'items': items
    }

    return data


def getItem(item):
    if item == 'pech':
        return Pech
    elif item == 'door':
        pass
    elif item == 'parogen':
        pass
