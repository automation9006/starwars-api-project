import GetCommandLineArg from './GetCommandLineArg'
import config from './config'

const colors = require('colors')
export default class GetEnvironment {
  static get () {
    const tEnv = GetCommandLineArg.getArgValue('tenv')

    if (config[tEnv] === undefined || config[tEnv] == null) {
      throw new Error(colors.red(' ********* Please pass your environment value in this format :: tenv=prodEnv or tenv=testEnv or tenv=intgEnv *********'))
    } else {
      console.log(colors.green('********* Tests are currently running on environment :::: ' + config[tEnv]))
    }
    return config[tEnv]
  }
}
