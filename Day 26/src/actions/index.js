export const updateName = (name) => {
  return {
    type: "UPDATENAME",
    payload: name
  };
};

export const updateEmail = (email) => {
  return {
    type: "UPDATEEMAIL",
    payload: email
  };
};
