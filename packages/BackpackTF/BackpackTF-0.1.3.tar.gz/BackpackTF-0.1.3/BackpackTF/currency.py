class Currency:
    #
    # Documentation for the backpack.tf API https://backpack.tf/api/index.html#/
    #
    def __init__(self, apikey=""):
        import requests
        import json

        if apikey == "":
            print("Error, you need to specify an API key")

        else:
            self.api_key = apikey

    #
    # Function Returns A JSON of the value of currencies
    #
    def get_currencies(self):
        import requests
        import json

        currencies = requests.get(
            "https://backpack.tf/api/IGetCurrencies/v1?key=" + self.api_key)
        currencyJSON = json.loads(currencies.text)
        if currencyJSON['response']['success'] == "1" or currencyJSON['response']['success'] == 1:
            return currencyJSON['response']['currencies']
        else:
            raise Exception('Your API key is invalid')

    # alias for compatibility with older versions
    # please use the new name, "get_currencies"
    getCurrencies = get_currencies

    #
    # Gets Price History of a specific item in an array of previous values
    #
    # Name - The item's base name
    # Quality - The item's quality, Strange, Unique, Unusual
    # Craftable - Get the item's craftable or not 0 or 1
    # Tradable - get the item's tradable status
    # PriceIndex - Most items is 0, however particle effects is the ID of the particle effect
    #   for crates it corresponds to the crate series, for strangifiers/unusualifiers is the
    #   definition index of the item it can be used on, chemistry set is a hyphented
    #   definition index 1086-14 is the index for a collector's festive wrangler
    #   here's a link to an item http://prntscr.com/pf2s0h
    #

    def price_history(self, name="", quality="Unique", craftable=1, tradable=1, priceIndex=0):
        import requests
        import urllib.parse
        import json

        payload = {
            "appid": "440",
            "quality": str(quality),
            "item": name,
            "tradable": str(tradable),
            "craftable": str(craftable),
            "priceindex": str(priceIndex),
            "key": self.api_key
        }

        encoded = urllib.parse.urlencode(payload)

        r = requests.get(
            "https://backpack.tf/api/IGetPriceHistory/v1?" + encoded)
        jsondata = json.loads(r.text)

        success = False
        try:
            if jsondata['response']['success'] == 1 or jsondata['response']['success'] == "1":
                success = True
        except:
            return jsondata

        if success:
            return jsondata['response']['history']
        else:
            raise Exception("Unsuccessful Request")
    
    # alias for compatibility with older versions
    # please use the new name, "price_history"
    priceHistory = price_history

    #
    # Gets Price of a specific item
    #
    # Name - The item's base name
    # Quality - The item's quality, Strange, Unique, Unusual
    # Craftable - Get the item's craftable or not 0 or 1
    # Tradable - get the item's tradable status
    # PriceIndex - Not really sure to be honest
    #

    def item_price(self, name="", quality="Unique", craftable=1, tradable=1, priceIndex=0):
        import requests
        import urllib.parse
        import json

        payload = {
            "appid": "440",
            "quality": str(quality),
            "item": name,
            "tradable": str(tradable),
            "craftable": str(craftable),
            "priceindex": str(priceIndex),
            "key": self.api_key
        }

        encoded = urllib.parse.urlencode(payload)

        r = requests.get(
            "https://backpack.tf/api/IGetPriceHistory/v1?" + encoded)
        jsondata = json.loads(r.text)

        success = False
        try:
            if jsondata['response']['success'] == 1 or jsondata['response']['success'] == "1":
                success = True
        except:
            return jsondata

        if success:
            return jsondata['response']['history'][len(jsondata['response']['history']) - 1]
        else:
            raise Exception("Request Unsuccessful.")

    # alias for compatibility with older versions
    # please use the new name, "item_price"
    itemPrice = item_price

    #
    # Gets all prices, requires an elevated API key
    #
    # Since - Only prices that have been updated since the unix EPOCH will be shown
    #

    def get_all_prices(self, raw=2, since=0):
        import requests
        import json

        r = requests.get("https://backpack.tf/api/IGetPrices/v4?raw=" +
                         str(raw) + "&since=" + str(since) + "&key=" + self.api_key)
        jsondata = json.loads(r.text)

        success = False
        try:
            if jsondata['response']['success'] == 1 or jsondata['response']['success'] == "1":
                success = True
        except:
            return jsondata

        if success:
            return jsondata['response']
        else:
            raise Exception("Unsuccessful Request")

    # alias for compatibility with older versions
    # please use the new name, "get_all_prices"
    getAllPrices = get_all_prices
