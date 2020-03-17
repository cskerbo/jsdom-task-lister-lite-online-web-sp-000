document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementsById('create-task-form');
  form.addEventListener('submit', addItem);
  let listItem = document.getElementById('tasks');

  function addItem(event) {

    event.preventDefault();
    let inputItem = document.getElementById('new-task-description').value
    listItem.innerHTML = `<li>inputItem</li>`

  };


});
