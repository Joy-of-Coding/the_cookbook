const fetchMessageOfTheDay = async (setMessage) =>
  fetch("/api/herald/motd/")
    .then((response) => {
      if (response.status > 400) {
        return setMessage(() => {
          return { placeholder: "Something went wrong!" };
        });
      }
      return response.json();
    })
    .then((data) => {
      setMessage(data);
    });

export { fetchMessageOfTheDay };
