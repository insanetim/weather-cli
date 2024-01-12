#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { TOKEN_DICTIONARY, saveKeyValue } from './services/storage.service.js'

const saveToken = async token => {
  if (!token.length) {
    printError('Не передан token')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Token сохранён')
  } catch (e) {
    printError(e.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
  if (args.s) {
    // Save city
  }
  if (args.t) {
    saveToken(args.t)
  }
  getWeather('Dnipro')
  // Output weather
}

initCLI()
