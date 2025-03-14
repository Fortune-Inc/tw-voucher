export default async (phone = "", voucherData = "") => {
  // Validate phone number
  phone = (phone + "").trim();
  if (!phone.length || phone.match(/\D/)) {
    throw Error("INVAILD_PHONE");
  }
  
  // Process voucher
  let parts = (voucherData + "").split("v=");
  let voucher = (parts[1] || parts[0]).match(/[0-9A-Za-z]+/)[0];
  
  if (voucher.length !== 35) {
    throw Error("INVAILD_VOUCHER");
  }
  
  // Make the API request
  let response = await fetch(
    `https://gift.truemoney.com/campaign/vouchers/${voucher}/redeem`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        mobile: phone,
        voucher_hash: voucher
      })
    }
  ).then(res => res.json());
  
  // Process the response
  if (response.status.code === "SUCCESS") {
    return {
      amount: Number(response.data.my_ticket.amount_baht.replace(/,/g, '')),
      owner_full_name: response.data.owner_profile.full_name,
      code: voucher
    };
  }
  
  throw Error(response.status.code);
};
