import * as Router from 'react-router';
import { createMemoryHistory } from 'history';
import * as Sentry from '@sentry/react';
import getRouteStringFromRoutes from 'app/utils/getRouteStringFromRoutes';
var createLocation = createMemoryHistory().createLocation;
/**
 * Sets the transaction name
 */
export function setTransactionName(name) {
    Sentry.configureScope(function (scope) {
        scope.setTransaction(name);
        scope.setTag('ui.route', name);
    });
}
export function normalizeTransactionName(appRoutes, location) {
    var defaultName = location.pathname;
    // For JavaScript transactions, translate the transaction name if it exists and doesn't start with /
    // using the app's react-router routes. If the transaction name doesn't exist, use the window.location.pathname
    // as the fallback.
    Router.match({
        routes: appRoutes,
        location: createLocation(location.pathname),
    }, function (error, _redirectLocation, renderProps) {
        var _a;
        if (error) {
            return defaultName;
        }
        var routePath = getRouteStringFromRoutes((_a = renderProps === null || renderProps === void 0 ? void 0 : renderProps.routes) !== null && _a !== void 0 ? _a : []);
        if (routePath.length === 0 || routePath === '/*') {
            return defaultName;
        }
        return routePath;
    });
    return defaultName;
}
//# sourceMappingURL=apm.jsx.map