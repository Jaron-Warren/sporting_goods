
import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import Topping from "../Models/Topping.js";

export function saveState() {
  localStorage.setItem('Sporting_Goods', JSON.stringify({
    pizzas: ProxyState.sportitems,
    toppings: ProxyState.Cash
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Sporting_Goods'))
  console.log(data)
  if (data != null) {
    ProxyState.sportitems = data.sportitems.map(s => new SportItems(s))
    ProxyState.cash = data.cash.tonumber()
  }

}