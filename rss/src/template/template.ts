
import { CallableClass } from '@core/callable'

const TEMPLATE = {
  interpolate: /\{\{=([\s\S]+?)\}\}/g,
  conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
  iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
  varname:     'it',
}

const unescape = (code: string) => code.replace(/\\('|\\)/g, "$1")
                                       .replace(/[\r\t\n]/g, " ")

export class Template extends CallableClass {

  constructor(tmpl: string) {

    let needhtmlencode: boolean = true
    let sid: number = 0

    let str = `let out='`

    str += tmpl.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
               .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,"")
               .replace(/'|\\/g, "\\$&")
               .replace(TEMPLATE.interpolate, (match: string, code:string) => {
                 return `'+(${ unescape(code) })+'`
               })
               .replace(TEMPLATE.conditional, (match: string, elsecase:string, code:string) => {
                 if (elsecase)
                   return code ? `';}else if(${ unescape(code) }){out+='`
                               : `';}else{out+='`

                 else
                   return code ? `';if(${ unescape(code) }){out+='`
                               : `';}out+='`
               })
               .replace(TEMPLATE.iterate, (match: string, iterate: string, vname: string, iname: string = 'index') => {
                 if (!iterate)
                   return `';}}out+='`

                 iterate = unescape(iterate)

                 return `';if(${iterate}){let arr=${iterate};for(let ${iname}=0;${iname}<arr.length;${iname}++){${vname}=arr[${iname}];out+='`
               })

    str += "';return out"

    str = str.replace(/\n/g, "\\n")
             .replace(/\t/g, '\\t')
             .replace(/\r/g, "\\r")
             .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1')
             .replace(/\+''/g, "")

    let fn: (it: string) => string
    try {
      fn = new Function(TEMPLATE.varname, str) as (it: string) => string
    } catch (_) {
      throw new Error("Could not create a template function: " + str)
    }

    super(fn)
  }
}

