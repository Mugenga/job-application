// controller.js
const mongoose = require("mongoose");
const applicant = mongoose.model("Applicants");

exports.listRecentApplicants = (req, res) => {
  applicant.find({}, (err, applicant) => {
    if (err) res.send(err);
    res.json({detail: "success", data: applicant});
  }).limit(10).sort({name:1});
};

exports.createApplicant = (req, res) => {
  const new_applicant = new applicant(req.body);
  new_applicant.save((err, applicant) => {
    if (err) res.send(err);
    res.json(applicant);
  });
};

exports.readApplication = (req, res) => {
  applicant.findById(req.params.id, (err, applicant) => {
    if (err)
      res.send(err);
    res.json({detail: "success", data: applicant});

  });
};

exports.updateApplication = (req, res) => {
  applicant.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, applicant) => {
    if (err)
      res.send(err);
    res.json(applicant);
  });
};
