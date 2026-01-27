import { generateInviteToken } from "../../../utils/inviteToken";

export default {
  async invite(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest("Email is required");
    }

    // 1️⃣ Generate token
    const token = generateInviteToken();

    // 2️⃣ Save token in DB (example: invite table / user table)
    await strapi.db.query("api::invite.invite").create({
      data: {
        email,
        token,
        used: false,
      },
    });

    // 3️⃣ Auto-generate invite URL (NO manual copy)
    const inviteUrl = `${process.env.FRONTEND_URL}/accept-invite?token=${token}`;

    // 4️⃣ Send email
    await strapi
      .plugin("email")
      .service("email")
      .send({
        to: email,
        subject: "You are invited 🚀",
        html: `
        <h2>Welcome!</h2>
        <p>You have been invited.</p>
        <a href="${inviteUrl}">
          Click here to accept invitation
        </a>
      `,
      });

    ctx.send({ success: true });
  },
};
