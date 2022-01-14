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
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
};

const fetchUserData = (setUserData) => {
  isAuthenticated().then((data) => {
    if (!data.username) {
      console.error("Error Occured: ", data.detail);
      setUserData(emptyUserObject);
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
    credentials: "omit",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // set auth token
      // set refresh token
      // set user data
    })
    .catch((err) => console.error(err));
};

const logOut = async (setUserData) => {
  return await fetch(`/auth/logout/`, {
    method: "POST",
    credentials: "include",
  })
    .then((response) => response.json())
    .then(() => {
      setUserData(emptyUserObject);
    })
    .catch((err) => console.error(err));
};

export { emptyUserObject, fetchUserData, isAuthenticated, logIn, logOut };
