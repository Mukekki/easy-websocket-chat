const WebSocket = require('ws');

const wsServer = new WebSocket.Server(
    {
        port: 3000
    }
)
let messages = []

wsServer.on('connection', ws => {
    ws.send(JSON.stringify(
            {
                type: 'connection',
                messages: messages
            }
        )
    )

    ws.on('message', ms => {
        const message = JSON.parse(ms)

        if (message.message === 'хуй') {
            for (let i = 0; i < 10; i++) {
                wsServer.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        setTimeout(() => {
                            client.send(
                                JSON.stringify({
                                    type: 'message',
                                    message: 
                                        {
                                            name: 'Admin',
                                            message: 'Сам ты хуй, чёрт эбаный'
                                        }
                                })
                            )
                        }, i * 1000 * Math.random())
                    }
                });
            }
            return
        }

        if (message.message === 'clear') {
            messages = []
            wsServer.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'clear',
                        message: null
                    }))
                }
            });
            return
        }

        messages.push(message)

        wsServer.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'message',
                    message: message
                }))
            }
        });
    })
})