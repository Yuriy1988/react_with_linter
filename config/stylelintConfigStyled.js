'use strict';

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  syntax: 'scss',
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['/global/'],
      },
    ],
    'no-eol-whitespace': [
      true,
      {
        ignore: ['empty-lines'],
      },
    ],
  },
};
