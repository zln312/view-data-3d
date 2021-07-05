/*
 * @Author: Zhao.Li.Nai
 * @Date: 2021-07-05 14:15:11
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-07-05 14:34:36
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
