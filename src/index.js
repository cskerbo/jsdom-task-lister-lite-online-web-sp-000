document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addItem);
  let listItem = document.getElementById('tasks');

  function addItem(event) {

  
    let inputItem = form.getElementById('new-task-description').value;
    event.preventDefault();
    listItem.innerHTML = `<li>${inputItem}</li>`

  };


});
