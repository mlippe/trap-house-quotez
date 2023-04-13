import * as functions from 'firebase-functions'
import * as cors from 'cors'

const handler = cors({ origin: true })

export const helloWorld = functions.https.onRequest((_, response) => {
  handler(_, response, () => {
    response.send({ message: 'Sheeesh from ze boy 🔪' })
  })
})
