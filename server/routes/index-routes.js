const userController = require("../controllers/usercontroller");
const companyController = require("../controllers/companycontroller");

module.exports = app => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Abacus API v1",
    });
  });

  //User
  // app.get("/api/users", userController.getAllUsers)
  // app.post("/api/user/create", userController.create)
  // app.put("/api/user/:userId", userController.update)
  
  //Company
  app.post("/api/company/create", companyController.create);
  app.get("/api/companies", companyController.getAllCompanies);
  app.put("/api/company/:companyId", companyController.update);
  app.delete("/api/company/:companyId", companyController.delete);
  //TODO:
  // app.get("/api/:userId/companies", companyController.getAllPostsOfUser)
}