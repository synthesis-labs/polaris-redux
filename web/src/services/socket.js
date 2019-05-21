import store from "../store";

const endpoint = "ws://127.0.0.1:8080/ws";

let socket;

const init = () => {
  socket = new WebSocket(endpoint);

  socket.onmessage = event => {
    const polarisEvent = JSON.parse(event.data);
    const reduxEvent = {
      type: polarisEvent.resource,
      action: polarisEvent.action,
      token: polarisEvent.token,
      data: polarisEvent.data
    }
    store.dispatch(reduxEvent);
  };

  socket.onclose = event => {
    console.debug("Websocket disconnected, reconnecting...");
    setTimeout(() => {
      init();
    }, 1000);
  };

  socket.onopen = event => {
    console.debug("Websocket opened");
  };

  socket.onerror = error => {
    console.error(error);
  };
};

const send = (resource, action, token, data) => {
  const polarisEvent = {
    resource,
    action,
    token,
    data
  }

  if (socket.readyState !== 1) {
    setTimeout(() => send(polarisEvent), 10);
    return;
  }

  socket.send(JSON.stringify(polarisEvent));
};

export default {
  init: init,
  send: send
};
