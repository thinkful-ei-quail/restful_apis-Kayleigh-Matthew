import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import store from './store';
import shoppingList from './shopping-list';

//consolidates all the functions declared in other pages and implements them into one function
const main = function () {
  document.body.style.backgroundImage = 'url("images/food.jpg")';
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
 
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);