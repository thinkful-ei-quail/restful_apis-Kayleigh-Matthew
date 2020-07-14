
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kaythew';
function getItems(){
  return fetch(`${BASE_URL}/items`);
    
}

function createItem(name) {
  let newItem = {'name' : name};
  newItem.json.stringify();
}

export default {
  getItems,
  createItem
};