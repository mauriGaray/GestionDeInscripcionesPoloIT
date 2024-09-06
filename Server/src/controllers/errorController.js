module.exports = {
  error500: (err, req, res, next) => {
    res.status(500).send("500 INTERNAL SERVER ERROR");
  },
  error404: (req, res, next) => {
    res.status(404).send("404 NOT FOUND");
  },
};
