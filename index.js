const { ColorMyTree } = require('./colormytree');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

(async () => {

    const client = new ColorMyTree();

    for (var i = 0; i < 100; i++) {

        console.log((await client.post('', 'test', 'hello', false)).data);

        await delay(110);

    };

})();