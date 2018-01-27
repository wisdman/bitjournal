
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {

  $.FE.PLUGINS.image = function (editor) {
    function insert() {

    }

    function showInsertPopup () {

      console.log('showInsertPopup')

      // var $btn = editor.$tb.find('.fr-command[data-cmd="insertImage"]');

      // var $popup = editor.popups.get('image.insert');

      // if (!$popup) $popup = _initInsertPopup();
      // hideProgressBar();

      // if (!$popup.hasClass('fr-active')) {
      //   editor.popups.refresh('image.insert');
      //   editor.popups.setContainer('image.insert', editor.$tb);

      //   if ($btn.is(':visible')) {
      //     var left = $btn.offset().left + $btn.outerWidth() / 2;
      //     var top = $btn.offset().top + (editor.opts.toolbarBottom ? 10 : $btn.outerHeight() - 10);
      //     editor.popups.show('image.insert', left, top, $btn.outerHeight());
      //   }
      //   else {
      //     editor.position.forSelection($popup);
      //     editor.popups.show('image.insert');
      //   }
      // }
    }

    function _init () {
      console.log('_init')
    }

    return {
      _init: _init,
      showInsertPopup: showInsertPopup,
      insert: insert,
    }
  }

  $.FE.DefineIcon('insertImage', { NAME: 'image' })
  $.FE.RegisterCommand('insertImage', {
    title: 'Insert Image',
    undo: false,
    focus: true,
    refreshAfterCallback: false,
    plugin: 'image',
    callback: function () {
      this.image.showInsertPopup()
    }
  })

}))
