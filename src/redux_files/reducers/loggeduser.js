const loggeduser = (state = {}, action) => {
  switch (action.type) {
    case "UserLogged":
      return action.payload;
    default:
      return state;
  }
};
export default loggeduser;
