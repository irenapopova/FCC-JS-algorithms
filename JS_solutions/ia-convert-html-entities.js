// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const entities = {
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
  '"' : '&quot;',
  "'" : '&apos;'
}

function convertHTML(str) {
  // &colon;&rpar;
  
  return str.split('').map(char => { 
    if (char.match(/[&<>"']/)){
      return entities[char];
    }
    else {
      return char;
    }      
  }).join('');
}

convertHTML("Dolce & Gabbana");