const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  return button;
};
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};
const createDiv = (classes) => {
  const div = document.createElement("div");
  div.className = classes;
};
function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  // Validation
  if (newItem === "" || newItem === "") {
    alert("please add an item");
    return;
  }
  // create list Item
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(newItem));
  const deletButton = createButton("remove-item btn-link text-red");
  const xIcon = createIcon("fa-solid fa-xmark");
  deletButton.appendChild(xIcon);
  listItem.appendChild(deletButton);
  itemList.appendChild(listItem);
  itemInput.value = "";
}
// Event Listener
itemForm.addEventListener("submit", addItem);
