import { createRouter, createWebHashHistory } from "vue-router";
import App from "../../App.vue";

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../../components/Dashboard.vue"),
      },
      {
        path: "dashboard",
        name: "Quản lý đơn vị",
        component: () => import("../../views/system/unit/Dashboard.vue"),
      },
      {
        path: "role",
        name: "Vai trò",
        component: () =>
          import("../../views/management/accounts/roles/MngRoles.vue"),
      },
      {
        path: "user",
        name: "Người dùng",
        component: () =>
          import("../../views/management/accounts/user/UserMng.vue"),
      },
      {
        path: "login1",
        name: "Đăng nhập",
        component: () => import("../../views/log/login/LoginPage.vue"),
      },
      {
        path: "periodicwater",
        name: "Chỉ số nước định kỳ",
        component: () =>
          import("../../views/monitor/periodic_water/PeriodicWater.vue"),
      },
      {
        path: "mng",
        name: "Management",
        component: () =>
          import("../../views/management/customers/CustomerMng.vue"),
      },
      {
        path: "add_group",
        component: () =>
          import("../../views/management/customers/add_group/GroupAdd.vue"),
      },
      {
        path: "/add_person",
        component: () =>
          import("../../views/management/customers/add_person/PersonAdd.vue"),
      },
      {
        path: "request-rent",
        name: "Request Rent",
        component: () =>
          import("../../views/management/request_rent/RequestRent.vue"),
      },
      {
        path: "request-back",
        name: "Request Back",
        component: () =>
          import("../../views/management/request_back/RequestBack.vue"),
      },
      {
        path: "setting-device",
        name: "Setting Device",
        component: () =>
          import(
            "../../views/management/devices/setting-device/SettingDevice.vue"
          ),
      },
      {
        path: "mng-device",
        name: "Manage Device",
        component: () =>
          import(
            "../../views/management/devices/manage-device/ManageDevice.vue"
          ),
      },
      {
        path: "unit-fix",
        name: "Install Maintenance",
        component: () =>
          import(
            "../../views/management/install_maintance/InstallMaintaince.vue"
          ),
      },
      {
        path: "bill",
        name: "Bill",
        component: () => import("../../views/management/bills/BillMng.vue"),
      },
      {
        path: "/formlayout",
        name: "formlayout",
        component: () => import("../../components/FormLayoutDemo.vue"),
      },
      {
        path: "/input",
        name: "input",
        component: () => import("../../components/InputDemo.vue"),
      },
      {
        path: "/floatlabel",
        name: "floatlabel",
        component: () => import("../../components/FloatLabelDemo.vue"),
      },
      {
        path: "/invalidstate",
        name: "invalidstate",
        component: () => import("../../components/InvalidStateDemo.vue"),
      },
      {
        path: "/button",
        name: "button",
        component: () => import("../../components/ButtonDemo.vue"),
      },
      {
        path: "/table",
        name: "table",
        component: () => import("../../components/TableDemo.vue"),
      },
      {
        path: "/list",
        name: "list",
        component: () => import("../../components/ListDemo.vue"),
      },
      {
        path: "/tree",
        name: "tree",
        component: () => import("../../components/TreeDemo.vue"),
      },
      {
        path: "/panel",
        name: "panel",
        component: () => import("../../components/PanelsDemo.vue"),
      },
      {
        path: "/overlay",
        name: "overlay",
        component: () => import("../../components/OverlayDemo.vue"),
      },
      {
        path: "/media",
        name: "media",
        component: () => import("../../components/MediaDemo.vue"),
      },
      {
        path: "/menu",
        component: () => import("../../components/MenuDemo.vue"),
        children: [
          {
            path: "",
            component: () => import("../../components/menu/PersonalDemo.vue"),
          },
          {
            path: "/menu/seat",
            component: () => import("../../components/menu/SeatDemo.vue"),
          },
          {
            path: "/menu/payment",
            component: () => import("../../components/menu/PaymentDemo.vue"),
          },
          {
            path: "/menu/confirmation",
            component: () =>
              import("../../components/menu/ConfirmationDemo.vue"),
          },
        ],
      },
      {
        path: "/messages",
        name: "messages",
        component: () => import("../../components/MessagesDemo.vue"),
      },
      {
        path: "/file",
        name: "file",
        component: () => import("../../components/FileDemo.vue"),
      },
      {
        path: "/chart",
        name: "chart",
        component: () => import("../../components/ChartDemo.vue"),
      },
      {
        path: "/misc",
        name: "misc",
        component: () => import("../../components/MiscDemo.vue"),
      },
      {
        path: "/crud",
        name: "crud",
        component: () => import("../../pages/CrudDemo.vue"),
      },
      {
        path: "/timeline",
        name: "timeline",
        component: () => import("../../pages/TimelineDemo.vue"),
      },
      {
        path: "/empty",
        name: "empty",
        component: () => import("../../components/EmptyPage.vue"),
      },
      {
        path: "/documentation",
        name: "documentation",
        component: () => import("../../components/Documentation.vue"),
      },
      {
        path: "/blocks",
        name: "blocks",
        component: () => import("../../components/BlocksDemo.vue"),
      },
      {
        path: "/icons",
        name: "icons",
        component: () => import("../../components/IconsDemo.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../../pages/Login.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    component: () => import("../../pages/LandingDemo.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("../../pages/Error.vue"),
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () => import("../../pages/NotFound.vue"),
  },
  {
    path: "/access",
    name: "access",
    component: () => import("../../pages/Access.vue"),
  },
];

const index = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default index;
