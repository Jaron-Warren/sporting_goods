import { ProxyState } from "../AppState.js";
import { sportsService } from "../Services/SportsService.js";


function _draw() {
  // initalization of template variable
  let template = ''
  let sportitems = ProxyState.sportitems
  sportitems.forEach(sitems => template += sitems.Template)

  document.getElementById('Items').innerHTML = template
}

export default class SportsController {
  constructor() {
    ProxyState.on('sportitems', _draw)
    ProxyState.on('Cash', _draw)
    ProxyState.on('sportitems', saveState)
    ProxyState.on('Cash', saveState)
    // Initial draw, later on need to fetch from Local storage
    _draw()
  }

  addCash() {
    sportsService.addCash()
  }

  createItem() {
    sportsService.createItem()
  }
}