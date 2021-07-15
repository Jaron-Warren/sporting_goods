import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  sportitems = [
    new SportItems({
      Item: 'Running Shoe',
      Price: '120',
      Description: 'Nike Sports running show',
      Qty: '$200,000',
      imgurl: "https://ssl.cdn-redfin.com/v374.3.1/images/merch/generalImages/CompleteSolution_Q1_2020_557_YardSign2.jpg"
    })
  ]
  Cash = 0

}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
