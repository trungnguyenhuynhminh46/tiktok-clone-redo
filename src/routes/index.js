// Layouts
import { JustHeader } from '~/layouts';
// Pages
import { Home, Profile, Search, Upload } from '~/pages';
// PUBLIC ROUTES
const publicRoutes = [
    { path: '/', element: Home },
    { path: '/@:nickname', element: Profile },
    { path: '/search', element: Search },
    { path: '/upload', element: Upload, layout: JustHeader },
];
// PRIVATE ROUTES
const privateRoutes = [];
export { publicRoutes, privateRoutes };
