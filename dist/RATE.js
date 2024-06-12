"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RATE = void 0;
/**
 * https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice#:~:text=Optional-,rate,-Indicates%20the%20speaking
 */
var RATE;
(function (RATE) {
    RATE["X_SLOW"] = "x-slow";
    RATE["SLOW"] = "slow";
    RATE["MEDIUM"] = "medium";
    RATE["FAST"] = "fast";
    RATE["X_FAST"] = "x-fast";
    RATE["DEFAULT"] = "default";
})(RATE || (exports.RATE = RATE = {}));
