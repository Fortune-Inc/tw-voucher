const twvoucher = require('@fortune-inc/tw-voucher');

// ตัวอย่างระบบ function คำสั่งที่บอท fortune ใช้ กรุณาดัดแปลงให้เข้ากับโค๊ดของคุณด้วย
// ⚠️ หมายเหตุ: การที่คุณใช้ระบบคำสั่งให้ลูกดิสของคุณเติม คุณต้องมันใจด้วยว่าไม่มีใครกดลิ้งแทนบอทคุณได้
module.exports.run = (bot, message, args) => {
    if(!args[0]) return message.reply('❌ | กรุณาใช้คำสั่งตามด้วยลิ้งอังเปาหรือโค๊ดอังเปา')
    twvoucher('06x-xxx-xxxx',args[0]).then(redeemed =>{
        // คุณต้องทำระบบเขียนลงฐานข้อมูลเอง ⬅️
        message.channel.send('✅ | เติมเงินจำนวน ' + redeemed.amount + ' แล้ว!')
    }).catch(err => {
        message.channel.send('❌ | ลิ้งอังเปาถูกใช้งานแล้ว')
    })
}
