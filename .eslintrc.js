module.exports = {
   env: {//环境变量
      browser: true,
      commonjs: true,
      es6: true,
      node: true
   },
   extends: 'eslint:recommended',//enables a subset of core rules that report common problems, which have a check mark √ on the rules page.
   parserOptions: {//想要支持的javascript语言
      //ecmaVersion: 6,//specify the version of ECMAScript syntax you want to use
      sourceType: 'module',//set to "script" (default) or "module" if your code is in ECMAScript modules.
      // ecmaFeatures: {
      //    globalReturn:'',
      //    impliedStrict :'',
      //    jsx : ''
      // }
   },
   globals: {//指定全局变量

   },
   rules: {
      'comma-dangle': ['error', 'always-multiline'],//尾部逗号检测：always-multiline requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }
      indent: ['error', 3],//缩进：This rule enforces a consistent indentation style. The default style is 4 spaces.
      'linebreak-style': ['error', 'windows'],//行结束检测：unix：enforces the usage of Unix line endings: \n for LF.; windows:enforces the usage of Windows line endings: \r\n for CRLF.
      quotes: ['error', 'single'],//使用引号（单引号''，双引号""，``）
      semi: ['error', 'always'],//每个声明的尾部分号的检测
      'no-unused-vars': ['warn'],//不允许未使用的变量
      'no-console': 0//不允许使用console
   }
}