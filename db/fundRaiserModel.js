const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const fundRaiserSchema = new Schema(
  {
    name: { type: String, require: true },
    fundForWhom: {
      type: String,
      require: true,
    },
   fundFor : {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    cause: {
      type: String,
      require: true,
    },
    AmountRequired: {
      type: Number,
      require: true,
    },
    AmountFetched:{
      type:Number,
    }
  },
  { timestamps: true }
);

const fundRaiserModel = mongoose.model("fundRaiser",fundRaiserSchema);
module.exports= fundRaiserModel;

