const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const haversine = require("haversine-distance")

const fileService = require("../services/fileService");

const User = require("../models/User");
const Trip = require("../models/Trip");
const Badge = require("../models/Badge");


const addTrip = asyncHandler(async (req, res) => {
    const { time, longitude, latitude } = req.body;
    const photos = req.files;
    let major, shellGraphic, shells;
    
    // all fields required
    if (!time||!longitude||!latitude) {
        res.status(400);
        throw new Error("Missing fields.");
    }

    let photoFiles = [];
    for (let photo in photos) {
        console.log(photo, "/photos/" + photo)
        await fileService.moveFileAfterCreation(photo, "/photos/" + photo);
        let photoFile = await getFile("/photos/" + photo)
        if (photoFile) {
            photoFiles.push(photoFile);
        }
    }

    console.log("checkpoint 1");

    const badges = [
        {latitude: 41.8351, longitude: 69.9439, name: "Cape Cod"},
        {latitude: 40.6868, longitude: 72.9987, name: "Fire Island National Seashore"},
        {latitude: 40.4333, longitude: 73.9885, name: "Sandy Hook"},
        {latitude: 38.9351, longitude: 74.9060, name: "Cape May"},
        {latitude: 38.7209, longitude: 75.0760, name: "Rehoboth Beach"},
        {latitude: 41.4354, longitude: 71.4558, name: "Narragansett Town Beach"},
        {latitude: 43.5178, longitude: 70.3773, name: "Old Orchard Beach"},
        {latitude: 42.932, longitude: 70.7981, name: "Hampton Beach State Park"}
    ];

    for (let badge in badges) {
        let badgeCoord = {latitude: badge.latitude, longitude: badge.longitude};
        let tripCoord = {latitude: latitude, longitude: longitude};
        if (haversine(badgeCoord, tripCoord) <= 7500) {
            major = badge.name;
            break;
        }
    }
    res.send({major});



});


const getAllTrips = asyncHandler(async (req, res) => {
//     // const trips = 

//     res.status(200).json({
//       token
//     });
//   } else {
//     res.status(401);
//     throw new Error("Incorrect email or password.");
    res.send({});
  }
);


module.exports = {
  addTrip,
  getAllTrips,
}