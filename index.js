let tls = require("tls");
tls.DEFAULT_MIN_VERSION = "TLSv1.3";

const {fetch} = require("undici")

module.exports=async(e="",t="")=>{if(!(e=(e+"").trim()).length||e.match(/\D/))throw Error("INVAILD_PHONE");let r=(t+="").split("v=");if(35!=(t=(r[1]||r[0]).match(/[0-9A-Za-z]+/)[0]).length)throw Error("INVAILD_VOUCHER");let o=await fetch(`https://gift.truemoney.com/campaign/vouchers/${t}/redeem`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({mobile:e,voucher_hash:t})}).then((e=>e.json()));if("SUCCESS"==o.status.code)return{amount:Number(o.data.my_ticket.amount_baht.replace(/,/g,'')),owner_full_name:o.data.owner_profile.full_name,code:t};throw Error(o.status.code)};
