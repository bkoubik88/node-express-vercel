import User from "../model/User.js";

//CREATE NEW USER
export const newUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.user });

    const savedUser = await user.save();

    if (savedUser) {
      res.status(200).send(savedUser);
    }
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
