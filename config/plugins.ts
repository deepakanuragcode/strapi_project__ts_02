// export default () => ({});

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: true,
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "deepak.anurag@rhombuz.io",
        defaultReplyTo: "deepak.anurag@rhombuz.io",
      },
    },
  },
  // ...
});

// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: env("SMTP_HOST"),
//         port: env.int("SMTP_PORT"),
//         secure: true,
//         auth: {
//           user: env("SMTP_USERNAME"),
//           pass: env("SMTP_PASSWORD"),
//         },
//       },
//       settings: {
//         defaultFrom: env("SMTP_FROM"),
//       },
//     },
//   },
// });
