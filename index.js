const { Kafka } = require("kafkajs")
const produce = require("./kafka-producer")
const consume = require("./kafka-consumer")

// the client ID lets kafka know who's producing the messages
const clientId = "my-app"
// we can define the list of brokers in the cluster
const brokers = ["localhost:29092"]
// this is the topic to which we want to write messages
const topic = "message-log"

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers })
// call the `produce` function and log an error if it occurs
produce(kafka, topic).catch((err) => {
    console.error("error in producer: ", err)
})

// start the consumer, and log any errors
consume(kafka, topic, clientId).catch((err) => {
    console.error("error in consumer: ", err)
})
