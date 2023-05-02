import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    if (req.body) {
      console.log(req.body.user);
      const user = new User({ ...req.body.user });

      const savedUser = await user.save();

      res.status(200).json(savedUser);
    }
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
