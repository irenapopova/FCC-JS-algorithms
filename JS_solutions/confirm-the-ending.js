function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.