const express= require('express');
const FRController = require("../controllers/fundRaiserController");
const router= express.Router();
router.get('/',FRController.GetAll)
router.get("/:id", FRController.GetOne);
router.post("/", FRController.Post);
router.post("/postMany", FRController.PostMany);
router.delete("/:id", FRController.DeleteOne);
module.exports=router;