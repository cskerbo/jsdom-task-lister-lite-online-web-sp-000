document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addItem);
  let listItem = document.getElementById('tasks');

  function addItem(event) {

    event.preventDefault();
    let inputItem = document.getElementById('new-task-description').text
    listItem.innerHTML = `<li>${inputItem}</li>`

  };


});
