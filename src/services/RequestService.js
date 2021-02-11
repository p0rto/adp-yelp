const axios = require('axios');

class RequestService {
  constructor() {
    this.apiKey = process.env.YELP_API_KEY;
    this.apiUrlBase = 'https://api.yelp.com/v3';
  }

  async makeRequest(uri, data = {}) {
    const config = {
      Authorization: `Bearer ${this.apiKey}`,
    };
    const endpoint = this.apiUrlBase + uri;
    
    try {
      const response = await axios.get(endpoint, { params: data, headers: config});

      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
}

module.exports = new RequestService();