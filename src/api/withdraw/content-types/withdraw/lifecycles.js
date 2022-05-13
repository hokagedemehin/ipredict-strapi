module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "ibk2k7@gmail.com",
        from: "akimsal2001@gmail.com",
        bcc: "ibk2k7@gmail.com",
        subject: "New Withdrawal Request",
        text: `Content is loading...`,
        html: `<div>
                <h3>Hello Salami,</h3>
                <p style={{paddingBottom: '1rem'}}>${result.fullName}, will want to withdraw their winnings, amount is ${result.amount}</p>
                <p style={{paddingBottom: '0.5rem'}}>Their bank details is ${result.bankName} - ${result.accountNumber}</p>
                <p style={{paddingBottom: '1rem'}}><b>Please remember to confirm the payment in the admin site once you have made the transfer so as for it to reflect on their side that they have been paid</b></p>

                <a href=${process.env.NEXT_PUBLIC_FRONTEND_URL_ADMIN}/wallet>Confirm payment</a>
              </div>`,
      });
    } catch (err) {
      strapi.log.debug("📺: ", err);
    }
  },
};
