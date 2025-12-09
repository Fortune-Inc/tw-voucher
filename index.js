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

  const payload = {
    mobile: phone,
    voucher: voucher,
  };

  // Make the API request
  let response = await fetch(
    `https://truewalletproxy-755211536068837409.rcf2.deploys.app/api`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "user-agent": "multilabxxxxxxxx",
      },
      body: JSON.stringify(payload),
    },
  ).then((res) => res.json());

  // Process the response
  if (response.status.code === "SUCCESS") {
    return {
      amount: Number(response.data.my_ticket.amount_baht.replace(/,/g, "")),
      owner_full_name: response.data.owner_profile.full_name,
      code: voucher,
    };
  }

  throw Error(response.status.code);
};
