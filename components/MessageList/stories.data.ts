import { Message } from "../../models/Message";

export const Messages: Message[] = [
  {
    user: {
      id: "1",
      username: "John",
    },
    message:
      "Hello World, This is a super long message. It should wrap around the screen. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long. Long.",
  },
  {
    user: {
      id: "2",
      username: "Tyler",
    },
    message: "Lets relax there buddy",
  },
  {
    user: {
      id: "1",
      username: "John",
    },
    message: "Got a lot to say. Cant help it.",
  },
  ,
  {
    user: {
      id: "2",
      username: "Tyler",
    },
    message: "Calm down bro.",
  },
] as Message[];
