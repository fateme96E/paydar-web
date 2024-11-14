import { isExpired } from "react-jwt";

export const GetToken = () => {
  let localToken = typeof window !== 'undefined'? localStorage.getItem("TokenMK") : '';
  if (localToken && !isExpired(localToken)) {
    return localToken;
  } else {
    // Logout()
    typeof window !== 'undefined' && localStorage.removeItem("TokenMK");
    return '';
  }
};

export const SetToken = (token) => {
  typeof window !== 'undefined' && localStorage.setItem('TokenMK', token)
};

export const RemoveToken = () => {
    typeof window !== 'undefined' && localStorage.removeItem("TokenMK");
};

