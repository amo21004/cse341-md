module.exports = (dependencies) => {
    const actor = new dependencies.mongoose.Schema({
        first_name: String,
        last_name: String,
        gender: String,
        date_of_birth: Date
    });

    dependencies.mongoose.model('Actor', actor);
};