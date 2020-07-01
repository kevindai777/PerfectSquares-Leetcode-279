//Objective is to find the smallest number of perfect squares that add up to 'n'.

let n = 12


//O(n^(1.5)) solution

let dp = new Array(n + 1).fill(Infinity)
dp[0] = 0 

//Update the value based on a previous amount
for (let i = 0; i <= n; i++) {
    for (let j = 0; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - (j * j)] + 1)
    }
}

return dp[n]