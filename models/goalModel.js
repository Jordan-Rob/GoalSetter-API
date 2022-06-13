const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a Text value']
    }
}, {
    timestamps: true, //automatically adds created at and updated at
})


module.exports = mongoose.model('Goal', goalSchema)
