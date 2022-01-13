const getUserString = (userData) => {
  console.log(userData);

  if (userData.fname === "" || userData.lname === "") {
    return userData.username;
  } else {
    return userData.fname + " " + userData.lname;
  }
};

export default getUserString;
