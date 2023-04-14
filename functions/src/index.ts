import * as functions from 'firebase-functions'
import * as cors from 'cors'

const handler = cors({ origin: true })

export const helloWorld = functions.https.onRequest((request, response) => {
  handler(request, response, () => {
    const data = {
      title: request.body.fields.title['en-US'],
      startTimestamp: request.body.fields.startTimestamp['en-US'],
      endTimestamp: request.body.fields.endTimestamp['en-US']
    }
    functions.logger.log(data)
    response.send({ message: 'Sheeesh from ze boy 🔪', data })
  })
})
