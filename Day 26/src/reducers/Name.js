const name = "";
const email = "";

export const nameReducers = (state = name, action) => {
  if (action.type === "UPDATENAME") {
    state = action.payload;
    return state;
  }
  return state;
};
export const emailReducers = (state = email, action) => {
  if (action.type === "UPDATEEMAIL") {
    state = action.payload;
    return state;
  }
  return state;
};
