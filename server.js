// server.js
const express = require('express');
const dotenv = require('dotenv');
const NodeCache = require('node-cache');
const cors = require('cors');
const newsRoutes = require('./Routes/newsRoutes')
const path = require('path');
dotenv.config();

const DIRNAME = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;
const cache = new NodeCache({ stdTTL: 300 });

app.use(cors());
app.use(express.json());

// Route to fetch news headlines from News API
app.use("/api",newsRoutes);
 
//---------------DEPLOYMENT-------------------------

if (process.env.NODE_ENV === "production") {
  // Establishes the path to our frontend (most important)
  app.use(express.static(path.join(DIRNAME, "/Client/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(DIRNAME, "/Client/dist/index.html"))
  );
}

//----------------------DEPLOYMENT-------------------------

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
