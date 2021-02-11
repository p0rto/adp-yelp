const BusinessSearchService = require("../services/BusinessSearchService");
const dataObject = require("../helper/dataObject");

class BusinessSearchController {
  constructor() {
    this.businessSearchService = BusinessSearchService;
  }

  async getFormatedBusinesses() {
    return await this.businessSearchService.formatBusinessesToOutput(
      dataObject
    );
  }
}

module.exports = new BusinessSearchController();
