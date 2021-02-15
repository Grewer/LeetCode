/*
 * 并查集
 *
假定第一对情侣的男生与第二对情侣的女生坐在了一起，而第二对情侣的男生与第三对情侣的女生坐在了一起。根据题意，要想让第二对情侣之间能够成功牵手，要么交换第一对情侣的男生与第二对情侣的男生，要么交换第二对情侣的女生与第三对情侣的女生。

既然存在这两种交换方式，那么有必要两种方式都考虑吗？答案是无需都考虑。不难注意到，无论采用了两种交换方式中的哪一种，最后的结局都是「第二对情侣坐在了一起，且第一对情侣的男生与第三对情侣的女生坐在了一起」，因此两种交换方式是等价的。

因此，我们将 NN 对情侣看做图中的 NN 个节点；对于每对相邻的位置，如果是第 ii 对与第 jj 对坐在了一起，则在 ii 号节点与 jj 号节点之间连接一条边，代表需要交换这两对情侣的位置。

如果图中形成了一个大小为 kk 的环：i \rightarrow j \rightarrow k \rightarrow \ldots \rightarrow l \rightarrow ii→j→k→…→l→i，则我们沿着环的方向，先交换 i,ji,j 的位置，再交换 j,kj,k 的位置，以此类推。在进行了 k-1k−1 次交换后，这 kk 对情侣就都能够彼此牵手了。

故我们只需要利用并查集求出图中的每个连通分量；对于每个连通分量而言，其大小减 11 就是需要交换的次数。

*
*
*
* 如果一对情侣恰好坐在了一起，并且坐在了成组的座位上，其中一个下标一定是偶数，另一个一定是奇数，
* 并且「偶数的值 + 1 = 奇数的值」。
* 例如编号数对 [2, 3]、[9, 8]，这些数对的特点是除以 22（下取整）得到的数相等。
 */


/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
    const n = row.length;
    const tot = n / 2;
    const f = new Array(tot).fill(0).map((element, index) => index);

    for (let i = 0; i < n; i += 2) {
        const l = Math.floor(row[i] / 2);
        const r = Math.floor(row[i + 1] / 2);
        console.log(f, l, r)
        add(f, l, r);
    }
    const map = new Map();
    for (let i = 0; i < tot; i++) {
        const fx = getf(f, i);
        if (map.has(fx)) {
            map.set(fx, map.get(fx) + 1);
        } else {
            map.set(fx, 1)
        }
    }

    console.log(map)

    let ret = 0;
    for (const [f, sz] of map.entries()) {
        ret += sz - 1;
    }
    return ret;
};

const getf = (f, x) => {
    // console.log(f)
    if (f[x] === x) {
        return x;
    }
    const newf = getf(f, f[x]);
    console.log(newf, x, f[x])
    f[x] = newf;
    return newf;
}

const add = (f, x, y) => {
    const fx = getf(f, x);
    const fy = getf(f, y);
    f[fx] = fy;
}

// console.log(minSwapsCouples([0, 2, 1, 3]))
console.log(minSwapsCouples([0, 2, 3, 1, 8, 6, 5, 4, 7, 9])) // 2
