import consumer from "channels/consumer"

consumer.subscriptions.create("WelcomeChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Connected WelcomeChannel------')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('Received data from welcomechannel: ', data)
  }
});
