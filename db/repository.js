const fundRaiser = require('./fundRaiserModel');

let Repository = {
  FindOne: (id) => {
    return fundRaiser.findOne({ _id: id });
  },
  FindAllFundRaisers: () => {
    return fundRaiser.find();
  },
  CreateFundRaiser: (body) => {
    const user = new fundRaiser(body);
    return user.save();
  },
  CreateMany: (body) => {
    return fundRaiser.insertMany(body);
  },
  UpdateOne: (id, body) => {
    return fundRaiser.updateOne({ _id: id }, { $set: body });
  },
  DeleteOne: (id) => {
    return fundRaiser.deleteOne({ _id: id });
  },
};
module.exports=Repository;