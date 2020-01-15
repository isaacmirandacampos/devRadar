const Dev = require("../models/Dev");
const parseStringAsArray = require("../util/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { techs, longitude, latitude } = req.query;

    const devs = await Dev.find({
      techs: {
        $in: parseStringAsArray(techs.toUpperCase())
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json(devs);
  }
};
