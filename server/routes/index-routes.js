const userController = require("../controllers/usercontroller");
const companyController = require("../controllers/companycontroller");

module.exports = app => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Abacus API v1",
    });
  });

  //User
  app.get("/api/users", userController.getAllUsers);
  app.get("/api/users/:userId", userController.getUserById);
  app.get("/api/users/company/:companyId", userController.getAllUsersByCompanyId);
  app.post("/api/user/create", userController.create);
  //TODO: More research on updating users
  app.put("/api/user/:userId", userController.update);
  app.delete("/api/users/:userId", userController.delete);

  
  //Company
  app.get("/api/companies", companyController.getAllCompanies);
  app.get("/api/company/:companyId", companyController.getCompanyById);
  app.post("/api/company/create", companyController.create);
  app.put("/api/company/:companyId", companyController.update);
  app.delete("/api/company/:companyId", companyController.delete);
  //TODO:
  // app.get("/api/:userId/companies", companyController.getAllPostsOfUser)
}