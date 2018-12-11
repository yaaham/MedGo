var mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/MedGo',
    { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: String,
    message: String,
    time: String
});

const Form = mongoose.model('Forms', FormSchema);

exports.CreateForm = Data => {
    const form = new Form(Data);
    return form.save();
};

exports.SendFomrs = () => {
    return Form.find({});
};
