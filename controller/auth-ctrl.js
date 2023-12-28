const User = require("../modal/user-modal");

const authCtrl = {
  registerUser: async (req, res) => {
    if (
      req.body.firstName &&
      req.body.lastName &&
      req.body.mobileNo &&
      req.body.email &&
      req.body.password
    ) {
      const email = req.body.email; // Define the email variable
      const mobileNo = req.body.mobileNo;
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: req.body.password,
      });

      const existingUser = await User.findOne({ email });
      const existingMobileNo = await User.findOne({ mobileNo });
      if (existingUser || existingMobileNo) {
        return res.status(400).json({
          statusCode: 1,
          responseData: {
            status: false,
            message: `User with this ${
              existingMobileNo ? "Mobile Number" : "Email"
            } is already registered`,
          },
        });
      } else {
        try {
          const savedUser = await user.save();

          res.status(200).json({
            statusCode: 1,
            responseData: {
              status: true,
              message: "User is registered",
              user: savedUser,
            },
          });
        } catch (err) {
          res.status(400).json({
            statusCode: 1,
            responseData: {
              status: false,
              message: err.message,
            },
          });
        }
      }
    } else {
      res.status(502).json({
        statusCode: 1,
        responseData: {
          status: false,
          message: "Please Fill Required Fields",
        },
      });
    }
  },
  loginUser: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        statusCode: 400,
        responseData: {
          status: false,
          message: "Email and password are required",
        },
      });
    }

    try {
      const user = await User.findOne({ email });

      if (user) {
        // User with the provided email exists
        if (user.password === password) {
          // Password is correct
          return res.status(200).json({
            statusCode: 200,
            responseData: {
              status: true,
              message: "User is logged in",
              user: user,
            },
          });
        } else {
          // Password is incorrect
          return res.status(400).json({
            statusCode: 400,
            responseData: {
              status: false,
              message: "Password is incorrect",
            },
          });
        }
      } else {
        // User with the provided email does not exist
        return res.status(404).json({
          statusCode: 404,
          responseData: {
            status: false,
            message: "Email does not exist",
          },
        });
      }
    } catch (error) {
      console.error("Error while querying the database:", error);
      // Handle the error appropriately (e.g., send an error response)
      return res.status(500).json({
        statusCode: 500,
        responseData: {
          status: false,
          message: "Internal Server Error",
        },
      });
    }
  },
};
module.exports = authCtrl;
