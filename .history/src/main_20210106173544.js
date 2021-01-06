// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json");
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
