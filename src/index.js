document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  const addTask = (event) => {
      event.preventDefault();
      const taskText = taskInput.value.trim();

      if (taskText) {
          const li = document.createElement('li');
          li.textContent = taskText;

          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Remove';
          removeBtn.onclick = () => {
              taskList.removeChild(li);
          };

          li.appendChild(removeBtn);
          taskList.appendChild(li);
          taskInput.value = '';
      }
  };

  taskForm.addEventListener('submit', addTask);
});
