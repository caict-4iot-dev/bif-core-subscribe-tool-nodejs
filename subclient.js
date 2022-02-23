const WebSocketClient = require('websocket').client
const client = new WebSocketClient()
const protoOverlay = require('./lib/protobuf/overlay_pb')
const common = require('./lib/protobuf/common_pb')
const chain = require('./lib/protobuf/chain_pb')
const url = 'ws://test-bif-core.xinghuo.space:7053'
const address = 'did:bid:efHmvWpqfVzv5rLNSMrhEdNegLz9AcnS'

client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString())
})

client.on('connect', function (connection) {
    console.log('WebSocket client connected')
    connection.on('error', function (error) {
        console.log('Connection Error: ' + error.toString())
    })

    connection.on('close', function () {
        console.log('Connection Closed')
    })

    connection.on('message', function (message) {
        // 解析接收的数据
        var buf = new Uint8Array(message.binaryData)
        const wsMessage = common.WsMessage.deserializeBinary(buf)
        const type = wsMessage.getType()
        console.log('type', type)
        // 接收hello
        receiveHello(wsMessage, type)
        // 接收区块链实时推送的消息-区块信息
        receiveLedgerTxs(wsMessage, type)
        // 接收区块链实时推送的消息-交易信息
        receiveTxEnvStore(wsMessage, type)

    })

    function receiveHello (wsMessage, type) {
        const typeHelloValue = protoOverlay.ChainMessageType.CHAIN_HELLO
        if (type == typeHelloValue) {
            let datas = new Uint8Array(wsMessage.getData())
            const chain_status = protoOverlay.ChainStatus.deserializeBinary(datas)
            console.log('self_addr', chain_status.toObject())
        }
    }

    function receiveLedgerTxs (wsMessage, type) {
        const typeLedgerTxsValue = protoOverlay.ChainMessageType.CHAIN_LEDGER_TXS
        if (type == typeLedgerTxsValue) {
            let datass = new Uint8Array(wsMessage.getData())
            const envStore = protoOverlay.LedgerTxs.deserializeBinary(datass)
            console.log('header size:', envStore.getLedgerLength())
        }
    }

    function receiveTxEnvStore (wsMessage, type) {
        const typeTxEnvStoreValue = protoOverlay.ChainMessageType.CHAIN_TX_ENV_STORE
        if (type == typeTxEnvStoreValue) {
            let datasss = new Uint8Array(wsMessage.getData())
            const envStores = chain.TransactionEnvStore.deserializeBinary(datasss)
            const buf = Buffer.from(envStores.getHash(), 'hex')
            const hash = buf.toString('hex')
            console.log('OnChainTxEnvStore hash:', hash)
        }
    }

    // 发送hello
    sendHello(connection)
    // 订阅服务发送
    sendSubscribe(connection,address)
    // 心跳服务
    function Heartbeat () {
        if (connection.connected) {
            let pingNum = protoOverlay.OVERLAY_MESSAGE_TYPE.OVERLAY_MSGTYPE_PING
            const ping = new common.Ping()
            ping.setNonce(new Date().getTime() * 1000)
            let protoMes = new common.WsMessage()
            protoMes.setType(pingNum)
            protoMes.setRequest(false)
            protoMes.setSequence('3')
            if (ping !== null) {
                protoMes.setData(Buffer.from(ping.serializeBinary().buffer))
            }
            connection.send(Buffer.from(protoMes.serializeBinary().buffer))
        }
    }
    setInterval(Heartbeat, 5000)

})

function sendHello (connection) {
    if (connection.connected) {
        let chainHelloNumber = protoOverlay.ChainMessageType.CHAIN_HELLO
        let setTime = new protoOverlay.ChainHello()
        setTime.setTimestamp(new Date().getTime())
        let protoMes = new common.WsMessage()
        protoMes.setType(chainHelloNumber)
        protoMes.setRequest(true)
        protoMes.setSequence('1')
        if (setTime !== null) {
            protoMes.setData(Buffer.from(setTime.serializeBinary().buffer))
        }
        let seri = protoMes.serializeBinary()
        connection.send(Buffer.from(seri.buffer))
    }
}

function sendSubscribe (connection,address) {
    let srcAddstress = [address]
    if (connection.connected) {
        let chainSubscribeNumber = protoOverlay.ChainMessageType.CHAIN_SUBSCRIBE_TX
        let address = new protoOverlay.ChainSubscribeTx()
        address.setAddressList(srcAddstress)
        let protoMes = new common.WsMessage()
        protoMes.setType(chainSubscribeNumber)
        protoMes.setRequest(true)
        protoMes.setSequence('2')
        if (address !== null) {
            protoMes.setData(Buffer.from(address.serializeBinary().buffer))
        }
        let subscribe = protoMes.serializeBinary()
        connection.send(Buffer.from(subscribe.buffer))
    }
}

client.connect(url)
