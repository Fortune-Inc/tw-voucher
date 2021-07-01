const f = require("petitio");
module.exports = async (e, t) => {
    const o = (t = t.trim()).match(/(?<=\?v=)([0-9A-Za-z])+/);
    if (!(t = o ? o[0] : t) || 18 > t.length) throw Error("INVAILD_VOUCHER_CODE");
    const a = await f(`https://gift.truemoney.com/campaign/vouchers/${t}/redeem`, "POST").body({
        mobile: e,
        voucher_hash: t
    }).json();
    if ("SUCCESS" === a.status.code) return {
        amount: parseFloat(a.data.voucher.redeemed_amount_baht),
        owner_full_name: a.data.owner_profile.full_name
    };
    throw Error(a.status.code)
};