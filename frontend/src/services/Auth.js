const isAuthenticated = async () => {
  return await fetch(`/auth/user`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export { isAuthenticated };
