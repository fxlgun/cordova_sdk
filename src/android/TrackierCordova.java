package com.trackier.sdk;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.*;

/**
 * TrackierCordova SDK class
 */
public class TrackierCordova extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals("initialize")) {
			initialize(args);
			return true;
		} else if (action.equals("trackEvent")) {
			trackEvent(args);
			return true;
		}
		return false;
	}

	public void initialize(JSONArray args) throws JSONException {
		String params = args.getString(0);
		JSONArray jsonArrayParams = new JSONArray(params);
		JSONObject jsonParameters = jsonArrayParams.optJSONObject(0);
		Map<String, Object> parameters = TrackierCordovaUtil.jsonObjectToMap(jsonParameters);

		String appToken = null;
		String environment = null;
		if (parameters.containsKey(TrackierCordovaUtil.KEY_APP_TOKEN)) {
			appToken = parameters.get(TrackierCordovaUtil.KEY_APP_TOKEN).toString();
		}
		if (parameters.containsKey(TrackierCordovaUtil.KEY_ENVIRONMENT)) {
			appToken = parameters.get(TrackierCordovaUtil.KEY_ENVIRONMENT).toString();
		}
		TrackierSDKConfig sdkConfig = new TrackierSDKConfig(this.cordova.getActivity().getApplicationContext(), appToken, environment);
		TrackierSDK.initialize(sdkConfig);
	}

	public void trackEvent(JSONArray args) throws JSONException {
		String params = args.getString(0);
		JSONArray jsonArrayParams = new JSONArray(params);
		JSONObject jsonParameters = jsonArrayParams.optJSONObject(0);
		Map<String, Object> parameters = TrackierCordovaUtil.jsonObjectToMap(jsonParameters);

		String eventId = "";
		if (parameters.containsKey(TrackierCordovaUtil.KEY_EVENT_ID)) {
			eventId = parameters.get(TrackierCordovaUtil.KEY_EVENT_ID).toString();
		}
		TrackierEvent evtObj = new TrackierEvent(eventId);
		TrackierSDK.trackEvent(evtObj);
	}
}
