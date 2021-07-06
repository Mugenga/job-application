// server/index.js
const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
// Require mongoose for connection to mongodb
const mongoose = require('mongoose');
const applicant = require('./api/models/model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server the build files in our client
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.disable('etag');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// Connection to MONGO DB DATABASE                                                                                                                                     
const connectionUrl = "mongodb+srv://user:microsoft19@cluster0.ylyj3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  }); 

//import routes
const routes = require('./api/routes/routes.js'); 

//register the route
routes(app);

// Any other other connection redirects to main page
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, ()=> {
  console.log(`RESTful API server running on ${port}`);
});