import * as Logging from './Logging'
import GetEnvironment from './GetEnvironment'

const environment = GetEnvironment.get()

export const getRequestForActorNameAndUrl = async () => {
  var request = require('request')
  const params = {
    url: environment + 'api/people',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  }
  return new Promise((resolve, reject) => {
    request(params, (error, response, body) => {
      let results  = JSON.parse(response.body).results
      for(let i =0 ; i<results.length ; i++){
          const name = JSON.parse(response.body).results[i].name
          if(name === 'Darth Vader'){
            Logging.logInfo('The name of Actor is ::::  ' + name)
            const url = JSON.parse(response.body).results[i].url
            return resolve(url)  
          }
          // const [{ name }] = JSON.stringify(response.body).results[0].name
          // Logging.logInfo('The name of Actor is ::::  ' + name)
          // Logging.logInfo('The url of Actor is ::::   ' + url)
          if (error) {
            console.log(error.stack)
            
          }
          // (response.statusCode === 200) ? resolve([]) : reject(new Error('Actor Details Error: ' + response.statusCode + ':  ' + response.statusMessage + ': ' + body))
          
      }
      return resolve(null)
    })

    
  })
}

export const verifyActorInTheEpisodeList = async (url,episodeIDs) => {
  var request = require('request')
  const params = {
    url: environment + 'api/films',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  }
  return new Promise((resolve, reject) => {
  
    request(params, (error, response, body) => {
      let results  = JSON.parse(response.body).results
      for(let i =0 ; i<results.length ; i++){
        const filmCharacters = JSON.parse(response.body).results[i].characters
        const episode_id = JSON.parse(response.body).results[i].episode_id
        if(filmCharacters.includes(url) && episodeIDs.includes(episode_id)) {  
          
          resolve(false)
        }
      }
       
       return resolve(true)
    })
  })
}

