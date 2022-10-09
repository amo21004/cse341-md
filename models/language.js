module.exports = (dependencies) => {
    const language = new dependencies.mongoose.Schema({
        name: String
    });

    dependencies.mongoose.model('Language', language);
};