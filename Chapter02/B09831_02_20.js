import countAttributes from './utilities';

// This export method is used if you don't want to export anything by default
// or if you want the user to pick up only what he needs.

export const parseHTML = function (html) {
  var attributesLen = countAttributes(html);
  // do something with the HTML string
};

export const parseCSS = function (css) {
  var attributesLen = countAttributes(css);
  // do something with the CSS string
};
