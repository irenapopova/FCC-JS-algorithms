// CHALLENGE - Regex

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

// 2) Username letters can be lowercase and uppercase.

// 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.


let username = "JackOfAllTrades";
let userCheck = /^\D\D+\d*$/; // Change this line
let result = userCheck.test(username);