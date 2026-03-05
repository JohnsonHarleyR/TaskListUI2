import { apiAddress } from "./constants";

export async function getAllTasks(setTasks) {
  try {
    const response = await fetch(apiAddress);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tasks = await response.json();
    console.log("Fetched tasks:", tasks);
    setTasks(tasks);
    return tasks;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to allow further handling by the caller
  }
}

export async function modifyTask(task) {
  try {
    const response = await fetch(`${apiAddress}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const updatedTask = await response.json();
    console.log("Updated task:", updatedTask);
    return updatedTask;
  } catch (error) {
    console.error("Error modifying task:", error);
    throw error;
  }
}

export async function addTask(task) {
  try {
    const response = await fetch(`${apiAddress}`, {  
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }         
    const createdTask = await response.json();
    console.log("Created task:", createdTask);
    return createdTask;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }   
}

export async function deleteTask(taskId) {
  try {
    const response = await fetch(`${apiAddress}/${taskId}`, {
      method: "DELETE"
    });
    if (!response.ok) { 
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(`Deleted task with id: ${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}