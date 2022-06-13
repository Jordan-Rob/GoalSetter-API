const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc Create goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }

    const newGoal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(newGoal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
    const goal2Update = await Goal.findById(req.params.id)

    if(!goal2Update){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    const goal2Delete = await Goal.findById(req.params.id)

    if(!goal2Delete){
        res.status(400)
        throw Error('Goal does not exist')
    }

    //const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    goal2Delete.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}