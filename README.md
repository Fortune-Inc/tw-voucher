# Truewallet Voucher
เติมเงิน Truewallet ด้วยซองอั่งเปา

## Installation
```sh
npm i tw-voucher
```

## Examples
ตัวอย่างการเติมด้วยโค๊ด
```js
const twvoucher = require('tw-voucher');

twvoucher('xxx-xxx-xxxx', 'xxxxhFog10Ijbmg1c').then(redeemed => {ล้ว
    console.log(`redeem ซองของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) 
}).catch(err => {
    console.error('invaild voucher code')
})
```
ตัวอย่างการเติมด้วย URL
```js
twvoucher('xxx-xxx-xxxx', 'https://gift.truemoney.com/campaign/?v=xxxxfhFog10Ijbmg1c').then(redeemed => {
    console.log(`redeem ซองของ ${redeemed.owner_full_name} จำนวน ${redeemed.amount} บาทแล้ว`) 
}).catch(err => {
    console.error('invaild voucher code')
})
```
