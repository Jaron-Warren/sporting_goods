//import PizzasController from "./Controllers/PizzasController.js";
import SportsController from "./Controllers/SportsController.js";
import { sportsService } from "./Services/SportsService.js";

class App {
  // valuesController = new ValuesController();
  sportsController = new SportsController()
}

window["app"] = new App();
