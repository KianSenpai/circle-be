"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = require("express");
const booksController_1 = require("../controller/booksController");
const catchAsyncErrors_1 = __importDefault(require("../utils/catchAsyncErrors"));
const swagger_json_1 = __importDefault(require("../docs/swagger.json"));
const router = (0, express_1.Router)();
router.use('/api-docs', swagger_ui_express_1.default.serve);
router.get('/api-docs', swagger_ui_express_1.default.setup(swagger_json_1.default));
router.get('/', (0, catchAsyncErrors_1.default)(booksController_1.getAllBooks));
router.get('/:id', (0, catchAsyncErrors_1.default)(booksController_1.getUniqueBook));
router.post('/:id/purchase', (0, catchAsyncErrors_1.default)(booksController_1.purchaseBook));
exports.default = router;
