// Layouts
import { JustHeader } from '~/layouts';
// Pages
import { Home, Following, Live, Profile, Search, Upload } from '~/pages';
// Assets
import config from '~/config';
// PUBLIC ROUTES
const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.live, element: Live },
    { path: config.routes.profile, element: Profile },
    { path: config.routes.search, element: Search },
    { path: config.routes.upload, element: Upload, layout: JustHeader },
];
// PRIVATE ROUTES
const privateRoutes = [];
export { publicRoutes, privateRoutes };
