// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case

function titleCase(str) {
  return str.toLowerCase().split(" ")
      .map(index => index[0].toUpperCase()
      .concat(index.slice(1)))
      .join(" ");
}

titleCase("I'm a little tea pot");