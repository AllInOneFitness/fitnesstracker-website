# Get SHA-256 Fingerprint for Android App Links

You need to get your SHA-256 fingerprint to complete the Android App Links configuration.

## Option 1: Debug Keystore (For Testing)

Run this command in your terminal:

```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

Look for the line that says `SHA256:` and copy the fingerprint (it looks like: `AA:BB:CC:DD:...`)

## Option 2: Release Keystore (For Production)

If you have a release keystore, run:

```bash
keytool -list -v -keystore /path/to/your/release.keystore -alias your-key-alias
```

You'll be prompted for the keystore password. Then look for the `SHA256:` line.

## Option 3: From Google Play Console

If your app is already on Google Play:

1. Go to [Google Play Console](https://play.google.com/console)
2. Select your app
3. Go to **Setup** → **App Integrity**
4. Under **App signing**, you'll see the SHA-256 certificate fingerprint
5. Copy the fingerprint

## Option 4: From EAS Build

If you're using EAS Build, you can get it from:

```bash
cd /Users/innocent_kushal/Documents/Cline/FitnessTracker
eas credentials
```

Select Android → Production → Keystore → View details

## After Getting the Fingerprint

1. Copy the SHA-256 fingerprint (format: `AA:BB:CC:DD:EE:...`)
2. Open `fitnesstracker-site/public/.well-known/assetlinks.json`
3. Replace `YOUR_APP_SHA256_FINGERPRINT_HERE` with your actual fingerprint
4. Save the file
5. Run these commands:

```bash
cd /Users/innocent_kushal/Documents/Cline/fitnesstracker-site
git add .
git commit -m "Update universal links with production credentials"
git push
```

## Note

- For **testing/development**: Use the debug keystore fingerprint
- For **production**: Use the release keystore or Play Console fingerprint
- You can have **multiple fingerprints** in the array if you want to support both debug and release builds

Example with multiple fingerprints:
```json
"sha256_cert_fingerprints": [
  "AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99",
  "11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00"
]
```
