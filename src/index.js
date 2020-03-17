document.addEventListener("DOMContentLoaded", () => {
  const itemArray = []
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addItem);
  let listItem = document.getElementById('tasks');

  function addItem(event) {
    event.preventDefault();

    let inputItem = document.querySelectorAll('input#submit').value;
    itemArray.push(`<li>${inputItem}</li>`);
    for (i = 0; i < itemArray.length; i++) {
      listItem.innerHTML = itemArray[i]
    }

  };


});
