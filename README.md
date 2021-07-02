# Truewallet Voucher
เติมเงิน Truewallet ด้วยซองอั่งเปา

## ทำไมต้อง tw-voucher
+ ⚡ เติมลิ้งอังเปาประสิทธิภาพสูงด้วยความเร็วของ [petitio](https://github.com/helperdiscord/petitio)
+ 📦 เบาดั่งขนนก(526 bytes)
+ ✔️ ฟีเจอร์ครบรองรับทั้งโค๊ดอังเปาและ URL
+ 🔒 มีระบบป้องกันการ inject ในตัว

## Installation
```sh
npm i @fortune-inc/tw-voucher
```

## Examples
ตัวอย่างการเติมด้วยโค๊ด
```js
const twvoucher = require('@fortune-inc/tw-voucher');

twvoucher('เบอร์โทรศัพท์', 'xxxxhFog10Ijbmg1c').then(redeemed => {
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) 
}).catch(err => {
    console.error('invaild voucher code')
})
```
ตัวอย่างการเติมด้วย URL
```js
const twvoucher = require('@fortune-inc/tw-voucher');

twvoucher('เบอร์โทรศัพท์', 'https://gift.truemoney.com/campaign/?v=xxxxfhFog10Ijbmg1c').then(redeemed => {
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) 
}).catch(err => {
    console.error('invaild voucher code')
})
```
