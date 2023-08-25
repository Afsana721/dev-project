Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return the dynamic string "There are 7 differences".

Please do not look for solved problems on the web. They are too complicated and you are likely to get into rabbit holes. Think about a string as an array of characters. How would you iterate over them and compare?  What edge conditions should you check for? Edge conditions are extreme conditions, where the user of the function enters no values, unnatural values and your function should handle those values gracefully.

Give it a try.

Remember, you would not get any credit if
- if your code is identical to solutions provided online. It must be yours, even if inspired by other examples.
- if you do not explain your strategy via comments.
