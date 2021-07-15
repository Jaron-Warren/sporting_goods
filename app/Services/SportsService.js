import { ProxyState } from "../AppState.js"
class SportsService {

  createItem() {

  }

  addCash() {
    ProxyState.Cash += 100
  }

}

export const sportsService = new SportsService()
