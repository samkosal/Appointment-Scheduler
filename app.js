// Import the express module
import express from "express";

//create an Array to store orders
const orders = [];

// Create an instance of an Express application
const app = express();

// Enable static files serving
app.use(express.static("public"));

// Define the port number where our server will listen
const PORT = 3003;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get("/", (req, res) => {
  // Send "Helow, World!" as a resonce to the client
  // res.send('<h1> Welcome to Poppa\'s Pizza!</h1>');
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-order', (req, res) => {

    //create a JSON object to store the data
    const order = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time
    };
    orders.push(order);
    console.log(orders);

    // send user to confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
})

// start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
  console.log(`Sever is running at http://localhost:${PORT}`);
});
