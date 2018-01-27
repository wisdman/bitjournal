
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

  $.FE.PLUGINS.custom = function (editor) {

    // const imageService = new ImageService()

    // Add Blockquote
    function insertBlockquote() {
      // Remove current blockquote
      editor.format.remove('blockquote')
      const text = editor.selection.isCollapsed() ? 'Новая цитата' : editor.selection.text().replace(/\n/g, '')
      editor.html.insert(`<blockquote>${text}</blockquote>`)
      editor.selection.restore()
    }

    function insertImage() {
      window._fileService
            .upload({
              accept: 'image/*',
              image: { width: 1000 }
            })
            .subscribe( result => {
              const url = result.url
              editor.html.insert(`<figure contenteditable="false" class="fr-deletable"><picture contenteditable="false"><img contenteditable="false" src="${url}"></picture></figure>`)
              editor.selection.restore()
            })
    }

    function parseYouTube(input) {
      const idMatch = /^[a-zA-Z0-9_-]{6,11}$/.exec(input)

      if (idMatch)
        return idMatch[0]

      const urlMatch = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/.exec(input)
      if (urlMatch)
        return urlMatch[1]

      return undefined
    }

    function insertVideo() {
      let text = window.prompt('Ссылка на YouTube или ID') || ''
      text = text.trim()

      if (!text)
        return

      const id = parseYouTube(text)

      if (!id) {
        window.alert('Это не похоже на YouTube ссылку или ID')
        return
      }

      editor.html.insert(`<figure contenteditable="false" class="fr-deletable video"><iframe ontenteditable="false" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe></figure>`)
      editor.selection.restore()
    }

    function insertSocial() {

      let text = window.prompt('Код для вставки Twitter') || ''
      text = text.trim()

      if (!text)
        return

      // Parse Twitter
      let twitter = /\/\/twitter\.com\/[^\/]+\/status\/(\d+)/.exec(text)
      twitter = twitter && twitter[1] || undefined

      if (twitter) {
        editor.html.insert(`<figure contenteditable="false" class="fr-deletable"><embed-twitter>${twitter}</embed-twitter></figure>`)
        editor.selection.restore()
        return
      }

      window.alert('Это не похоже на Twitter')
    }

    return {
      insertImage: insertImage,
      insertBlockquote: insertBlockquote,
      insertVideo: insertVideo,
      insertSocial: insertSocial,
    }
  }

  $.FE.DefineIcon('insertBlockquote', { NAME: 'quote-right' })
  $.FE.RegisterCommand('insertBlockquote', {
    title: 'Insert Blockquote',
    undo: true,
    focus: true,
    refreshAfterCallback: true,
    plugin: 'custom',
    callback: function () {
      this.custom.insertBlockquote()
      this.undo.saveStep()
    }
  })

  $.FE.DefineIcon('insertImage', { NAME: 'image' })
  $.FE.RegisterCommand('insertImage', {
    title: 'Insert Image',
    undo: false,
    focus: true,
    refreshAfterCallback: false,
    plugin: 'custom',
    callback: function () {
      this.custom.insertImage()
    }
  })

  $.FE.DefineIcon('insertVideo', { NAME: 'video-camera' })
  $.FE.RegisterCommand('insertVideo', {
    title: 'Insert Video',
    undo: false,
    focus: true,
    refreshAfterCallback: false,
    plugin: 'custom',
    callback: function () {
      this.custom.insertVideo()
    }
  })

  $.FE.DefineIcon('insertSocial', { NAME: 'share-square' })
  $.FE.RegisterCommand('insertSocial', {
    title: 'Insert Social service',
    undo: false,
    focus: true,
    refreshAfterCallback: false,
    plugin: 'custom',
    callback: function () {
      this.custom.insertSocial()
    }
  })

}))
