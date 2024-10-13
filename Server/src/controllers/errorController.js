module.exports = {
  error500: (err, req, res, next) => {
    res.status(500).json("500 INTERNAL SERVER ERROR");
  },
  error404: (req, res, next) => {
    res.status(404).json("404 NOT FOUND");
  },
};
