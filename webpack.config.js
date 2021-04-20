module.exports = {
     module: {
          rules: [
               {
                    test: "/css$/",
                    use: [
                         {
                              loader: "css-loader",
                              options: {
                                   modules: true,
                                   localIdentityName: "[name]",
                              },
                         },
                    ],
               },
          ],
     },
};
