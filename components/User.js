import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });

    const savedUser = await user.save();

    const time = setTimeout(() => {
      res.status(200).json(savedUser);
    }, 3500);

    clearTimeout(time);
  } catch (error) {
    res.status(200).json("ERROR");
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
