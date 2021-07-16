import { generateId } from "../Utils/GenerateId.js";

export default class Sport {

  constructor({ item, price, desc, stock, imgurl, id = generateId() }) {
    //   debugger;
    this.id = id
    this.item = item
    this.price = price
    this.description = desc || "no Description is provided at this point of time"
    this.stock = stock
    this.imgurl = imgurl || '//placehold.it/200x200'

  }
  // to make 1st char uppercase
  // str.charAt(0).toUpperCase()+str.slice(1);
  get Template() {
    return `
    <div class="col-md-3 col-sm-2 p-2 m-3">
      <div class="item justify-align-content align-center img-fluid bg-light shadow">
        <img src=${this.imgurl} width=150 height=150 class="w-80em" alt="">
          <div class="p-3">
            <div class="text-center">
              <p><b>${this.item.toUpperCase()} - ${this.price} - ${this.description}</b></p>
            </div>
              <p class="${this.stock} == '0' ? 'Out of Stock' : 'In Stock :' + ${this.stock}">${this.stock}</p>
              <p class="${this.id}">${this.id}</p>
              <button type = "submit" onclick="app.sportsController.addCart('${this.item}')" class = "btn btn-outline-success"> Add to Cart</button>
           </div >
      </div >
    </div >
  `
  }
}