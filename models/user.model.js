var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	key: String,
	username: String,
	email: String,
	avatar: String,
	avatar2: String,
	avatar3: String,
	avatar4: String,
	avatar5: String,
	avatar6: String,
	avatar7: String,
	hash: String
}, {
	timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User
