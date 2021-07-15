import { ProxyState } from "../AppState.js";
import { sportsService } from "../Services/SportsService.js";


function _draw() {
  // initalization of template variable
  console.log(ProxyState.Cash)

  let template = ''
  let sportitems = ProxyState.sportitems
  sportitems.forEach(sitems => template += sitems.Template)

  document.getElementById('Items').innerHTML = template
  document.getElementById('cash').innerText = ProxyState.Cash

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
    console.log('At Controller- click add cash')
    sportsService.addCash()
  }

  createItem() {
    console.log('At Controller- Click Item')
    sportsService.createItem()
  }
}