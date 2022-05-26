export const dynamicStationLocationBody = [{ x: 1, y: 0, reach: 19 },
{ x: 20, y: 30, reach: 16 },
{ x: 10, y: 0, reach: 1 },
{ x: 5, y: 50, reach: 13 },
{ x: 99, y: 25, reach: 20 }];


export const dynamicDevicesBody = [
    [4, 4],
    [100, 100],
    [15, 10],
    [18, 18],
    [13, 13],
    [25, 99]
]

export const dynamicInputResult = [
    {
        device: [
            4,
            4
        ],
        nearestStation: [
            1,
            0
        ],
        speed: 196
    },
    {
        devices: [
            100,
            100
        ],
        nearestStation: null
    },
    {
        device: [
            15,
            10
        ],
        nearestStation: [
            1,
            0
        ],
        speed: 3.223279704760366
    },
    {
        device: [
            18,
            18
        ],
        nearestStation: [
            20,
            30
        ],
        speed: 14.703198060913945
    },
    {
        device: [
            13,
            13
        ],
        nearestStation: [
            1,
            0
        ],
        speed: 1.7113715077429654
    },
    {
        devices: [
            25,
            99
        ],
        nearestStation: null
    }
]

//result for static path if nothing is passed in body
export const staticPathResult = [
    { device: [0, 0], nearestStation: [0, 0], speed: 81 },
    { devices: [100, 100], nearestStation: null },
    {
        device: [15, 10],
        nearestStation: [5, 5],
        speed: 3.3111629250273373
    },
    {
        device: [18, 18],
        nearestStation: [20, 20],
        speed: 10.058874503045718
    },
    {
        device: [13, 13],
        nearestStation: [5, 5],
        speed: 2.843579026396227
    },
    { devices: [25, 99], nearestStation: null }
]
