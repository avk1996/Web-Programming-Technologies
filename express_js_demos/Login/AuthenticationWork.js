array = [
  { nm: "user1", password: "pass1" },
  { nm: "user2", password: "pass2" },
];
exports.validateUser = (userName, pass) => {
  let auth = array.find((ob) => userName == ob.nm && pass == ob.password);
  return auth == undefined ? null : auth;
};
