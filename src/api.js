const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kaythew';

function getItems() {
  return fetch(`${BASE_URL}/items`)
    .catch(err => {
      new Error(err.message);
    });
}

function createItem(name) {
  const newItem = JSON.stringify({name});
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  })
    .catch(err => {
      new Error(err.message);
    });
}

function updateItem(id, updateData) {
  const newItem = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newItem,
  })
    .catch(err => {
      new Error(err.message);
    });
}

function deleteItem(id) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  })
    .catch(err => {
      new Error(err.message);
    });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};