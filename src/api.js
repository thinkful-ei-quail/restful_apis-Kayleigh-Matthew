
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kaythew';
function getItems(){
    fetch (${BASE_URL}/items)
    .then (result => Promise.resolve('A succesful response'));
}
export default {
    getItems
  };