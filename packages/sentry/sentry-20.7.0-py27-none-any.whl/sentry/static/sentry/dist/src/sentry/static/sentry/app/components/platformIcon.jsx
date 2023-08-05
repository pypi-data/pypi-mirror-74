import { __rest } from "tslib";
import React from 'react';
var PLATFORM_TO_ICON = {
    apple: 'apple',
    cocoa: 'apple',
    cordova: 'cordova',
    csharp: 'csharp',
    elixir: 'elixir',
    electron: 'electron',
    go: 'go',
    java: 'java',
    'java-android': 'java',
    'java-appengine': 'app-engine',
    'java-log4j': 'java',
    'java-log4j2': 'java',
    'java-logback': 'java',
    'java-logging': 'java',
    javascript: 'javascript',
    'javascript-angular': 'angularjs',
    'javascript-backbone': 'javascript',
    'javascript-ember': 'ember',
    'javascript-react': 'react',
    'javascript-vue': 'vue',
    node: 'nodejs',
    'node-connect': 'nodejs',
    'node-express': 'nodejs',
    'node-koa': 'nodejs',
    'objective-c': 'apple',
    perl: 'perl',
    php: 'php',
    'php-laravel': 'laravel',
    'php-monolog': 'php',
    'php-symfony2': 'php',
    python: 'python',
    'python-flask': 'flask',
    'python-sanic': 'python',
    'python-bottle': 'bottle',
    'python-celery': 'python',
    'python-django': 'django',
    'python-pylons': 'python',
    'python-pyramid': 'python',
    'python-rq': 'python',
    'python-tornado': 'python',
    'python-pythonawslambda': 'python',
    'react-native': 'apple',
    ruby: 'ruby',
    'ruby-rack': 'ruby',
    'ruby-rails': 'rails',
    rust: 'rust',
    swift: 'swift',
};
export function getIcon(platform) {
    var icon = PLATFORM_TO_ICON[platform];
    if (!icon) {
        return 'generic';
    }
    return icon;
}
var PlatformIcon = function (_a) {
    var platform = _a.platform, size = _a.size, width = _a.width, height = _a.height, props = __rest(_a, ["platform", "size", "width", "height"]);
    var icon = getIcon(platform);
    return (<img src={require("platformicons/svg/" + icon + ".svg")} width={width || size || '1em'} height={height || size || '1em'} {...props}/>);
};
export default PlatformIcon;
//# sourceMappingURL=platformIcon.jsx.map