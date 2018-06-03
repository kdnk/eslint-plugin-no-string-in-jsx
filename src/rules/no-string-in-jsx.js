'use strict'

module.exports = function(context) {
  return {
    JSXText: function(node) {
      if (node.value.trim()) {
        const message = 'Do not use string in JSX directly.'
        context.report({ node: node, message: message })
      }
    },
  }
}

module.exports.schema = []
