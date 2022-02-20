import * as all from "./../types";

const main = (
  state = {
    userInfo: {
      name: "guest",
    },
  },
  action
) => {
  switch (action.type) {
    case all.SET_USER:
      return {
        ...state,
        userInfo: {
          name: action.payload,
        },
      };

    default:
      return { ...state };
  }
};
