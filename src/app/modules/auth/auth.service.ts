import jwt from 'jsonwebtoken';
import config from '../../config';
import { AppError } from '../../errors/appError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByUserEmail(payload?.email);

  if (!user) {
    throw new AppError(404, 'User not found');
  }
  if (!(await User.isPasswordMatched(payload?.password, user.password)))
    throw new AppError(404, 'Password did not matched.');

  const jwtPayload = {
    userName: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_expires_in,
  });
  return {
    accessToken,
  };
};

// const changePassword = async (
//   userData: JwtPayload,
//   payload: { currentPassword: string; newPassword: string },
// ) => {
//   const user = await User.isUserExistsByUserEmail(userData.email);
//   if (!user) {
//     throw new AppError(404, 'This user is not found');
//   }
//   //   checking if the password is correct
//   if (!(await User.isPasswordMatched(payload.currentPassword, user?.password)))
//     // letting the user login using access token and refresh token.
//     throw new AppError(404, 'Password did not matched.');

//   // hash new password
//   const newHashedPassword = await bcrypt.hash(
//     payload.newPassword,
//     Number(config.bcrypt_salt_round),
//   );

//   await User.findOneAndUpdate(
//     {
//       email: userData.email,
//       role: userData.role,
//     },
//     {
//       password: newHashedPassword,
//       passwordChangedAt: new Date(),
//     },
//   );
//   return null;
// };

export const AuthServices = {
  loginUser,
  // changePassword,
};
