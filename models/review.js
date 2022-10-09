module.exports = (dependencies) => {
    const review = new dependencies.mongoose.Schema({
        summary: String,
        content: String,
        user: dependencies.mongoose.Schema.ObjectId
    });

    dependencies.mongoose.model('Review', review);
};