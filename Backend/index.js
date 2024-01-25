const express = require("express");
const mongoose = require("mongoose");
const transactionRouter = require("./routes/transaction.js"); 
const savingRouter = require("./routes/saving .js");
const depositRouter = require("./routes/deposit.js");
const contactsRouter = require("./routes/contacts.js");
const accountRouter = require("./routes/account.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  return res.json({ status: 200, mesage: "Server Is Up and Running" });
});

// Path to transactions route
app.use("/api/transaction", transactionRouter);
app.use("/api/saving", savingRouter);
app.use("/api/deposit", depositRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/account", accountRouter);


mongoose
  .connect(
    "mongodb+srv://muskansudiksha2000:muskansudiksha2000@cluster-web.fc5rgbj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Successfully connected to MongoDB Atlas"))
  .catch((error) => console.error("Unable to connect to MongoDB Atlas", error));

const port = process.env.PORT || 3600;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
