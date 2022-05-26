const request = require('supertest')
const app = require('../index')
import { dynamicStationLocationBody, dynamicDevicesBody, dynamicInputResult,staticPathResult } from './input'

describe('test shortest network', () => {

    let server: any;
    beforeAll(async () => {
        const mod = await import('..');
        server = (mod as any).default;
    });
    it('should return result using static value for station and devices', async () => {
        const res = await request(server).get('/')
        expect(JSON.stringify(res.body.paths)).toEqual(JSON.stringify(staticPathResult))

    })

    it('should return result match with dynamic input result', async () => {
        const res = await request(server).get('/').send({ stationLocationBody: dynamicStationLocationBody, devicesBody: dynamicDevicesBody })
        expect(JSON.stringify(res.body.paths)).toEqual(JSON.stringify(dynamicInputResult))
    })
})
