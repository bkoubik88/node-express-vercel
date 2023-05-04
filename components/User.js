import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });

    const myPromise = new Promise((resolve, reject) => {
      resolve(user.save());
    });

    myPromise.then((res) => {
      console.log(res);
      res.status(200).json(res.data);
    });
  } catch (error) {
    return res.status(404).send("error");
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
