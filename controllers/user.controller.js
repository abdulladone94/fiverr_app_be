import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  // const token = req.cookies.accessToken;
  // if (!token) return res.status(401).send('You are not authenticated!');

  // jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
  if (req.userId !== user._id.toString()) {
    return next(createError(403, 'You can delete only your account'));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send('Deleted');
  // });
};
