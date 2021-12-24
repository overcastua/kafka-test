const consume = async (kafka, topic, clientId) => {
    const consumer = kafka.consumer({ groupId: clientId })

    // first, we wait for the client to connect and subscribe to the given topic
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        // this function is called every time the consumer gets a new message
        eachMessage: ({ message }) => {
            // here, we just log the message to the standard output
            console.log(`received message: ${message.value}`)
        },
    })
}

module.exports = consume
