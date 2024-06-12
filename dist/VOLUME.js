"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VOLUME = void 0;
/**
 * https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice#:~:text=Optional-,volume,-Indicates%20the%20volume
 */
var VOLUME;
(function (VOLUME) {
    VOLUME["SILENT"] = "silent";
    VOLUME["X_SOFT"] = "x-soft";
    VOLUME["SOFT"] = "soft";
    VOLUME["MEDIUM"] = "medium";
    VOLUME["LOUD"] = "loud";
    VOLUME["X_LOUD"] = "x-LOUD";
    VOLUME["DEFAULT"] = "default";
})(VOLUME || (exports.VOLUME = VOLUME = {}));
