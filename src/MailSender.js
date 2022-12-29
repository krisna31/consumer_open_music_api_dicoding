const nodemailer = require("nodemailer");
const config = require("./utils/config");

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: config.nodemailer.smtpHost,
      port: config.nodemailer.smtpPort,
      auth: {
        user: config.nodemailer.smtpUser,
        pass: config.nodemailer.smtpPassword,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: "Open Music Apps",
      to: targetEmail,
      subject: "Ekspor Playlist",
      text: "Terlampir hasil dari ekspor playlist",
      attachments: [
        {
          filename: "playlist.json",
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
