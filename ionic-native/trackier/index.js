var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export var TrackierEnvironment;
(function (TrackierEnvironment) {
    TrackierEnvironment["Development"] = "development";
    TrackierEnvironment["Production"] = "production";
    TrackierEnvironment["Testing"] = "testing";
})(TrackierEnvironment || (TrackierEnvironment = {}));
var TrackierConfig = /** @class */ (function () {
    function TrackierConfig(appToken, environment) {
        this.secretId = '';
        this.secretKey = '';
        this.manualMode = false;
        this.boolean = false;
        this.attributionParams = {};
        this.appToken = appToken;
        this.environment = environment;
        this.secretId = this.secretId;
        this.secretKey = this.secretKey;
        this.manualMode = this.manualMode;
        this.disableOrganic = this.disableOrganic;
    }
    TrackierConfig.prototype.setAppSecret = function (key, value) {
        this.secretId = key;
        this.secretKey = value;
    };
    TrackierConfig.prototype.setManualMode = function (value) {
        this.manualMode = value;
    };
    TrackierConfig.prototype.disableOrganicTracking = function (value) {
        this.disableOrganic = value;
    };
    TrackierConfig.prototype.setAttributionParams = function (params) {
        this.attributionParams = __assign(__assign({}, this.attributionParams), params);
    };
    return TrackierConfig;
}());
export { TrackierConfig };
var TrackierEvent = /** @class */ (function () {
    function TrackierEvent(eventId) {
        this.eventId = eventId;
    }
    TrackierEvent.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    TrackierEvent.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    TrackierEvent.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    TrackierEvent.prototype.setCouponCode = function (couponCode) {
        this.couponCode = couponCode;
    };
    TrackierEvent.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    TrackierEvent.prototype.setParam1 = function (param1) {
        this.param1 = param1;
    };
    TrackierEvent.prototype.setParam2 = function (param2) {
        this.param2 = param2;
    };
    TrackierEvent.prototype.setParam3 = function (param3) {
        this.param3 = param3;
    };
    TrackierEvent.prototype.setParam4 = function (param4) {
        this.param4 = param4;
    };
    TrackierEvent.prototype.setParam5 = function (param5) {
        this.param5 = param5;
    };
    TrackierEvent.prototype.setParam6 = function (param6) {
        this.param6 = param6;
    };
    TrackierEvent.prototype.setParam7 = function (param7) {
        this.param7 = param7;
    };
    TrackierEvent.prototype.setParam8 = function (param8) {
        this.param8 = param8;
    };
    TrackierEvent.prototype.setParam9 = function (param9) {
        this.param9 = param9;
    };
    TrackierEvent.prototype.setParam10 = function (param10) {
        this.param10 = param10;
    };
    TrackierEvent.prototype.setRevenue = function (revenue) {
        this.revenue = revenue;
    };
    return TrackierEvent;
}());
export { TrackierEvent };
var TrackierCordovaPluginOriginal = /** @class */ (function (_super) {
    __extends(TrackierCordovaPluginOriginal, _super);
    function TrackierCordovaPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrackierCordovaPluginOriginal.prototype.initializeSDK = function (config) { return cordova(this, "initializeSDK", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserEmail = function (userEmail) { return cordova(this, "setUserEmail", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserName = function (userName) { return cordova(this, "setUserName", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setUserPhone = function (userPhone) { return cordova(this, "setUserPhone", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setDOB = function (dob) { return cordova(this, "setDOB", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setGender = function (gender) { return cordova(this, "setGender", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.parseDeepLink = function (uri) { return cordova(this, "parseDeepLink", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.fireInstall = function () { return cordova(this, "fireInstall", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getTrackierId = function () { return cordova(this, "getTrackierId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAd = function () { return cordova(this, "getAd", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdID = function () { return cordova(this, "getAdID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getCampaign = function () { return cordova(this, "getCampaign", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getCampaignID = function () { return cordova(this, "getCampaignID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdSet = function () { return cordova(this, "getAdSet", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getAdSetID = function () { return cordova(this, "getAdSetID", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getChannel = function () { return cordova(this, "getChannel", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP1 = function () { return cordova(this, "getP1", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP2 = function () { return cordova(this, "getP2", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP3 = function () { return cordova(this, "getP3", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP4 = function () { return cordova(this, "getP4", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getP5 = function () { return cordova(this, "getP5", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getClickId = function () { return cordova(this, "getClickId", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getDlv = function () { return cordova(this, "getDlv", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getPid = function () { return cordova(this, "getPid", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.getIsRetargeting = function () { return cordova(this, "getIsRetargeting", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.updateAppleAdsToken = function (token) { return cordova(this, "updateAppleAdsToken", {}, arguments); };
    TrackierCordovaPluginOriginal.prototype.setDeferredDeeplinkCallbackListener = function () { return cordova(this, "setDeferredDeeplinkCallbackListener", { "observable": true }, arguments); };
    TrackierCordovaPluginOriginal.prototype.storeRetargetting = function (dob) { return cordova(this, "storeRetargetting", {}, arguments); };
    TrackierCordovaPluginOriginal.pluginName = "TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.plugin = "com.trackier.cordova_sdk";
    TrackierCordovaPluginOriginal.pluginRef = "cordova.plugins.TrackierCordovaPlugin";
    TrackierCordovaPluginOriginal.repo = "https://github.com/trackier/cordova_sdk";
    TrackierCordovaPluginOriginal.platforms = ["Android"];
    return TrackierCordovaPluginOriginal;
}(AwesomeCordovaNativePlugin));
var TrackierCordovaPlugin = new TrackierCordovaPluginOriginal();
export { TrackierCordovaPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdHJhY2tpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUE4QixNQUFNLCtCQUErQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QixrREFBMkIsQ0FBQTtJQUMzQixnREFBeUIsQ0FBQTtJQUN6QiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5Qjs7SUFXQSx3QkFBWSxRQUFnQixFQUFFLFdBQWdDO1FBTnRELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixzQkFBaUIsR0FBOEIsRUFBRSxDQUFDO1FBR3pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUMxQyxDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIs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QVE7SUFLdEIsMkNBQVc7SUFLWCw2Q0FBYTtJQUtiLHFDQUFLO0lBS0wsdUNBQU87SUFLUCwyQ0FBVztJQUtYLDZDQUFhO0lBS2Isd0NBQVE7SUFLUiwwQ0FBVTtJQUtWLDBDQUFVO0lBS1YscUNBQUs7SUFLTCxxQ0FBSztJQUtMLHFDQUFLO0lBS0wscUNBQUs7SUFLTCxxQ0FBSztJQUtMLDBDQUFVO0lBS1Ysc0NBQU07SUFLTixzQ0FBTTtJQUtOLGdEQUFnQjtJQUtoQixtREFBbUIsYUFBQyxLQUFVO0lBTzVCLG1FQUFtQztJQWtCckMsaURBQWlCLGFBQUMsR0FBUTs7Ozs7O2dDQTNTM0I7RUF1STJDLDBCQUEwQjtTQUF4RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBUcmFja2llckVudmlyb25tZW50IHtcblx0RGV2ZWxvcG1lbnQgPSAnZGV2ZWxvcG1lbnQnLFxuXHRQcm9kdWN0aW9uID0gJ3Byb2R1Y3Rpb24nXG5cdFRlc3RpbmcgPSAndGVzdGluZydcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNraWVyQ29uZmlnIHtcblx0cHJpdmF0ZSBhcHBUb2tlbjogc3RyaW5nO1xuXHRwcml2YXRlIGVudmlyb25tZW50OiBUcmFja2llckVudmlyb25tZW50O1xuXHRwcml2YXRlIHNlY3JldElkOiBzdHJpbmcgPSAnJztcblx0cHJpdmF0ZSBzZWNyZXRLZXk6IHN0cmluZyA9ICcnO1xuXHRwcml2YXRlIG1hbnVhbE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBkaXNhYmxlT3JnYW5pYyBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgYXR0cmlidXRpb25QYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblx0XG5cdGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBUcmFja2llckVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLnNlY3JldElkID0gdGhpcy5zZWNyZXRJZDtcblx0XHR0aGlzLnNlY3JldEtleSA9IHRoaXMuc2VjcmV0S2V5XG5cdFx0dGhpcy5tYW51YWxNb2RlID0gdGhpcy5tYW51YWxNb2RlXG5cdFx0dGhpcy5kaXNhYmxlT3JnYW5pYyA9IHRoaXMuZGlzYWJsZU9yZ2FuaWNcblx0fVxuXG5cdHB1YmxpYyBzZXRBcHBTZWNyZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlY3JldElkID0ga2V5O1xuXHRcdHRoaXMuc2VjcmV0S2V5ID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0TWFudWFsTW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubWFudWFsTW9kZSA9IHZhbHVlXG5cdH1cblxuXHRwdWJsaWMgZGlzYWJsZU9yZ2FuaWNUcmFja2luZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlzYWJsZU9yZ2FuaWMgPSB2YWx1ZVxuXHR9XG5cblx0cHVibGljIHNldEF0dHJpYnV0aW9uUGFyYW1zKHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRcdHRoaXMuYXR0cmlidXRpb25QYXJhbXMgPSB7IC4uLnRoaXMuYXR0cmlidXRpb25QYXJhbXMsIC4uLnBhcmFtcyB9O1xuXHR9IFxuXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2llckV2ZW50IHtcblxuXHRwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcblx0cHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cdHByaXZhdGUgcHJvZHVjdElkOiBzdHJpbmc7XG5cdHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcblx0cHJpdmF0ZSBjb3Vwb25Db2RlOiBzdHJpbmc7XG5cdHByaXZhdGUgZGlzY291bnQ6IG51bWJlclxuXHRwcml2YXRlIHBhcmFtMTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNDogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNjogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtNzogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtODogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtOTogc3RyaW5nO1xuXHRwcml2YXRlIHBhcmFtMTA6IHN0cmluZztcblx0cHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5ldmVudElkID0gZXZlbnRJZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRPcmRlcklkKG9yZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG5cdH1cblx0cHVibGljIHNldFByb2R1Y3RJZChwcm9kdWN0SWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuXHR9XG5cdHB1YmxpYyBzZXRDdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuXHR9XG5cdHB1YmxpYyBzZXRDb3Vwb25Db2RlKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY291cG9uQ29kZSA9IGNvdXBvbkNvZGU7XG5cdH1cblx0cHVibGljIHNldERpc2NvdW50KGRpc2NvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMShwYXJhbTE6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW0xID0gcGFyYW0xO1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTIocGFyYW0yOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtMiA9IHBhcmFtMjtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW0zKHBhcmFtMzogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTMgPSBwYXJhbTM7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNChwYXJhbTQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW00ID0gcGFyYW00O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTUocGFyYW01OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtNSA9IHBhcmFtNTtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW02KHBhcmFtNjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTYgPSBwYXJhbTY7XG5cdH1cblx0cHVibGljIHNldFBhcmFtNyhwYXJhbTc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucGFyYW03ID0gcGFyYW03O1xuXHR9XG5cdHB1YmxpYyBzZXRQYXJhbTgocGFyYW04OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnBhcmFtOCA9IHBhcmFtODtcblx0fVxuXHRwdWJsaWMgc2V0UGFyYW05KHBhcmFtOTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTkgPSBwYXJhbTk7XG5cdH1cblx0cHVibGljIHNldFBhcmFtMTAocGFyYW0xMDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5wYXJhbTEwID0gcGFyYW0xMDtcblx0fVxuXHRwdWJsaWMgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuXHR9XG5cblx0c2V0RXZlbnRWYWx1ZTogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cblxuQFBsdWdpbih7XG5cdHBsdWdpbk5hbWU6ICdUcmFja2llckNvcmRvdmFQbHVnaW4nLFxuXHRwbHVnaW46ICdjb20udHJhY2tpZXIuY29yZG92YV9zZGsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcblx0cGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlRyYWNraWVyQ29yZG92YVBsdWdpbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cblx0cmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmFja2llci9jb3Jkb3ZhX3NkaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cblx0Ly9pbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdC8vaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG5cdHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYWNraWVyQ29yZG92YVBsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuXHRAQ29yZG92YSgpXG5cdGluaXRpYWxpemVTREsoY29uZmlnOiBUcmFja2llckNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuXHQgICAgcmV0dXJuO1xuXHR9XG4gXG5cdCBcblx0QENvcmRvdmEoKVxuXHR0cmFja0V2ZW50KGV2ZW50OiBUcmFja2llckV2ZW50KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyRW1haWwodXNlckVtYWlsOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0VXNlck5hbWUodXNlck5hbWU6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRzZXRVc2VyUGhvbmUodXNlclBob25lOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0c2V0RE9CKGRvYjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHNldEdlbmRlcihnZW5kZXI6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRwYXJzZURlZXBMaW5rKHVyaTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGZpcmVJbnN0YWxsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRUcmFja2llcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0QWRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0Q2FtcGFpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENhbXBhaWduSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldEFkU2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRBZFNldElEKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRDaGFubmVsKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQMSgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDIoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldFAzKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRQNCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UDUoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldENsaWNrSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdGdldERsdigpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKClcblx0Z2V0UGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHRnZXRJc1JldGFyZ2V0aW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QENvcmRvdmEoKVxuXHR1cGRhdGVBcHBsZUFkc1Rva2VuKHRva2VuOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdEBDb3Jkb3ZhKHtcblx0XHRvYnNlcnZhYmxlOiB0cnVlIC8vIFRoaXMgYWxsb3dzIGNhbGxiYWNrLWJhc2VkIGV2ZW50c1xuXHQgIH0pXG5cdCAgc2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0ICBjb3Jkb3ZhLmV4ZWMoXG5cdFx0XHQoZGVlcExpbmtVcmw6IHN0cmluZykgPT4ge1xuXHRcdFx0ICBvYnNlcnZlci5uZXh0KGRlZXBMaW5rVXJsKTtcblx0XHRcdCAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdH0sXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4ge1xuXHRcdFx0ICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG5cdFx0XHR9LFxuXHRcdFx0XCJUcmFja2llckNvcmRvdmFQbHVnaW5cIixcblx0XHRcdFwidHJhY2tpZXJfZGVmZXJyZWREZWVwbGlua1wiLFxuXHRcdFx0W11cblx0XHQgICk7XG5cdFx0fSk7XG5cdH1cblxuXHRAQ29yZG92YSgpXG5cdHN0b3JlUmV0YXJnZXR0aW5nKGRvYjogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm47XG5cdH1cbn0iXX0=