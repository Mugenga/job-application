// routes.js
module.exports = (app) => {
  const myApp = require("../controllers/controller.js");

  app
    .route("/api/applications")
    .get(myApp.listRecentApplicants)
    .post(myApp.createApplicant);

  app.route("/api/view/:id").get(myApp.readApplication);
  app.route("/api/update/:id").post(myApp.updateApplication);
};
