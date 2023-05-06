import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const dataUser = JSON.parse(req.body.user);

    const user = new User({
      ...dataUser,
      browser: req.body.browser,
      explorer: req.body.explorer,
    });

    const savedUser = await user.save();

    const myPromise = new Promise((resolve, reject) => {
      resolve(savedUser);
    });

    myPromise.then(() => {
      res.status(200).json("User saved");
    });
  } catch (error) {
    next(err);
  }
};
