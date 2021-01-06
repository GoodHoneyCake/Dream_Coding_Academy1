// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
    `;
}

function onButtonClick(event, items) {
  console.log(event.target.dataset.key);
  console.log(event.target.dataset.value);
}

function setEventListeners(item) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".button");
  logo.addEventListener("click", () => displayItems(item));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);