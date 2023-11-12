const Repository = require('../db/repository');
const FRController = {
  GetOne: (req, res) => {
    const id = req.params.id;
    // console.log(req.params)
    Repository.FindOne(id)
      .then((result) => {
        res.json({
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: err,
        });
      });
  },
  GetAll: (req, res) => {
    Repository.FindAllFundRaisers()
      .then((result) => {
        res.json({
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: err,
        });
      });
  },
  Post: (req, res) => {
    console.log(req.body);
    Repository.CreateFundRaiser(req.body)
      .then((result) => {
        res.json({
          message: "User added successfully",
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  PostMany: (req, res) => {
    console.log(req.body);
    Repository.CreateFundRaiser(req.body)
      .then((result) => {
        res.json({
          message: "User added successfully",
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  DeleteOne: (req, res) => {
    const id = req.params.id;
    // console.log(req.params)
    Repository.DeleteOne(id)
      .then((result) => {
        res.json({
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: err,
        });
      });
  },
};
module.exports=FRController;