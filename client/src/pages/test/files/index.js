let context = require.context('./', false);
console.log('context:', context, context.keys().filter(key => key.match(/js/)));

export default context.keys().filter(key => key.match(/js/)).map(context)