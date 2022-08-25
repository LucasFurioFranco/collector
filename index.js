require("dotenv").config()
const express = require("express")
const axios = require("axios")
const app = express()



//------------------------------------
//-----------Middlewares--------------
//------------------------------------

app.use(
  express.urlencoded({
    extended: true
  })
)

//For JSON payloads (for requests and responses)
app.use(express.json())


//------------------------------------
//--------------Routing---------------
//------------------------------------

app.use("/collect", require("./routes/collect"))

//KeepAlive
app.get("/keepalive", (req, res) => {
  res.status(200).json({status: "this route does not exist"})
})

//Wildcard
app.get("*", (req, res) => {
  res.status(404).json({error: "this route does not exist"})
})



const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  setInterval(() => {
    axios.get("https://wc-collector.herokuapp.com/keepalive?t=keep-alive")

  }, 29*60*1000)

  console.log("Server Running");
})