//step 1: import mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

//step 2: create a Schema that matches the data
const UserSchema = new Schema
    ({
        DisplayName: String,
        username: String,
        EmailAddress: String,
        Created: 
        {
            type: Date,
            default: Date.now()
        },
        Updated:
        {
            type: Date,
            default: Date.now()
        }
    },
    {
        collection: "users"
    }
);

//step 3: create a model using the Schema
const Model = mongoose.model("Users", UserSchema);

//step 4: export the model  => this makes the file a module
export default Model;