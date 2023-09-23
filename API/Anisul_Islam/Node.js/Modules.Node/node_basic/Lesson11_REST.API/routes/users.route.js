//const { router } = require("../app");
const { getAllUser, createUser, updateUser, deleteUser } = require("../controllers/users.controller");

//import modules
const router = require("express").Router();
//const router = express.Router();


router.get("/", getAllUser );
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser)




//export router
module.exports = router;