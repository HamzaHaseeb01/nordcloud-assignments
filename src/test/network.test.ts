const request = require('supertest')
const app = require('../index')

describe('test shortest network', () => {
    const staticPathResult = [
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

    let server: any;
    beforeAll(async () => {
        const mod = await import('..');
        server = (mod as any).default;
    });
    it('should return result using static value for station and devices', async () => {
        const res = await request(server).get('/')
        expect(JSON.stringify(res.body.paths)).toEqual(JSON.stringify(staticPathResult))

    })

})
