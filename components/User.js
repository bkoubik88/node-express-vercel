import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res) => {
  try {
    const user = new User({ ...req.body.user });

    const myPromise = new Promise((resolve, reject) => {
      resolve(user.save());
    });

    myPromise.then((res) => {
      res.status(200).send("User was saved");
    });
  } catch (error) {
    res.status(200).send("error");
  }
};

//GET SINGLE USER
export const getUser = async (req, res, next) => {
  try {
    res.status(200).json("HELLO");
  } catch (error) {
    console.log(error);
  }
};
