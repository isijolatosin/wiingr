function getTime(timestamp) {
  // Convert Firestore timestamp to JavaScript Date object
  const dateObject = timestamp?.toDate();

  // Get hour and minute
  const hours = dateObject?.getHours();
  const minutes = dateObject?.getMinutes();

  // Format the result in 24-hour format
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  return formattedTime;
}

function getDate(timestamp) {
  // Convert Firebase Firestore timestamp to JavaScript Date object
  const dateObject = timestamp?.toDate();

  // Extract date components
  const year = dateObject?.getFullYear();
  const month = dateObject?.getMonth() + 1; // Months are zero-based, so add 1
  const day = dateObject?.getDate();

  // Format the result
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  return formattedDate;
}

const getCurrentHour = () => {
  const date = new Date();
  return date.getHours();
};

export { getTime, getDate, getCurrentHour };
