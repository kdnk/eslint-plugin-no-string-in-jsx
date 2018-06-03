'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../src/rules/no-string-in-jsx')

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
}

const tester = new RuleTester({ parserOptions })

tester.run('no-string-in-jsx', rule, {
  valid: [
    { code: '<div>{render()}</div>' },
    {
      code: `<div>
            <div onClick={this.toggleIsOpen}>{render()}</div>
            {isOpen ? children[1] : null}
          </div>
        `,
    },
  ],
  invalid: [
    { code: '<div>aaa</div>', errors: ['Do not use string in JSX directly.'] },
    {
      code: '<div>"aaaa"</div>',
      errors: ['Do not use string in JSX directly.'],
    },
  ],
})
