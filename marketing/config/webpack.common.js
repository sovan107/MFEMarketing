module.exports = {
    module: {
        rules: [
            // Why loader : To tell webpack to process some different files as we start to import them onto the project
            {
                // Why Babel : Babel is going to be in charge of processing all of our code, from the ES 2015, '16, '17, '18, '19, '20 and so on, and turn it into regular 
                // ES five code that can be easily executed inside of a typical browser.
                test: /\.m?js$/,  // when we import a file with ext .mjs or .js it should be processed by Babel
                exclude : /node_module/,  // DO NOT run Babel on any files in node_modules dir
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // preset-react -> process all .jsx tags ( react related);
                                                                               // preset-env -> converts all kind of codes (ES2025,16,17...) into ES5
                        plugins: ['@babel/plugin-transform-runtime'], // add codes to enable features like async await and other stuffs to work inside the browser
                    },
                },
            },
        ]
    }
}



// @babel/plugin-transform-runtime is a Babel plugin that serves several important purposes in JavaScript/React applications:

// 1. Helper Function Reuse:
//    - Instead of injecting helper functions (like _extends or _classCallCheck) in every file where they're needed, this plugin references them from a single runtime package.
//    - This significantly reduces the size of your compiled code by preventing duplication of helper functions.

// 2. Built-in Features and Polyfills:
//    - Provides a way to use built-in features (like Promise, Set, Map) and regenerator-runtime for generators/async functions without polluting the global scope.
//    - Instead of modifying the global objects, it imports these features from @babel/runtime.

// 3. Benefits:
//    - Reduces bundle size by preventing duplicate helper code
//    - Keeps the global scope clean by avoiding polyfill pollution
//    - Enables proper sharing of Babel helper functions across your entire codebase


// @babel-react
// Main Features:
//    - Transforms JSX syntax into regular JavaScript
//    - Handles React.createElement calls
//    - Supports the new JSX transform introduced in React 17
//    - Optimizes development debugging with proper source mapping
// Key Benefits:
// - Automatically transforms JSX into JavaScript
// - Enables use of all React features
// - Provides development-time debugging capabilities
// - Supports the latest React features and optimizations

// Note: When using with React 17+ and the new JSX transform, setting "runtime": "automatic" is recommended as it:
// - Reduces bundle size
// - No longer requires importing React in files just for JSX
// - Enables better optimizations

//@babel/preset-env
// This preset is crucial for modern JavaScript development as it automatically determines the plugins and polyfills 
// needed based on your target environments, ensuring optimal bundle size and browser compatibility.