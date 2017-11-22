
export const escapeRegExpString = (st: string) => st.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
