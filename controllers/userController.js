// @desc register user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.status(200).json({message: 'user registered'})
}

// @desc register user
// @route POST /api/users
// @access Public
const loginUser = (req, res) => {
    res.status(200).json({message: 'user loggedin'})
}

// @desc register user
// @route POST /api/users
// @access Public
const getMe = (req, res) => {
    res.status(200).json({message: 'user returned'})
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}
