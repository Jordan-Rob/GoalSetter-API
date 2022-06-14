const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a Text value']
    }
}, {
    timestamps: true, //automatically adds created at and updated at
})


module.exports = mongoose.model('Goal', goalSchema)
