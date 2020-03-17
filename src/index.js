document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addItem);
  let listItem = document.getElementById('tasks');

  function addItem(event) {

    event.preventDefault();
    let inputItem = document.getElementByName('new-task-description').value
    listItem.innerHTML = `<li>${inputItem}</li>`

  };


});
