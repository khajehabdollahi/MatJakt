const mongoose = require("mongoose");
const Translator = require("../Shared/Translator");


module.exports = class Scrubber {
  static translations = Translator.translations;
  // Method that scrubs a product
  // based on the translateSchema in our subClass
  static async scrubOne(product) {
    let scrubbed = {};
    let tschema = this.translateSchema;
    for (let key in tschema) {
      let scrubFunc = tschema[key];
      scrubbed[key] = await scrubFunc(product);
    }
    return scrubbed;
  }

  // Scrub a whole array of products
  static async scrubAll(products) {
    let scrubbed = [];
    for (let product of products) {
      scrubbed.push(await this.scrubOne(product));
    }
    return scrubbed;
  }

  static convertSize(unit, size) {
    switch (unit) {
      case "hg":
      case "dl": {
        return size / 10;
      }
      case "cl": {
        return size / 100;
      }
      case "g":
      case "ml": {
        return size / 1000;
      }
      default: {
        return size;
      }
    }
  }

  static stringToObjectId(string) {
    return mongoose.Types.ObjectId(string);
  }
};
