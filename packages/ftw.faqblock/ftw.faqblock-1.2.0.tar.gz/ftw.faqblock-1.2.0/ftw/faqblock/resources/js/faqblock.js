(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(root.jQuery);
    }
}(typeof self !== 'undefined' ? self : this, function ($) {
  $(function() {
    // Open FAQ Block when location hash is set
    if (window.location.hash)
      jQuery('.ftw-faqblock-faqblock > ' + window.location.hash + ' + div .faqblock > input[type=checkbox]').attr('checked', true)
  });
}));
