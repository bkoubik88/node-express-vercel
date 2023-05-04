import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });

    const myPromise = new Promise((resolve, reject) => {
      resolve(user.save());
    });

    myPromise.then((res) => {
      return res.status(200).send("User was saved");
    });
  } catch (error) {
    return res.send("error");
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
