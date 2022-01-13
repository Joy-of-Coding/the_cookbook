const emptyUserObject = {
  username: "",
  email: "",
  fname: "",
  lname: "",
  loggedIn: false,
};

const isAuthenticated = async () => {
  return await fetch(`/auth/user`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const fetchUserData = (setUserData) => {
  isAuthenticated().then((data) => {
    if (data.error) {
      console.error("Error", data.error);
    } else {
      setUserData({
        username: data.username,
        email: data.email,
        fname: data.first_name,
        lname: data.last_name,
        loggedIn: true,
      });
    }
  });
};

const logIn = async (userCredentials, setUserData) => {
  return await fetch(`/auth/login/`, {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setUserData({
        username: data.username,
        email: data.email,
        fname: data.first_name,
        lname: data.last_name,
        loggedIn: true,
      });
    })
    .catch((err) => console.error(err));
};

const logOut = async (setUserData) => {
  return await fetch(`/auth/logout/`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then(() => {
      setUserData(emptyUserObject);
    })
    .catch((err) => console.error(err));
};

export { emptyUserObject, fetchUserData, isAuthenticated, logIn, logOut };
