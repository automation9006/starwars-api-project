
import * as restApi from '../config/restAPI'
import * as Logging from '../config/Logging'

const assert = require('chai').assert

   fixture(`Home Page`)
   
 
    test('Get the list of people', async t => {
      const episodeIDs = [1,2,7]

      //this will get Darth Vader url 
         let darthVaderUrl = await restApi.getRequestForActorNameAndUrl()
         console.log(darthVaderUrl)
         const results =  await restApi.verifyActorInTheEpisodeList(darthVaderUrl,episodeIDs)
         Logging.logInfo('results  ' + results)
         assert.equal(results,true)

    });
   
  