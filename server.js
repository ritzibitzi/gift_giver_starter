const express = require("express");
const morgan = require("morgan");

//Create an instance of express. App will do anything an 
//express instance can do.
const app = express();

//You can use other modules, other tech
//Ex: app.use(cors());

//Morgan takes instance of Morgan, slaps on top of server. Morgan takes in parameters to log.
//Ex Syntax!!: app.use(morgan());

app.use(morgan('tiny'));

//Alternative: express.Router().get()
//IF anything gets sent to request w/ no additional path, execute...
app.get("/", (req, res, next) => {
  //Response when request made. Modify json property (how we send info).
  //Return simple object as response.
  res.status(200).json( {ping: "pong"});
})
//Ports are addresses a comp refers to for input/output.
const port = 3000;
//Use app created on previous line, and listen to port.
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});

const giftRouter = require("./routes/gift-exchange");

app.use("/gift-exchange", giftRouter);