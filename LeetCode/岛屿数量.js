/**
 * @param {character[][]} grid
 * @return {number}
 */
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

var numIslands = function (grid) {
    if (grid == null || !Array.isArray(grid) || grid[0].length === 0) return 0;
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const item = grid[r][c];
            if (item === '1') {
                dfs(grid, r, c);
                count++;
            }
        }
    }
    return count;
};

// 深度优先搜索
function dfs(grid, r, c) {
    if (r < 0 || r === grid.length || c < 0 || c === grid[0].length) return;
    if (grid[r][c] !== '1') return;
    grid[r][c] = '2';
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}

console.log(numIslands(grid));

/**
 * 解题思路：无向图的结构，每个格子和它上下左右的四个格子相邻。如果四个相邻的格子坐标合法，且是陆地，就可以继续搜索。
 * 在深度优先搜索的时候要注意避免重复遍历。我们可以把已经遍历过的陆地改成 2，这样遇到 2 我们就知道已经遍历过这个格子了，不进行重复遍历。
 * 每遇到一个陆地格子就进行深度优先搜索，最终搜索了几次就知道有几个岛屿。
 */