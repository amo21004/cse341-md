module.exports = (dependencies) => {
    const movie = new dependencies.mongoose.Schema({
        title: String,
        release_year: Number,
        runtime: Number,
        rating: Number,
        summary: String,
        image_url: String,
        actors: [dependencies.mongoose.Schema.ObjectId],
        genres: [dependencies.mongoose.Schema.ObjectId],
        reviews: [dependencies.mongoose.Schema.ObjectId],
        languages: [dependencies.mongoose.Schema.ObjectId],
    });

    dependencies.mongoose.model('Movie', movie);
};