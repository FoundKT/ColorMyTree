const userId = "";
const messageCount = 1000;
const reqDelay = 110; //ms
const cardInfos = {
    title: 'test',
    text: 'hello',
    private: false
};

const { ColorMyTree } = require('./colormytree');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

(async () => {

    const client = new ColorMyTree();

    console.log('[!] Start');

    for (var i = 0; i < messageCount; i++) {

        const req = await client.post(userId, cardInfos['title'], cardInfos['text'], cardInfos['private']);

        if (req.success) {

            console.log(`[${i + 1}/${messageCount}] Post success`);

        } else {

            console.log(`[${i + 1}/${messageCount}] Post failure`);

        };

        await delay(reqDelay);

    };

})();