const rules = require('../../../lib').rules;
const RuleTester = require('eslint').RuleTester;

const ERROR_MSG_NOT_STYLED = `Using a string to specify the icon results in online-only usage. To bundle locally, import the icon directly from @iconify/icons-@provider
  
  https://docs.iconify.design/icon-components/react/offline.html`;

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const rule = rules['no-icon-string'];

ruleTester.run('no-icon-string', rule, {
  valid: [
    {
      code: `
        const Component = <Icon icon={home} />;
      `,
    },
  ],
  invalid: [
    {
      code: `const Component = <Icon icon='mdi:home' />;`,
      errors: [
        {
          message: ERROR_MSG_NOT_STYLED,
          type: 'JSXOpeningElement',
        },
      ],
    },
  ],
});
