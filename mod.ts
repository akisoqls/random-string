/**
 * Generate random string.
 * 
 * @param { number | undefined } length - The length of random string. Default: `64`
 * @param { string[] | string | undefined } charset - Characters used in random string. Default: `abcdefghijklmnoqprstuvwxyzABCDEFGHIJKLMNOQPRSTUVWXYZ0123456789`
 * @returns { string } Generated random string.
 * 
 * @example
 * ```JavaScript
 * generateRandomString(10); // "hm57vp5J4r"
 * generateRandomString(8, ["a","p","P","l","e"]); // "PalalPae"
 * generateRandomString(16, "orange-peel") // "-ag-laagn-n-lra-"
 * generateRandomString(); // "AgZPEhZVUZRKDSKRctlgx5iibRPdWN8jCOjLxpr8ZnVT9Y9fWl9syJP8gSXjUlr8"
 * ```
 */

export const generateRandomString = (
  length = 64,
  charset: string[] | string = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "A",
    "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9"
  ]
): string => {
  return Array.from(Array(length)).reduce((prev, curr) => {
    curr = prev + charset[Math.floor(Math.random() * charset.length)];
    return curr
  }, "");
}
