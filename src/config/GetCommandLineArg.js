/**
 * Generic get arg value class
 */
export default class GetCommandLineArg {
  /**
     * Given an argument name, return its value -- or undefined
     * @param {*} argName
     */
  static getArgValue (argName) {
    const argv = process.argv.slice(2)
    let argValue = null
    for (let i = 0; i < argv.length; i++) {
      if (argv[i].startsWith(argName)) {
        const envArr = argv[i].split('=')
        if (envArr.length === 2) {
          argValue = envArr[1]
        }
        break
      }
    }
    return argValue
  }
}
