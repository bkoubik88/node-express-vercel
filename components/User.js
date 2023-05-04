import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });

    const myPromise = new Promise((resolve, reject) => {
      resolve(user.save());
    });

    myPromise.then((res) => {
      res.status(200).json("User saved");
    });
  } catch (error) {
    res.status(200).send("error");
  }
};
