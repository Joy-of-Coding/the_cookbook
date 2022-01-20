import stringToColor from "./stringToColor";

function stringAvatar(userString) {
  return {
    sx: {
      bgcolor: stringToColor(userString),
    },
    children:
      userString.indexOf(" ") > -1
        ? `${userString.split(" ")[0][0]}${userString.split(" ")[1][0]}`
        : `${userString[0]}${userString[1]}`,
  };
}

export default stringAvatar;
