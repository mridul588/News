const dotenv = require('dotenv');
const axios = require('axios');
const NodeCache = require('node-cache');

dotenv.config();

const cache = new NodeCache({ stdTTL: 300 });

const Fetchnews = async (req, res) => {
    try {
      const cachedData = cache.get('headlines');
      if (cachedData) {
        return res.json(cachedData);
      }
  
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: process.env.NEWS_API_KEY 
        }
      });
  
      const headlines = response.data.articles; // Limit to 5 headlines
      cache.set('headlines', headlines);
  
      res.json(headlines);
    } catch (error) {
      console.error('Error fetching headlines:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { Fetchnews };
