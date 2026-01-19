const getItems = () => {
  fetch('/api/items')
    .then(response => response.json())
    .then(response => {
      if (response.statusCode == 200) {
        addItems(response.data);
      }
    });
};

const addItems = (items) => {
  let list = '';
  items.forEach(item => {
    list += `<li>${item.name} - ${item.category} - $${item.price}</li>`;
  });
  document.getElementById("itemList").innerHTML = list;
};

document.addEventListener('DOMContentLoaded', function () {
  getItems();
});