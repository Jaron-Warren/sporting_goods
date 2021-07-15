import { ProxyState } from "../AppState.js"
class SportsService {

  createItem() {
    console.log('At Service - click Item')

  }

  addCash() {
    console.log('At Service- click add cash')
    ProxyState.Cash += 100
  }

}

export const sportsService = new SportsService()
