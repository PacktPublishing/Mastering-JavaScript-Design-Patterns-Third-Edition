define('parser', ['utilities'], function (utilities) {
  return {
    parseHTML: function (html) {
      var attributesLen = utilities.countAttributes(html);
      // do something with the HTML string
    },
    parseCSS: function (css) {
      var attributesLen = utilities.countAttributes(css);
      // do something with the CSS string
    }
  }
});
