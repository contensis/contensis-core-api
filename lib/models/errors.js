"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ContensisApplicationError = /** @class */ (function (_super) {
    tslib_1.__extends(ContensisApplicationError, _super);
    function ContensisApplicationError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.name = 'ContensisApplicationError';
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return ContensisApplicationError;
}(Error));
exports.ContensisApplicationError = ContensisApplicationError;
var ContensisAuthenticationError = /** @class */ (function (_super) {
    tslib_1.__extends(ContensisAuthenticationError, _super);
    function ContensisAuthenticationError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.name = 'ContensisAuthenticationError';
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return ContensisAuthenticationError;
}(Error));
exports.ContensisAuthenticationError = ContensisAuthenticationError;
