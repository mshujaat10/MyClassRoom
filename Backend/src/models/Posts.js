const mongoose = require('mongoose');

const TeacherAnnounce = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes"
    },
    announce: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

const Posts = mongoose.model('posts', TeacherAnnounce);
module.exports = Posts;