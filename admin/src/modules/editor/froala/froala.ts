
import * as $ from 'jquery'
import './imports'

export class Froala {

  editor: any

  constructor(element: any) {

    let height = window.innerHeight - 300

    this.editor = (<any>$(element)).froalaEditor({
      editorClass: 'article',

      height: height,
      heightMin: height,
      heightMax: height,

      htmlAllowComments: false,

      htmlAllowedAttrs: [
        'alt', 'class', 'href', 'src', 'target', 'title',
      ],

      htmlAllowedEmptyTags: [
        'img', 'video'
      ],

      htmlAllowedStyleProps: [ ],

      htmlAllowedTags: [
        'a', 'blockquote', 'div', 'em', 'figcaption', 'figure', 'h3', 'h4', 'img', 'li', 'ol', 'p', 'picture', 'script', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'ul', 'video'
      ],

      htmlDoNotWrapTags: [
        'blockquote', 'div', 'figure', 'h3', 'h4', 'ol', 'p', 'script', 'table', 'ul'
      ],

      htmlExecuteScripts: false,

      pastePlain: true,

      placeholderText: 'Контент',

      pluginsEnabled: [
        'codeBeautifier', 'codeView', 'fullscreen', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quote', 'table', 'url'
       ],

      shortcutsEnabled: [],

      tabSpaces: 2,

      toolbarButtons: [
        'selectAll', '|', 'undo', 'redo', '|', 'clearFormatting', 'paragraphFormat', '|',
        'bold', 'italic', 'underline', 'strikeThrough', '|', 'subscript', 'superscript', '|',
        'formatOL', 'formatUL', 'outdent', 'indent', '|',
        'quote', 'insertLink', 'insertTable', '|', 'fullscreen', 'html'
      ],
      toolbarButtonsMD: null,
      toolbarButtonsSM: null,
      toolbarButtonsXS: null,

      toolbarSticky: false,
      toolbarStickyOffset: 65
    })
  }
}
