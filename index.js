const { ColorMyTree } = require('./colormytree');

(async () => {

    const client = new ColorMyTree();

    console.log(await client.post('01HGJXNCJSRP6Z4FBXJA43G8PF', 'test', 'hello', false));

})();