
const HEIGHT = window.innerHeight - 300

export const OPTIONS = {
  key: 'oimgE4ndzeE-13df1A-9uyB1B-21w==',

  editorClass: 'article',

  height: HEIGHT,
  heightMin: HEIGHT,
  heightMax: HEIGHT,

  htmlAllowComments: false,

  htmlAllowedAttrs: [
    'alt', 'class', 'href', 'src', 'target', 'title', 'contenteditable', 'frameborder'
  ],

  htmlAllowedEmptyTags: [
    'img', 'script', 'video', 'iframe',
  ],

  htmlAllowedStyleProps: [ ],

  htmlAllowedTags: [
    'a', 'blockquote', 'div', 'em', 'figcaption', 'figure', 'h3', 'h4', 'iframe', 'img', 'li', 'ol', 'p', 'picture',
    'script', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'ul', 'video',
    'embed-twitter', 'embed-facebook', 'embed-vk'
  ],

  htmlDoNotWrapTags: [
    'blockquote', 'div', 'figure', 'h3', 'h4', 'ol', 'p', 'script', 'table', 'ul'
  ],

  htmlExecuteScripts: false,

  pastePlain: true,

  placeholderText: 'Контент',

  pluginsEnabled: [
    'codeBeautifier', 'codeView', 'fullscreen', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'table', 'url', 'custom'
   ],

  shortcutsEnabled: ['bold', 'italic', 'underline', 'strikeThrough', 'indent', 'outdent', 'undo', 'redo', 'createLink'],
  shortcutsHint: true,

  tabSpaces: 2,

  toolbarButtons: [
    'selectAll', '|',
    'undo', 'redo', '|',
    'clearFormatting', 'paragraphFormat', '|',
    'bold', 'italic', 'underline', 'strikeThrough', '|',
    'subscript', 'superscript', '|',
    'formatOL', 'formatUL', 'outdent', 'indent', '|',
    'insertBlockquote', 'insertLink', 'insertTable', 'insertImage', 'insertVideo', 'insertSocial', '|',
    'fullscreen', 'html'
  ],
  toolbarButtonsMD: null,
  toolbarButtonsSM: null,
  toolbarButtonsXS: null,

  toolbarSticky: false,
  toolbarStickyOffset: 65,

  // === line_breaker.min.js ===
  lineBreakerTags: ['table', 'figure'],

  // === link.min.js ===
  linkAlwaysBlank: true,
  linkAlwaysNoFollow: true,
  linkEditButtons: [ 'linkOpen', 'linkEdit', 'linkRemove' ],
  linkInsertButtons: [ 'linkBack' ],
  linkMultipleStyles: false,
  linkStyles: { },

  // === paragraph_format.min.js ===
  paragraphFormat: {
    N: 'Normal',
    H3: 'Heading 3',
  },
  paragraphFormatSelection: true,
  paragraphMultipleStyles: false,

  // === table.min.js ===
  tableCellMultipleStyles: false,
  tableCellStyles: { },
  tableColors: [],
  tableColorsButtons: [],
  tableEditButtons: [ 'tableRemove', '|', 'tableHeader', 'tableRows', 'tableColumns', 'tableCells' ],
  tableInsertHelper: true,
  tableMultipleStyles: false,
  tableResizer: false,
  tableStyles: {},

}
