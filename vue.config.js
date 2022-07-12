module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sakai-vue" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "/@/": require("path").resolve("src/")
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
};
