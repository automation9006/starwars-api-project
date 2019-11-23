import dateAndTime from 'date-and-time'
const colors = require('colors')

var formatDate = date => dateAndTime.format(date, 'YYYY-MM-DD HH:mm:ss')

export const logError = async (errorMessage) => {
  console.log(colors.red(formatDate(new Date()) + ' - ' + errorMessage))
}

export const logInfo = async (infoMessage) => {
  console.log(colors.yellow(formatDate(new Date()) + ' - ' + infoMessage))
}

export const logSuccess = async (successMessage) => {
  console.log(colors.green(formatDate(new Date()) + ' - ' + successMessage))
}
