import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  res.status(200).json({
    success: true,
    statusCode: 201,
    message: ' User logged in successfully',
    data: result,
  });
});

// const changePassword = catchAsync(async (req, res) => {
//   const { ...passwordData } = req.body;
//   const result = await AuthServices.changePassword(req.user, passwordData);
//   res.status(200).json({
//     success: true,
//     statusCode: 201,
//     message: ' Password is changed successfully',
//     data: result,
//   });
// });
export const AuthControllers = {
  loginUser,
  //   changePassword,
};
