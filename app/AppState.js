import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Sport from "./Models/Sport.js"

class AppState extends EventEmitter {
  sportitems = [
    new Sport({
      item: 'Mens Running Shoe',
      price: '120.00',
      description: 'Nike Sports Mens running show',
      stock: '200',
      imgurl: "https://images-na.ssl-images-amazon.com/images/I/71kN6GMBVRL._AC_UX575_.jpg"
    }),
    new Sport({
      item: 'Ladies Running Shoe',
      price: '100.00',
      description: 'Nike Sports Ladies running show',
      stock: '200',
      imgurl: "https://ae01.alicdn.com/kf/HTB1_oBnMFXXXXbWXpXXq6xXFXXXP/2017-New-Fashion-Autumn-Winter-Suede-Men-Shoes-Men-Canvas-Shoes-Leather-Casual-Breathable-Shoes-Flats.jpg"

    }),
    new Sport({
      item: 'Kids Running Shoe',
      price: '80.00',
      description: 'Nike Sports Kids running show',
      stock: '200',
      imgurl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ly_wbufsvzv0iAy-1Vru1gHaE6%26pid%3DApi%26h%3D160&f=1"
    }),
    new Sport({
      item: 'Mens Walking Shoe',
      price: '150.00',
      description: 'Nike Sports Mens Walking show',
      stock: '200',
      imgurl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1F7kdrhr4ep__5FSqScL1AHaEK%26pid%3DApi%26h%3D160&f=1"
    })
  ]
  Cash = 0

  cartitems = []

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
