const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://samriddhitiwari2021:somikhushiyash@cluster0.6izo9av.mongodb.net/bikeshowroom?retryWrites=true&w=majority'
const mongoDB = async () => {

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
            const fetched_data = mongoose.connection.db.collection("user");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else console.log(data)
            })
        });
}

module.exports = mongoDB;