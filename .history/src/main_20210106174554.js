// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
}

// main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
