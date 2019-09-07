function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length) return str;
  return str.substr(0,num).concat('...');
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);