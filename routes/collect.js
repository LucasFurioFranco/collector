const router = require("express").Router()

function requestLogger(req, res) {
  console.group("Request received");

  var data = {
    params: req.params,
    body: req.body,
    method: req.method,
    url: req.url,
    baseURL: req.baseUrl,
    query: req.query
  };

  console.log(data);
  console.groupEnd();

  res.status(200).json(data);
}

router.get("/", requestLogger)

router.post("/", requestLogger)

module.exports = router