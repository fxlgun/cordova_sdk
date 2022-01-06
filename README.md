cordova-sdk

Example app :  There is an example app inside the example directory.

Basic integration First, download the library from npm:

    $ npm install trackier/cordova_sdk

In case you are using Ionic Native, you can add our SDK from ionic-native repo:

Integrate the SDK into your app:

The Trackier SDK automatically registers with the Cordova events deviceready, resume and pause.

Depending on whether you build your app for testing or for production, you must set environment with one of these values:

    TrackierEnvironment.Development
    TrackierEnvironment.Production
    TrackierEnvironment.Testing

In your index.js file after you have received the deviceready event, add the following code to initialize the Trackier SDK:

    var trackierConfig = new TrackierConfig("xxxx-xx-4505-bc8b-xx",TrackierEnvironment.Development);
    this.trackierCordovaPlugin.initializeSDK(trackierConfig);


In case you are using ionic native application:

1)Register the provider at app.module.ts:

 You need to import the plugin and add the provider into app.module.ts, so add the import line and the provider in @NgModule:

    import { TrackierCordovaPlugin} from '@ionic-native/trackier-cordova-plugin/ngx';

    @NgModule({
    providers: [
        TrackierCordovaPlugin
    ]
    })


For Event Tracking :

1)Event track with Trackier Cordova SDK:

    var trackierEvent = new TrackierEvent(TrackierEvent.UPDATE);
    trackierEvent.setParam1("XXXXXX");
    trackierEvent.setParam2("kkkkkkk");
    TrackierSDK.trackEvent(trackierEvent);


2)Event track with currency and revenue with Trackier Cordova SDK:

    var trackierEvent = new TrackierEvent(TrackierEvent.UPDATE);
    trackierEvent.setParam1("XXXXXX");
    trackierEvent.setParam2("kkkkkkk");
    trackierEvent.setRevenue(2.5);
    trackierEvent.setCurrency("USD");
    TrackierSDK.trackEvent(trackierEvent);
    
    
## <a id="qs-progaurd-trackier-sdk"></a>Proguard Settings 

If your app is using proguard then add these lines to the proguard config file 

``` 
  -keep class com.trackier.sdk.** { *; }
  -keep class com.google.android.gms.common.ConnectionResult {
      int SUCCESS;
  }
  -keep class com.google.android.gms.ads.identifier.AdvertisingIdClient {
      com.google.android.gms.ads.identifier.AdvertisingIdClient$Info getAdvertisingIdInfo(android.content.Context);
  }
  -keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info {
      java.lang.String getId();
      boolean isLimitAdTrackingEnabled();
  }
  -keep public class com.android.installreferrer.** { *; }
```

    
