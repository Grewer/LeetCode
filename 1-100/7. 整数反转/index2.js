var reverse = function (x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};


// // 弹出 x 的末尾数字 digit
// digit = x % 10
// x /= 10
//
// // 将数字 digit 推入 rev 末尾
// rev = rev * 10 + digit
//
// 来自于官方的方案
