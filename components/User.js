import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });

    const myPromise = new Promise((resolve, reject) => {
      resolve(user.save());
    });

    myPromise.then((result) => {
      res.status(200).json("User saved");
    });
  } catch (error) {
    next(err);
  }
};
