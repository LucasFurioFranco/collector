const router = require("express").Router()

router.get("/", (req, res) => {
  var data = {
    params: req.params,
    body: req.body,
    method: req.method,
    url: req.url,
    baseURL: req.baseUrl,
    query: req.query
  };

  console.log(data);
  res.status(200).json(data);
})


router.post("/", (req, res) => {
  res.status(200).json({});
})

module.exports = router