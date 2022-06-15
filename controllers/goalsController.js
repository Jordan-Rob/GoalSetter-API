// use async handler if you do not want to write try-catch code/ or promise chains 
const asyncHandler = require('express-async-handler') 
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
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
        text: req.body.text,
        user: req.user.id
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

    const user = await User.findById(req.user.id)
    //check user
    if(!user){
        res.status(401)
        throw new Error('User not found!')
    }

    //make sure logged in user matches goal user 
    if(goal2Update.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
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

    const user = await User.findById(req.user.id)
    //check user
    if(!user){
        res.status(401)
        throw new Error('User not found!')
    }

    //make sure logged in user matches goal user 
    if(goal2Delete.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
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