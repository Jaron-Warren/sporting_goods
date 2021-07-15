import { ProxyState } from "../AppState.js"
import Sport from "../Models/Sport.js"
class SportsService {

  addCart(itemId) {
    console.log('At Service - click Item')
    ProxyState.sportitems = [...ProxyState.sportitems, new Sport(itemId)]
  }

  addCash() {
    // console.log('At Service- click add cash')
    ProxyState.Cash += 100
  }

  addCart(id) {
    ProxyState.cartitems = [...ProxyState.cartitems, new cartitems(id)]
  }
}

export const sportsService = new SportsService()
