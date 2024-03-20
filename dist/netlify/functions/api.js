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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importStar(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../../src/docs/swagger.json"));
const catchAsyncErrors_1 = __importDefault(require("../../src/utils/catchAsyncErrors"));
const booksController_1 = require("../../src/controller/booksController");
const serverless_http_1 = __importDefault(require("serverless-http"));
const api = (0, express_1.default)();
const router = (0, express_1.Router)();
router.use('/api-docs', swagger_ui_express_1.default.serve);
router.get('/api-docs', swagger_ui_express_1.default.setup(swagger_json_1.default));
router.get('/', (0, catchAsyncErrors_1.default)(booksController_1.getAllBooks));
router.get('/:id', (0, catchAsyncErrors_1.default)(booksController_1.getUniqueBook));
router.post('/:id/purchase', (0, catchAsyncErrors_1.default)(booksController_1.purchaseBook));
api.use('/books', router);
exports.handler = (0, serverless_http_1.default)(api);
