"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuitableNetworkLocations = void 0;
let stationLocation = [
    { x: 0, y: 0, reach: 9 },
    { x: 20, y: 20, reach: 6 },
    { x: 10, y: 0, reach: 12 },
    { x: 5, y: 5, reach: 13 },
    { x: 99, y: 25, reach: 2 },
];
let devices = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18],
    [13, 13],
    [25, 99],
];
const SuitableNetworkLocations = (req, res) => {
    const paths = []; //array declaration to store the results
    const { body: { stationLocationBody, devicesBody } } = req;
    if (stationLocationBody && stationLocationBody.length)
        stationLocation = stationLocationBody;
    if (devicesBody && devicesBody.length)
        devices = devicesBody;
    // iterating the array's to calculate highest non zero speed b/w station and devices
    devices.forEach((deviceCoordinates) => {
        const shortestPath = stationLocation
            .map((stationCoordintes) => {
            const distance = FindDistance(deviceCoordinates, [
                stationCoordintes.x,
                stationCoordintes.y,
            ]); // calling function FindDistance to calculate distance between station and device
            return CalculateSpeed(distance, stationCoordintes); //calling function to calculate speed using distance and station reach
        })
            .filter((value) => value.speed > 0) //to filter out speed greater than zero
            .sort((x, y) => x.speed - y.speed) // sorting in ascending order
            .pop(); //poping out value from array that has highest speed which exist in last because of sorting in ascending order
        return DisplayNearestStations(shortestPath, deviceCoordinates, paths);
    });
    return res.status(200).json({ paths });
};
exports.SuitableNetworkLocations = SuitableNetworkLocations;
const DisplayNearestStations = (shortestPath, deviceCoordinates, paths) => {
    if (!shortestPath) {
        paths.push({ devices: [deviceCoordinates[0], deviceCoordinates[1]], nearestStation: null });
        console.log("No network station within reach for [", deviceCoordinates[0], ",", deviceCoordinates[1], "]");
    }
    else {
        paths.push({ device: [deviceCoordinates[0], deviceCoordinates[1]], nearestStation: [shortestPath.x, shortestPath.y], speed: shortestPath.speed });
        console.log("Best network station for point [", deviceCoordinates[0], ",", deviceCoordinates[1], "] is [", shortestPath.x, ",", shortestPath.y, "] with speed ", shortestPath.speed);
    }
};
//function to calculate speed using distance and station
const CalculateSpeed = (distance, stationCoordintes) => {
    if (distance > stationCoordintes.reach)
        return Object.assign(Object.assign({}, stationCoordintes), { speed: 0 });
    else
        return Object.assign(Object.assign({}, stationCoordintes), { speed: Math.pow(stationCoordintes.reach - distance, 2) });
};
// Function to find distance from device to station location
const FindDistance = (pointsA, pointsB) => {
    const result = Math.sqrt(Math.pow(Math.abs(pointsA[0] - pointsB[0]), 2) +
        Math.pow(Math.abs(pointsA[1] - pointsB[1]), 2));
    return result;
};
//# sourceMappingURL=network.js.map