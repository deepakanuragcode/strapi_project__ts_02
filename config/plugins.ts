// // export default () => ({});

// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: env("SMTP_HOST", "smtp.example.com"),
//         port: env("SMTP_PORT", 587),
//         auth: {
//           user: env("SMTP_USERNAME"),
//           pass: env("SMTP_PASSWORD"),
//         },
//         secure: false,
//         // ... any custom nodemailer options
//       },
//       settings: {
//         defaultFrom: "deepak.anurag@rhombuz.io",
//         defaultReplyTo: "deepak.anurag@rhombuz.io",
//       },
//     },
//   },
//   // ...
// });

// export default ({ env }) => ({
//   provider: "nodemailer",
//   providerOptions: {
//     host: env("SMTP_HOST"),
//     port: env.int("SMTP_PORT", 587),
//     secure: true,
//     auth: {
//       user: env("SMTP_USERNAME"),
//       pass: env("SMTP_PASSWORD"),
//     },
//   },
//   settings: {
//     defaultFrom: env("SMTP_FROM"),
//     defaultReplyTo: env("SMTP_REPLY_TO"),
//   },
// });

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

export default ({ env }) => ({
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        key: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"),
        // Fix: Use the variable from .env, if it's missing, default to EU since that's your region
        url: env("MAILGUN_URL", "https://api.mailgun.net"),
      },
      settings: {
        // Fix: Use the variables from .env instead of hardcoding
        defaultFrom: env("MAILGUN_DEFAULT_FROM"),
        defaultReplyTo: env("MAILGUN_DEFAULT_REPLY_TO"),
      },
    },
  },
});

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

// Path:
// export default ({ env }) => ({
//   email: {
//     config: {
//       provider: "strapi-provider-email-resend",
//       // provider: "strapi-provider-email-resend-strapi",
//       providerOptions: {
//         apiKey: env("RESEND_API_KEY"), // Required
//       },
//       settings: {
//         defaultFrom: env("RESEND_DEFAULT_EMAIL"),
//         defaultReplyTo: env("RESEND_USER_EMAIL"),
//         // defaultFrom: "deepak.anurag@rhombuz.io",
//         // defaultReplyTo: "deepak.anurag@rhombuz.io",
//       },
//     },
//   },
// });
