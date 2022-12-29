/* eslint-disable linebreak-style */
const config = {
  nodemailer: {
    smtpHost: process.env.MAIL_HOST,
    smtpPort: process.env.MAIL_PORT,
    smtpUser: process.env.MAIL_ADDRESS,
    smtpPassword: process.env.MAIL_PASSWORD,
  },
  rabbitMq: {
    server: process.env.RABBITMQ_SERVER,
  },
};

module.exports = config;
