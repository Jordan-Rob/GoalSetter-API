// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Create goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}