module.exports = (schema) => {
    return new schema.Schema({
        title: String,
        actors: [schema.Schema.ObjectId],
        genres: [schema.Schema.ObjectId],
        release_date: Date
    });
};