const fetchMessageOfTheDay = async (setMessage) =>
  fetch("/herald/motd")
    .then((response) => {
      if (response.status > 400) {
        return setMessage(() => {
          return { placeholder: "Something went wrong!" };
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setMessage(data);
    });

export { fetchMessageOfTheDay };
