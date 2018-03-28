(function (namespace) {
  'use strict';
  function countAttributes(data) {
    // Do something generic with data
  }

  namespace.parser = {
    parseHTML: function (html) {
      var attributesLen = countAttributes(html);
      // do something with the HTML string
    },
    parseCSS: function (css) {
      var attributesLen = countAttributes(css);
      // do something with the CSS string
    }
  };

}(this.pkt || (this.pkt = {})));
