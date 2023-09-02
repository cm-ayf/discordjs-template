import { Client, Events } from "discord.js";
import { onMessage } from "./handler";

const client = new Client({
  intents: [],
});

client.on(Events.ClientReady, (client) => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on(Events.MessageCreate, onMessage);

client.login();
