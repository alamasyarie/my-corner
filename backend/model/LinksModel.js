const mongoose = require('mongoose')

const Links = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('Links', Links)