const fetchAllMessagesOfTheDay = async (setMessages) =>
  fetch("/herald/motd")
    .then((response) => {
      if (response.status > 400) {
        return setMessages(() => {
          return { placeholder: "Something went wrong!" };
        });
      }
      return response.json();
    })
    .then((data) => {
      setMessages(data);
    });

export { fetchAllMessagesOfTheDay };
