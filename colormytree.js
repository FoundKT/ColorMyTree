const axios = require('axios');

class ColorMyTree {

    constructor() {

    };

    async post(victimKey, cardTitle, cardText, cardPrivate) {

        try {

            const req = await axios(this.genPostConfig(victimKey, cardTitle, cardText, cardPrivate));

            if (req.response) return {
                success: false
            };

            return {
                success: true,
                cardId: req['data'].id,
                cardTitle: req['data'].cardNickname,
                cardText: req['data'].cardMessage,
                cardTextDecrypted: req['data'].cardMessageDecrypted,
                createdAt: req['data'].createdAt,
                isPrivateMessage: req['data'].isPrivateMessage
            };

        } catch (e) {

            return {
                success: false
            };

        };

    };

    genPostConfig(victimKey, cardTitle, cardText, cardPrivate) {

        const config = {
            method: 'POST',
            url: `https://api.colormytree.me/users/${victimKey}/trees/2023/gifts`,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
                'Content-Type': 'application/json-patch+json'
            },
            data: {
                cardMessage: cardText,
                cardNickname: cardTitle,
                isPrivateMessage: cardPrivate,
                ornamentId: "2023140000" // 값 어디서 나오는 건지 찾아야함
            }
        };

        return config;

    };

};

exports.ColorMyTree = ColorMyTree;