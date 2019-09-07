// Check if the predicate (second argument) is truthy on all elements of a collection (first argument)

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(i => !!i[pre]); // !! to convert to a real Boolean
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

