export const signin_user = ({ email, pwd }) => {
  return {
    type: "UserLogged",
    payload: { email, pwd },
  };
};
export const signin = () => {
  return {
    type: "Sign_IN",
  };
};
