const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://muskansudiksha2000:muskansudiksha2000@cluster-web.fc5rgbj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Successfully connected to MongoDB Atlas"))
  .catch((error) => console.error("Unable to connect to MongoDB Atlas", error));

const transactionRouter = require("./routes/transaction"); // Path to transactions route
app.use("/api/transaction", transactionRouter);

const savingRouter = require("./routes/saving .js");
app.use("/api/saving", savingRouter);

const depositRouter = require("./routes/deposit");
app.use("/api/deposit", depositRouter);

const contactsRouter = require("./routes/contacts");
app.use("/api/contacts", contactsRouter);

const accountRouter = require("./routes/account");
app.use("/api/account", accountRouter);

const PORT = 3500;
app.listen(3500, () => {
  console.log(`listening to port ${PORT}`);
});
