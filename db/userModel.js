const {mongoose}=require('mongoose');
const {Schema}= mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    role: {
      type: String,
    },
    Helpseekers: [],
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;