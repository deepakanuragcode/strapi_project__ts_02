// // export default () => ({});

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
        secure: false,
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

// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: "mailgun",
//       providerOptions: {
//         key: env("MAILGUN_API_KEY"), // Required
//         domain: env("MAILGUN_DOMAIN"), // Required
//         url: env("MAILGUN_URL", "https://api.mailgun.net"), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
//       },
//       settings: {
//         defaultFrom: "deepak.anurag@rhombuz.io",
//         defaultReplyTo: "deepak.anurag@rhombuz.io",
//       },
//     },
//   },
//   // ...
// });

// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "strapi-provider-email-resend-strapi",
//       providerOptions: {
//         apiKey: env("RESEND_API_KEY"), // Required
//       },
//       settings: {
//         defaultFrom: "deepak.anurag@rhombuz.io", // env('RESEND_DEFAULT_FROM')
//         defaultReplyTo: "deepak.anurag@rhombuz.io", // env('RESEND_DEFAULT_FROM')
//       },
//     },
//   },
// });
