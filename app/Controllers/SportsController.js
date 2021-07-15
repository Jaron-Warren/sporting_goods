import { ProxyState } from "../AppState.js";




function _draw() {
  // initalization of template variable
  let template = ''
  // Need to add more to the template
}

export default class SportsController {
  constructor() {
    ProxyState.on('items', _draw)
    ProxyState.on('items', saveState)
    // Initial draw, later on need to fetch from Local storage
    _draw()
  }
}

createItem()
{
  sportsService.createItem()
}