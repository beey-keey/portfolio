module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/portfolio/" // Replace 'repository-name' with your GitHub repository name
      : "/",
  transpileDependencies: ["vue-clamp", "resize-detector"], // Add any additional dependencies to transpile if needed
};
