import { ProxyState } from "../AppState.js";
import { sportsService } from "../Services/SportsService.js";


function _draw() {
  // initalization of template variable
  let template = ''
  // Need to add more to the template
}

export default class SportsController {
  constructor() {
    ProxyState.on('sportitem', _draw)
    ProxyState.on('sportitem', saveState)
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