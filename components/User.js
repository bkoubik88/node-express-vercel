import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });
    console.log("SAVED USER IN MONGODB: " + user);
    const savedUser = await user.save();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
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
