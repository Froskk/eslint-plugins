module.exports = {
  meta: {
    docs: {
      description: 'Disallow strings as the icon prop type in Iconify React components',
    },
    schema: [],
    messages: {
      unexpected: 'Unexpected error in no-icon-string',
    },
    type: 'suggestion',
  },
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === 'Icon') {
          const iconAttrNode = node.attributes.find((attr) => attr.name.name === 'icon');

          if (iconAttrNode.value.type === 'Literal') {
            context.report({
              node,
              message:
                'Using a string to specify the icon results in online-only usage. To bundle locally, import the icon directly from @iconify/icons-@provider',
            });
          }
        }
      },
    };
  },
};
