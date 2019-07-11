let context = require.context('./', false);
console.log('context: ', context);

export default context.keys().map(context)