<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />
    <div class="layout-sidebar" @click="onSidebarClick">
      <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <router-view />
      </div>
      <AppFooter />
    </div>

    <AppConfig :layout-mode="layoutMode" @layout-change="onLayoutChange" />
    <transition name="layout-mask">
      <div
        v-if="mobileMenuActive"
        class="layout-mask p-component-overlay"
      ></div>
    </transition>
  </div>
</template>

<script>
import AppTopBar from "./AppTopbar.vue";
import AppMenu from "./AppMenu.vue";
import AppConfig from "./AppConfig.vue";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    AppTopBar: AppTopBar,
    AppMenu: AppMenu,
    AppConfig: AppConfig,
    AppFooter: AppFooter,
  },
  emits: ["change-theme"],
  setup() {
    let menu = [
      {
        label: "Home",
        items: [
          {
            label: "Dashboard",
            icon: "pi pi-fw pi-home",
            to: "/",
          },
          {
            label: "Giám sát hệ thống",
            icon: "pi pi-fw pi-desktop",
            to: "/dashboard",
          },
        ],
      },

      {
        label: "QUẢN LÝ",
        items: [
          {
            label: "Vai trò",
            icon: "pi pi-fw pi-user",
            to: "/role",
          },
          {
            label: "Người dùng",
            icon: "pi pi-fw pi-user",
            to: "/user",
          },

          {
            label: "Khách hàng",
            icon: "pi pi-fw pi-user",
            to: "/mng",
          },
          {
            label: "Yêu Cầu Thuê Máy",
            icon: "pi pi-fw pi-shopping-cart",
            to: "/request-rent",
          },
          {
            label: "Yêu Cầu Trả Máy",
            icon: "pi pi-fw pi-shopping-cart",
            to: "/request-back",
          },
          {
            label: "Cài Đặt Thiết Bị",
            icon: "pi pi-fw pi-desktop",
            to: "/setting-device",
          },
          {
            label: "Quản Lý Thiết Bị",
            icon: "pi pi-fw pi-desktop",
            to: "/mng-device",
          },
          {
            label: "Đơn Vị Lắp Đặt & Bảo Trì",
            icon: "pi pi-fw pi-desktop",
            to: "/unit-fix",
          },
          {
            label: "Hóa Đơn",
            icon: "pi pi-fw pi-desktop",
            to: "/bill",
          },
        ],
      },
      {
        label: "Giám sát",
        items: [{ label: "Chỉ số nước định kỳ", to: "/periodicwater" }],
      },
      {
        label: "UI Components",
        icon: "pi pi-fw pi-sitemap",
        items: [
          {
            label: "Form Layout",
            icon: "pi pi-fw pi-id-card",
            to: "/formlayout",
          },
          { label: "Input", icon: "pi pi-fw pi-check-square", to: "/input" },
          {
            label: "Float Label",
            icon: "pi pi-fw pi-bookmark",
            to: "/floatlabel",
          },
          {
            label: "Invalid State",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/invalidstate",
          },
          { label: "Button", icon: "pi pi-fw pi-mobile", to: "/button" },
          { label: "Table", icon: "pi pi-fw pi-table", to: "/table" },
          { label: "List", icon: "pi pi-fw pi-list", to: "/list" },
          { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/tree" },
          { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/panel" },
          { label: "Overlay", icon: "pi pi-fw pi-clone", to: "/overlay" },
          { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
          { label: "Menu", icon: "pi pi-fw pi-bars", to: "/menu" },
          { label: "Message", icon: "pi pi-fw pi-comment", to: "/messages" },
          { label: "File", icon: "pi pi-fw pi-file", to: "/file" },
          { label: "Chart", icon: "pi pi-fw pi-chart-bar", to: "/chart" },
          { label: "Misc", icon: "pi pi-fw pi-circle-off", to: "/misc" },
        ],
      },
      {
        label: "PrimeBlocks",
        items: [
          {
            label: "Free Blocks",
            icon: "pi pi-fw pi-eye",
            to: "/blocks",
            badge: "NEW",
          },
          {
            label: "All Blocks",
            icon: "pi pi-fw pi-globe",
            url: "https://www.primefaces.org/primeblocks-vue",
            target: "_blank",
          },
        ],
      },
      {
        label: "Utilities",
        items: [
          { label: "PrimeIcons", icon: "pi pi-fw pi-prime", to: "/icons" },
          {
            label: "PrimeFlex",
            icon: "pi pi-fw pi-desktop",
            url: "https://www.primefaces.org/primeflex/",
            target: "_blank",
          },
        ],
      },
      {
        label: "Pages",
        icon: "pi pi-fw pi-clone",
        items: [
          { label: "Crud", icon: "pi pi-fw pi-user-edit", to: "/crud" },
          {
            label: "Timeline",
            icon: "pi pi-fw pi-calendar",
            to: "/timeline",
          },
          { label: "Landing", icon: "pi pi-fw pi-globe", to: "/landing" },
          { label: "Login", icon: "pi pi-fw pi-sign-in", to: "/login" },
          { label: "Error", icon: "pi pi-fw pi-times-circle", to: "/error" },
          {
            label: "Not Found",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/notfound",
          },
          { label: "Access Denied", icon: "pi pi-fw pi-lock", to: "/access" },
          { label: "Empty", icon: "pi pi-fw pi-circle-off", to: "/empty" },
        ],
      },
      {
        label: "Menu Hierarchy",
        icon: "pi pi-fw pi-search",
        items: [
          {
            label: "Submenu 1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 1.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "Submenu 1.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.2.2", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
          {
            label: "Submenu 2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 2.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 2.1.3", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "Submenu 2.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 2.2.2", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Get Started",
        items: [
          {
            label: "Documentation",
            icon: "pi pi-fw pi-question",
            command: () => {
              window.location = "#/documentation";
            },
          },
          {
            label: "View Source",
            icon: "pi pi-fw pi-search",
            command: () => {
              window.location = "https://github.com/primefaces/sakai-vue";
            },
          },
        ],
      },
    ];
    return {
      menu,
    };
  },
  data() {
    return {
      layoutMode: "static",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
    };
  },
  computed: {
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "layout-static-sidebar-inactive":
            this.staticMenuInactive && this.layoutMode === "static",
          "layout-overlay-sidebar-active":
            this.overlayMenuActive && this.layoutMode === "overlay",
          "layout-mobile-sidebar-active": this.mobileMenuActive,
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false,
        },
      ];
    },
    logo() {
      return this.$appState.darkTheme
        ? "images/logo-white.svg"
        : "images/logo.svg";
    },
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    },
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === "overlay") {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          }

          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === "static") {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    isDesktop() {
      return window.innerWidth >= 992;
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === "static") return !this.staticMenuInactive;
        else if (this.layoutMode === "overlay") return this.overlayMenuActive;
      }

      return true;
    },
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
