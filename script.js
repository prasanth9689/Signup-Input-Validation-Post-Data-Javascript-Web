// Create a new Date object
const currentDate = new Date();

// Get the year, month, and day
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();

// Print the current date in YYYY-MM-DD format
console.log(`${day}-${month}-${year}`);
