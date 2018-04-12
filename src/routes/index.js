import App from "../containers/App/App.js";
import UnknownApp from "../containers/App/UnknownApp.js";
const indexRoutes = [
  { path: "/home", component: App },
  { path: "/unknown", component: UnknownApp },
];

export default indexRoutes;
