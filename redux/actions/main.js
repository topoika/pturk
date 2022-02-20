import * as all from "../types";
export const setInfo = (userInfo) => {
  type: all.SET_USER;
  payload: userInfo;
};
