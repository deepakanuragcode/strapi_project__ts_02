// // import type { Core } from '@strapi/strapi';

// export default {
//   /**
//    * An asynchronous register function that runs before
//    * your application is initialized.
//    *
//    * This gives you an opportunity to extend code.
//    */
//   register(/* { strapi }: { strapi: Core.Strapi } */) {},

//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
// };

// src/index.ts
export default {
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["admin::user"],
      async afterCreate(event) {
        const { result } = event;
        if (result.registrationToken) {
          await strapi
            .plugin("email")
            .service("email")
            .send({
              to: result.email,
              from: "no-reply@yourdomain.com",
              subject: "You have been invited to Strapi",
              text: `Register here: http://localhost:1337/admin/auth/register?registrationToken=${result.registrationToken}`,
            });
        }
      },
    });
  },
};
