document.addEventListener("DOMContentLoaded", () => {
  // your code here// Get elements from the DOM
const taskForm = document.getElementById('create-task-form');
const taskInput = document.getElementById('new-task-description');
const taskList = document.getElementById('tasks');

// Function to add a new task
const addTask = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskText = taskInput.value.trim(); // Get the input value

    if (taskText) {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text of the list item

        const removeBtn = document.createElement('button'); // Create a remove button
        removeBtn.textContent = 'Remove'; // Set button text
        removeBtn.onclick = () => {
            taskList.removeChild(li); // Remove the task from the list
        };

        li.appendChild(removeBtn); // Append the remove button to the list item
        taskList.appendChild(li); // Append the list item to the task list
        
        taskInput.value = ''; // Clear the input field
    }
};

// Event listener for the form submission
taskForm.addEventListener('submit', addTask);

});
