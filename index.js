require("dotenv").config()
const express = require("express")
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

//Wildcard
app.get("*", (req, res) => {
  res.status(404).json({error: "this route does not exist"})
})



const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("Server Running");
})