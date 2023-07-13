const traverse = require('@babel/traverse').default


module.exports = function (content, map, meta) {
  content.replace(/console\.log\(.*\);?/g, '')
  return 
}