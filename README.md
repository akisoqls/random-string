# Random String Generator

Returns a random string.

## Examples

```JavaScript
generateRandomString(10); // "hm57vp5J4r"
generateRandomString(8, ["a","p","P","l","e"]); // "PalalPae"
generateRandomString(16, "orange-peel") // "-ag-laagn-n-lra-"
generateRandomString(); // "AgZPEhZVUZRKDSKRctlgx5iibRPdWN8jCOjLxpr8ZnVT9Y9fWl9syJP8gSXjUlr8"
```

## Params

- **`length` (optional)**: The length of random string. Default: `64`
- **`charset` (optional)**:  Characters used in random string. Default: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`

## Returns

Returns a string that includes randomly selected characters from the charset.

## Use for Deno

```JavaScript
import { generateRandomString } from "https://deno.land/x/random_string_generator/mod.ts";
```
