1. Install

  ```
  npm install --save-dev jest
  npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env
  ```
  add package.json

  ```
  {
    "scripts": {
      "test": "jest"
    }
  }
  ```

  add .babelrc
  ```
  {
    "presets": ["env", "react"]
  }
  ```

2. create js file

  ```js
  function sum(a, b) {
    return a + b;
  }
  export default sum;
  ```

  ```js
  import sum from './index'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

3. start test

  ```
  npm test
  ```