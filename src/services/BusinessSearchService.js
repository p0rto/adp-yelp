const RequestService = require("./RequestService");

class BusinessSearchService {
  constructor() {
    this.requestService = new RequestService();
    this.baseUri = "/businesses";
  }

  async getBusinesses(data) {
    let uri = this.baseUri + "/search";
    let businesses = await this.requestService.makeRequest(uri, data);

    return businesses;
  }

  async getBusinessesReviewById(id) {
    let uri = this.baseUri + "/" + id + "/reviews";
    let reviews = await this.requestService.makeRequest(uri);

    return reviews.reviews[0];
  }

  async formatBusinessesToOutput(data) {
    let businesses = await this.getBusinesses(data);

    let businessData = businesses.businesses.map(async (business) => {
      let review = await this.getBusinessesReviewById(business.id);

      return {
        business: {
          name: business.name,
          address: business.location.address1 + ", " + business.location.city,
        },
        review: {
          text: review.text,
          user: review.user.name,
        },
      };
    });

    await Promise.all(businessData).then((results) => {
      businessData = results;
    });

    return businessData;
  }
}

module.exports = BusinessSearchService;
