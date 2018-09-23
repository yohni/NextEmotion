
<h2>Overview of Google Play Services </h2>
With Google Play services, your app can take advantage of the latest, Google-powered features such as Maps, Google+, and more, with automatic platform updates distributed as an APK through the Google Play store. This makes it faster for your users to receive updates and easier for you to integrate the newest that Google has to offer.  

<h2>How it works</h2>
<h4>The Google Play services client library</h4>
The client library contains the interfaces to the individual Google services and allows you to obtain authorization from users to gain access to these services with their credentials. It also contains APIs that allow you to resolve any issues at runtime, such as a missing, disabled, or out-of-date Google Play services APK. The client library has a light footprint if you use ProGuard as part of your build process, so it won't have an adverse impact on your app's file size.  

<br/>
If you want to access added features or products, you can upgrade to a new version of the client library as they are released. However, upgrading is not necessary if you don't care about new features or bug fixes. We anticipate more Google services to be continuously added, so be on the lookout for these updates.  

<h4>The Google Play services APK</h4>
The Google Play services APK contains the individual Google services and runs as a background service in the Android OS. You interact with the background service through the client library and the service carries out the actions on your behalf. An easy-to-use authorization flow is also provided to gain access to the each Google service, which provides consistency for both you and your users.  
<br/>
The Google Play services APK is delivered through the Google Play Store, so updates to the services are not dependent on carrier or OEM system image updates. In general, devices running Android 4.0 (API level 14) or later and have the Google Play services app installed receive updates within a few days. This allows you to use the newest APIs in Google Play services and reach most of the devices in the Android ecosystem. Devices older than Android 4.0 or devices without the Google Play services app are not supported.
