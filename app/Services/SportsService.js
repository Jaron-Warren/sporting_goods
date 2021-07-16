import { ProxyState } from "../AppState.js"
import Sport from "../Models/Sport.js"
class SportsService {

  addCash() {
    // console.log('At Service- click add cash')
    ProxyState.Cash += 100
  }

  addCart(item) {

    let found = ProxyState.sportitems.find(s => s.item == item)
    if (ProxyState.Cash >= found.price) {
      ProxyState.Cash -= found.price
      found.stock--
      //     ProxyState.cartitems = [...ProxyState.cartitems, cartitems(found)]
      ProxyState.sportitems = ProxyState.sportitems
    }
    console.log('At Service- Add item: ' + found.item)
  }
}

export const sportsService = new SportsService()
