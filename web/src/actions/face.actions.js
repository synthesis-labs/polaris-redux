import { FACE as type } from "./types";
import socket from "../services/socket";

export const SEARCH = "SEARCH";
export const MATCHED = "MATCHED";

export const searchAction = imageBase64Str => {
  var event = {
    type,
    token: "",
    action: SEARCH,
    data: {
      imageBase64Str: imageBase64Str
    }
  };

  socket.send(event.type, event.action, event.token, event.data);

  return event;
};
