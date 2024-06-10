//step 1: import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//step 2: create a Schema that matches the data
const MovieSchema = new Schema
    ({
        Name: String,
        Year: String,
        Director: String,
        Rating: String
    },
    {
        collection: "movies"
    }
);

//step 3: create a model using the Schema
const Model = mongoose.model("Movies", MovieSchema);

//step 4: export the model
export default Model;