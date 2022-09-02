"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialMediaList = void 0;
var facebook_svg_1 = __importDefault(require("../assets/svg/facebook.svg"));
var instagram_svg_1 = __importDefault(require("../assets/svg/instagram.svg"));
var whatsapp_svg_1 = __importDefault(require("../assets/svg/whatsapp.svg"));
var phone_svg_1 = __importDefault(require("../assets/svg/phone.svg"));
var socialMediaList = [
    { svg: facebook_svg_1.default, alt: 'facebook', link: 'https://www.facebook.com' },
    { svg: instagram_svg_1.default, alt: 'instagram', link: 'https://www.instagram.com' },
    { svg: whatsapp_svg_1.default, alt: 'whatsapp', link: 'https://www.whatsapp.com' },
    { svg: phone_svg_1.default, alt: 'phone', link: 'https://www.facebook.com' }
];
exports.socialMediaList = socialMediaList;
