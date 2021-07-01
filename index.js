const f = require('petitio')

module.exports = async (phone, code) => {
    
    code = code.trim()
    let matched = code.match(/(?<=\?v=)([0-9A-Za-z])+/) 
    code = matched ? matched[0] : code
    if(!code || code.length<18) throw new Error("INVAILD_VOUCHER_CODE")
    let res = await f(`https://gift.truemoney.com/campaign/vouchers/${code}/redeem`,'POST').body({ mobile: phone, voucher_hash: code }).json()
    if(res.status.code == 'SUCCESS' && res.data && res.data.voucher) {
        return {
            amount: parseFloat(res.data.voucher.redeemed_amount_baht),
            owner_full_name: res.data.owner_profile.full_name
        }
    } else throw new Error(res.status.code)
}