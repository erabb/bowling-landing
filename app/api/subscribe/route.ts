// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: Request) {
  const { email, demo } = await req.json()

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const DATACENTER = 'us2' // ✅ make sure this matches your API key

  if (!API_KEY || !LIST_ID || !email) {
    return NextResponse.json({ error: 'Missing configuration or email' }, { status: 400 })
  }

  const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex')

  // ✅ Step 1: Upsert subscriber (safe PUT)
  const memberRes = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${emailHash}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
      }),
    }
  )

  if (!memberRes.ok) {
    const errorData = await memberRes.json()
    return NextResponse.json({ success: false, error: errorData }, { status: 400 })
  }

  // ✅ Step 2: Apply tag only if demo is checked
  if (demo) {
    const tagRes = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${emailHash}/tags`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tags: [
            {
              name: 'demo',
              status: 'active',
            },
          ],
        }),
      }
    )

    if (!tagRes.ok) {
      const tagError = await tagRes.json()
      return NextResponse.json({ success: false, error: tagError }, { status: 400 })
    }
  }

  return NextResponse.json({ success: true })
}
