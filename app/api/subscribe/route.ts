// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, demo } = await req.json()

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const DATACENTER = 'us2' // change to your data center

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
    tags: demo ? ['demo'] : [],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    return NextResponse.json({ success: true })
  } else {
    const errorData = await response.json()
    return NextResponse.json({ success: false, error: errorData }, { status: 400 })
  }
}
