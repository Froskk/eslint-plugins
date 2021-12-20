# eslint-plugin-iconify-react

Disallow strings as the icon prop type in Iconify React components

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-iconify-react`:

```sh
npm install eslint-plugin-iconify-react --save-dev
```

## Usage

Add `iconify-react` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["iconify-react"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-icon-string/rule-name": "warn"
  }
}
```

## Supported Rules

- `no-icon-string`
