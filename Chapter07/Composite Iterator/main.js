import Menu from './Menu';
import MenuItem from './MenuItem';
import Mattress from './Mattress';

const oPanCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");

const oCoffeeMenu = new Menu("Cafe Menu", "Lunch");
oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

const oLunchMenu = new Menu("Lunch Menu", "Lunch");
oLunchMenu.add(new MenuItem("Pasta",
  "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
  true,
  3.89));
oLunchMenu.add(oCoffeeMenu);

const oAllMenus = new Menu("ALL MENUS", "All menus combined");

oAllMenus.add(oPanCakeHouseMenu);
oAllMenus.add(oLunchMenu);

const oMattress = new Mattress(oAllMenus);
oMattress.printMenu();