require("dotenv").config();
const amqp = require("amqplib");
const config = require("./utils/config");
const MailSender = require("./MailSender");
const Listener = require("./listener");
const PlaylistsService = require("./PlaylistsService");
const PlaylistSongsService = require("./PlaylistsSongsService");

const init = async () => {
  const mailSender = new MailSender();
  const playlistsService = new PlaylistsService();
  const playlistSongsService = new PlaylistSongsService();
  const listener = new Listener(playlistsService, playlistSongsService, mailSender);

  const connection = await amqp.connect(config.rabbitMq.server);
  const channel = await connection.createChannel();

  await channel.assertQueue("export:playlists", {
    durable: true,
  });

  channel.consume("export:playlists", listener.listen, { noAck: true });
};

init();
