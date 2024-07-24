import User from "../model/User.js";

export const CreateUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
    });
    console.log('user', user);
    try {
        const savedUser = await user.save();
        return res.json({
            response: {
                status: 200,
                message: "User created successfully",
            },
            data: {
                user: savedUser
            }
        });
    } catch (error) {
        res.send(error);
    }
}

export const  GetUser = async (req, res) => {
    try {
        const user = await User.find();
        return res.json({
            response: {
                status: 200,
                message: "Get user successfully",
            },
            data: {
                user
            }
        });
    } catch (error) {
        res.send(error);
    }
}

export const UpdateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.name = req.body.name;
        user.email = req.body.email;
        const updatedUser = await user.save();
        return res.json({
            response: {
                status: 200,
                message: "Update user successfully",
            },
            data: {
                user: updatedUser
            }
        });
    } catch (error) {
        res.send(error);
    }
}   

export const DeleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.json({
            response: {
                status: 200,
                message: "Delete user successfully",
            },
            data: {
                user
            }
        });
    } catch (error) {
        res.send(error);
    }
}