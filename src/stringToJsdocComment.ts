/**
 * Converts a string to a JSDoc comment
 * 
 * @param input - Input string
 * @returns JSDoc comment
 * 
 * @example
 * 
 * ```ts
 * stringToJsDocComment('Hello, world!')
 * // Output: '/**\n * Hello, world!\n *\/'
 * ```
 */
export function stringToJsDocComment(input: string | undefined) {
  if (!input) {
    return ''
  }

  return `/**\n${input.trim().split('\n').map(str => ' * ' + str).join('\n')}\n */`
}