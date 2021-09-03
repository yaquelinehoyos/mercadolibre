module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                        @import "./src/assets/CSS/styles.scss";
                    `,
      },
    },
  },
};
