var jwt = require("jsonwebtoken");

const jsonwebtokenAuth = (req, res, next) => {
  //   const auth = req.headers.authorization;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXJpZkBtYWlsLmNvbSIsImlhdCI6MTY5ODk5NDcxOX0.m5T-2k10UIIWBYxLfx5X1ukgfC_gc2Pm1cAApT6ReWI";
  if (token) {
    // const TOKEN = auth.split(" ")[1];
    const TOKEN = token;
    jwt.verify(TOKEN, process.env.ACCESS_TOKEN, TOKEN, function (err, decoded) {
      if (err) {
        return res.status(401).send({ status: 401, msg: "Unathorized Access" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({ status: 401, msg: "Unathorized Access" });
  }
};

module.exports = jsonwebtokenAuth;
