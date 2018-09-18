import { rootRoutes } from "./root";
import { blogRoutes } from "./blog";
import { detailPageRoutes } from "./detailPage";
// import { accountsRoutes } from './accounts';
// import { suppliersRoutes } from './suppliers';
// import { equipmentRoutes } from './equipments';
// import { purchaseRoutes } from './purchase';

export default class Routes {
  static root() {
    return rootRoutes;
  }

  static blog() {
    return blogRoutes;
  }
  static detailPage() {
    return detailPageRoutes;
  }
}
