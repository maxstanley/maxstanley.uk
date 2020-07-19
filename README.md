# maxstanley.uk
The source for maxstanley.uk

## Creating a React App

```bash
npx create-react-app app --template typescript
rm src/*.test.tsx public/*.png public/*.ico src/logo.svg src/setupTests.ts
npm i
npm i -D webpack webpack-cli typescript css-loader html-webpack-plugin @types/jest @types/node @types/react @types/react-dom ts-loader eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
npx eslint --init
# Check Syntax, find problems, enforce code style
# JavaScript modules (import/export)
# React
# Typescript / Yes
# Browser
# Use a popular style guide
# Airbnb (you can choose)
# JavaScript (you can choose)
# Yes
```

### Files to change

Just look at my files as they will change....

#### `tsconfig.json`

```json
"target": "es6",
"outDir": "./dist",
"preserveConstEnums": true,
"removeComments": true,
"sourceMap": true,
```

#### `webpack.config.js`

I got my base from [https://app.pluralsight.com/guides/typescript-react-getting-started](here).

You will need to add `mode: "production",` as one of the attributes in `module.exports`

The module will need to look like this...

```js
  module: {
    rules: [
      {
        test: /\.tsx?$/,
		loader: "ts-loader",
		options: {
		  compilerOptions: {
		    noEmit: false
		  }
	    }
	  },
	  {
        test: /\.css$/i,
	    use: ["style-loader", "css-loader"],
	  }
	]
  },
```

As I am deploying to a /docs folder for github, I need to specify where I want webpack to build to.

```js
  output: {
    filename: "bundle.js",
	path: path.resolve(__dirname, 'docs')
  },
```

#### `package.json`

Change the build script to `"build": "webpack; cp ./public/index.html ./dist/",`

And add to the scripts `"lint": "eslint \"src/**/*.{js,ts,tsx}\" --fix"`

My react-scripts also required me to use `"webpack": "4.42.0"` instead of the latest in the dev dependency.

#### `src/index.tsx`

You can remove all of the boilerplate between the first set of `<div>` tags (all of the header stuff). You can also remove the logo import.

