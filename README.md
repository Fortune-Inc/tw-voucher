# Truewallet Voucher
เติมเงิน Truewallet ด้วยซองอั่งเปา

## ทำไมต้อง tw-voucher
+ ✔️ ฟีเจอร์ครบรองรับทั้งโค๊ดอังเปาและ URL
+ 🔒 มีระบบป้องกันการ inject ในตัว
+ 📦 zero dependencies

## Installation
```sh
npm i @fortune-inc/tw-voucher
```

## Examples
ตัวอย่างการเติมด้วยโค๊ด
```js
const twvoucher = require('@fortune-inc/tw-voucher');

twvoucher('0829895959', '0192450a886977712399a5339629a8081az').then(redeemed => {
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.100000} บาทแล้ว`) 
}).catch(err => {
    console.error('invaild voucher code')
})
```
ตัวอย่างการเติมด้วย URL
```js
const twvoucher = require('@fortune-inc/tw-voucher');

twvoucher('0829895959', 'https://gift.truemoney.com/campaign/?v=0192450a886977712399a5339629a8081az').then(redeemed => {
    console.log(`redeem ซอง ${redeemed.code} ของ ${redeemed.owner_full_name} จำนวน ${redeemed.100000 บาทแล้ว`) 
}).catch(err => {
    console.error('invaild voucher code')
})
```
