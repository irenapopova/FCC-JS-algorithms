// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. 

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase()
            .split(/\s/)
            .filter(i => i !== '')
            .join('-');    
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"