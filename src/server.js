const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const BusinessSearchService = require("./services/BusinessSearchService");
const dataObject = require("./helper/dataObject");
const router = require("./routes/index");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const businessSearchService = new BusinessSearchService();
const formatedData = businessSearchService.formatBusinessesToOutput(dataObject);

formatedData.then((response) => console.log(response));

app.listen(3001, () => console.log("Up and running."));
