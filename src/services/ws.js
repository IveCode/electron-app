const setupWebsocket = (url) =>
    new Promise((resolve) => {
        const webSocket = new WebSocket(url);

        const receive = (onMessageCb) => {
            webSocket.onmessage = (event) => onMessageCb(event.data);
        };

        const send = (payload) =>
            webSocket.send(payload);

        webSocket.onopen = () => resolve({ send, receive });
    });


export default setupWebsocket;