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