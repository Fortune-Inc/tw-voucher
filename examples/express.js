const twvoucher = require('@fortune-inc/tw-voucher');

app.post("/api/v1/topup",async (req,res)=>{
    //ใส่ req.body ตรงได้ไม่ต้องกลัว object exploit
    twvoucher('เบอร์โทรศัพท์',req.body).then(redeemed => {
        return res.json({
            success: true,
            amount: redeemed.amount
        })
    }).catch(() => {
        return res.json({
            msg: "ลิ้งอั่งเปาไม่ถูกต้อง"
        })
    })
})