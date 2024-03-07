# @rjsf/mui dark theme

This repo is a minimal reproduction to demonstrate the issues when using MUI's dark theme (https://github.com/rjsf-team/react-jsonschema-form/issues/4118).
There might be more issues, which should be easy to find by displaying all types.

Light:

<img width="1182" alt="Screenshot 2024-03-06 at 7 10 43 PM" src="https://github.com/markmssd/rjsf-mui-dark-theme/assets/5899024/41308c69-2137-4f97-b1c7-708e6ee5979b">


Dark:

<img width="1179" alt="Screenshot 2024-03-06 at 7 10 50 PM" src="https://github.com/markmssd/rjsf-mui-dark-theme/assets/5899024/07240a2a-5bcc-44a8-b1c2-ee6abb525cf4">


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
