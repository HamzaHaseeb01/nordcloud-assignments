"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require('supertest');
const app = require('../index');
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
    ];
    let server;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const mod = yield Promise.resolve().then(() => __importStar(require('..')));
        server = mod.default;
    }));
    it('should return result using static value for station and devices', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(server).get('/');
        expect(JSON.stringify(res.body.paths)).toEqual(JSON.stringify(staticPathResult));
    }));
});
//# sourceMappingURL=network.test.js.map