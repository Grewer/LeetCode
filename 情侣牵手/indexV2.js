/*
    广度优先搜索

    这个可能更加好理解一点
 */

var minSwapsCouples = function(row) {
    const n = row.length;
    const tot = n / 2;

    const graph = new Array(tot).fill(0).map(() => new Array());
    for (let i = 0; i < n; i += 2) {
        const l = Math.floor(row[i] / 2);
        const r = Math.floor(row[i + 1] / 2);
        console.log(l,r)
        if (l != r) {
            graph[l].push(r);
            graph[r].push(l);
        }
    }

    console.log(graph)
    const visited = new Array(tot).fill(false);
    let ret = 0;
    for (let i = 0; i < tot; i++) {
        if (!visited[i]) {
            const queue = [];
            visited[i] = true;
            queue.push(i);
            let cnt = 0;
            console.log('queue',queue)

            while (queue.length) {
                const x = queue.shift();
                cnt += 1;

                console.log('loop', graph[x],x, visited, cnt)
                for (const y of graph[x]) {
                    if (!visited[y]) {
                        visited[y] = true;
                        queue.push(y);
                    }
                }
            }
            ret += cnt - 1;
        }
    }
    return ret;
};


console.log(minSwapsCouples([0, 2, 3, 1, 8, 6, 5, 4, 7, 9])) // 2
