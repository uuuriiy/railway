export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
