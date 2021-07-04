const addButton = document.querySelector(".add");
const inputELement = document.querySelector("input");
const listBoxELement = document.querySelector(".listBox");

addButton.addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log("Updating List...");
  tit = inputELement.value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  inputELement.value=""
  update();
}

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }

  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
    <div>${index + 1}:- ${
      element[0]
    } <button class="btn btnList" onclick="deleted(${index})">Delete</button></div><hr>
    `;
  });
  listBoxELement.innerHTML = str;
}
update();

function deleted(itemIndex) {
  console.log("Delete", itemIndex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
function clearStorage() {
  if (confirm("Do you areally want to clear?")) {
    console.log("Clearing the storage");
    localStorage.clear();
    update();
  }
}
