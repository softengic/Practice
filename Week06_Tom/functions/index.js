"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../Server/Controllers/index");
const auth_1 = require("../Server/Controllers/auth");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/about', index_1.DisplayAboutPage);
router.get('/projects', index_1.DisplayProjectsPage);
router.get('/services', index_1.DisplayServicesPage);
router.get('/contact', index_1.DisplayContactPage);
router.get('/login', auth_1.DisplayLoginPage);
router.get('/register', auth_1.DisplayRegisterPage);
exports.default = router;
//# sourceMappingURL=index.js.map