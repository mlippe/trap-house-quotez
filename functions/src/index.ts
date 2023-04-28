import * as functions from 'firebase-functions'
import * as cors from 'cors'

const handler = cors({ origin: true })

export const helloWorld = functions.https.onRequest((request, response) => {
  handler(request, response, () => {
    const ids = request.body.fields.quotesAutomated['en-US'].map((entry: { sys: { id: any } }) => entry.sys.id);
    const data = {
      title: request.body.fields.title['en-US'],
      videoLink: request.body.fields.videoLink['en-US'],
    }

    response.send({ message: 'Sheeesh from ze girl 🔪', data, ids })
  })
})
