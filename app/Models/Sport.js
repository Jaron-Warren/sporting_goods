import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class Sport {

  constructor(item, price, description, Stock, imgurl) {
    this.item = item
    this.price = price
    this.description = desscription || "no Description is provided at this point of time"
    this.stock = this.stock
    this.imgurl = imgurl || '//placehold.it/200x200'
  }
  // to make 1st char uppercase
  // str.charAt(0).toUpperCase()+str.slice(1);
  get Template{
    return `
    <div class="col-md-3 col-sm-2 p-2 m-3">
      <div class="item bg-light shadow">
        <img src="//placehold.it/150x150" class="w-80em" alt="">
          <div class="p-3">
            <div class="text-center">
              <p><b>${this.item.ToUpperCase()} - ${this.price} - ${this.description}</b></p>
            </div>
              <p class="${this.stock} == '0' ? 'Out of Stock' : 'In Stock :' + ${this.stock} "></p>
              <button type = "submit" class = "btn btn-outline-success" > Add to Cart</button>
          </div >
      </div >
    </div >
  `
  }
}