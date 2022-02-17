const fetchAllRecipes = async (setRecipes) =>
  fetch("/backend/api/recipes")
    .then((response) => {
      if (response.status > 400) {
        return setRecipes(() => {
          return { placeholder: "Something went wrong!" };
        });
      }
      return response.json();
    })
    .then((data) => {
      setRecipes(data);
    });

export { fetchAllRecipes };
