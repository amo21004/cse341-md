module.exports = (dependencies) => {
    const user = new dependencies.mongoose.Schema({
        first_name: String,
        last_name: String,
        email_address: String,
        role: String
    });

    dependencies.mongoose.model('User', user);
};