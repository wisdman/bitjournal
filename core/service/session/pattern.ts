/*
 * HTTP service validation patterns
 */

export const SESSION_ID_REGEXP = /(?:session\s*=\s*)?([0-9a-z]+)/
export const SESSION_ID_STRONG_REGEXP = /^[0-9a-z]+$/
