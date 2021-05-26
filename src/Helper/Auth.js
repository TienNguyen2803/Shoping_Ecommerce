// export const IsLogin = () => {
//   return !!localStorage.getItem("user") && isTokenValid();
// };

// function IsTokenValid() {
//   let user = getUser();
//   const expire_date = new Date(user.tokenExpireDate).getTime();
//   const datetime = new Date().getTime();
//   return expire_date > datetime;
// }

export const isUserLogin = () => {
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  //check user password is expire
  //convert expire user to datetime
  // const expire_PW = new Date(user.expireDate).getTime();
  // const datetime = new Date().getTime();
  // if (expire_PW < datetime) {
  //   localStorage.removeItem("user");
  // }
  return user;
};
