document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementByTag('form')

  let listItem = document.getElementById('tasks');

  function addItem(event) {
    form.addEventListener('submit', addItem)
    event.preventDefault();
    let inputItem = document.getElementById('new-task-description').value
    listItem.innerHTML = `<li>inputItem</li>`

  };


});
