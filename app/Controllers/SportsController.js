import { ProxyState } from "../AppState.js";
import { sportsService } from "../Services/SportsService.js";


function _draw() {
  // initalization of template variable
  let template = ''

}
export default class SportsController {
  constructor() {
    ProxyState.on('items', _draw)
    ProxyState.on('items', saveState)
    // Initial draw, later on need to fetch from Local storage
    _draw()
  }

  addCash() {


  }
}

createItem()
{
  sportsService.createItem()
}