This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

npm install react-app-rewired@2.0.2-next.0 babel-plugin-import --save

原则
1 确保数据类型是值类型
2 如果是引用类型 确保地址不变（对象地址变就不等） ，同时不应当有深层次的变化（嵌套数组 嵌套对象）

组建复合 而非组建继承
composition.js

高阶组件 
 提高组建复用率 首先想到的就是抽离相同逻辑 在react中就有了HOC （Higer_order_components）的概念，
 高阶组件也是一个组建，但是他返回的是另外一个组建，产生新的组建可以对属性进行包装，也可以重写部分生命周期
 <!-- 也是一个函数 接收一个组建 返回一个组建-->

 高阶组件的链式调用 
 npm install --save-dev babel-plugin-transform-decorators-legacy
<!-- //添加装饰器的能力 -->
 config = injectBabelPlugin([
     '@babel/plugin-proposal-decorators',{'legacy':true}
 ],config)


组件通信上下文
vuejs privide & inject 模式的来源 --context

这个模式提供俩个jiaose  provider consumer 
Provider在外层组建 内部需要数据的 就用Consumer来读取

 const FormProvider = React.createProvider();

 <FormProvider value={store}>
    <Comp >  //子组件获取store.xxx
 </FormProvider>