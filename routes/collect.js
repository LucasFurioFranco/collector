const router = require("express").Router()

function requestLogger(req, res) {
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
}


router.get("/", (req, res) => requestLogger)

router.post("/", (req, res) => requestLogger)

module.exports = router