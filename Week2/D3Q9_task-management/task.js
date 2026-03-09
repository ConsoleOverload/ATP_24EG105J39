// TODO: Import validator functions
                    import { validateTitle,validatePriority,validateDueDate } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                      if(!validateTitle() && !validatePriority() && !validateDueDate()){
                        //push taskObj to tasks
                        return 'Invalid task'
                    }
                    tasks.push({title,priority,dueDate})
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                        return tasks;
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(index) {
                      // Find task and mark as complete
                         if (index >= 0 && index < tasks.length) {
                            tasks[index].completed = true;
                        }
                    }

                  // Export functions
export {addTask,getAllTasks,completeTask}
































/*
import {
  validateTitle,
  validatePriority,
  validateDueDate
} from './validator.js';

const tasks = [];

function addTask(title, priority, dueDate) {
  const titleErr = validateTitle(title);
  const prioErr  = validatePriority(priority);
  const dateErr  = validateDueDate(dueDate);

  if (titleErr || prioErr || dateErr) {
    return { success: false, errors: { titleErr, prioErr, dateErr } };
  }

  tasks.push({
    title,
    priority,
    dueDate,
    completed: false             // keep the flag so we can mark it later
  });
  return { success: true };
}

function getAllTasks() {
  return tasks;
}

// index is the zero‑based position of the task in the array
function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
  }
}

export { addTask, getAllTasks, completeTask };*/