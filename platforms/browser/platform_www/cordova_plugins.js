cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
        "id": "cordova-plugin-keyboard.keyboard",
        "pluginId": "cordova-plugin-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "file": "plugins/flyacts-plugin-barcodescanner/www/barcodescanner.js",
        "id": "flyacts-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "flyacts-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/flyacts-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "flyacts-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "flyacts-plugin-barcodescanner",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-sqlite-storage": "1.2.0",
    "cordova-plugin-keyboard": "1.1.4",
    "flyacts-plugin-barcodescanner": "4.1.3"
}
// BOTTOM OF METADATA
});