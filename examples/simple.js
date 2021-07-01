const twvoucher = require('@fortune-inc/tw-voucher');

//ใช้โค๊ดอังเปา
twvoucher('06x-xxx-xxxx', 'xxxxhFog10Ijbmg1c').then(redeemed => {
    // เติมลิ้งอังเปาแล้ว
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) //redeem ซอง xxxxhFog10Ijbmg1c ของ สมชาย(ชื่อคนสร้างซอง) จำนวน 10 บาทแล้ว
}).catch(err => {
    // ลิ้งอังเปาไม่ถูก / ใช้ไปแล้ว!
    console.error('invaild voucher code')
})

//ใช้ลิ้งอังเปา
twvoucher('06x-xxx-xxxx', 'https://gift.truemoney.com/campaign/?v=xxxxfhFog10Ijbmg1c').then(redeemed => {
    // เติมลิ้งอังเปาแล้ว
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) //redeem ซอง xxxxhFog10Ijbmg1c ของ สมชาย(ชื่อคนสร้างซอง) จำนวน 10 บาทแล้ว
}).catch(err => {
    // ลิ้งอังเปาไม่ถูก / ใช้ไปแล้ว!
    console.error('invaild voucher code')
})
