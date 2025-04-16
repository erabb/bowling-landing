// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: Request) {
  const { email, demo } = await req.json()
  console.log('Received request:', { email, demo }) // Log incoming request

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const DATACENTER = 'us2' // ✅ make sure this matches your API key

  if (!API_KEY || !LIST_ID || !email) {
    console.log('Missing configuration:', { API_KEY: !!API_KEY, LIST_ID: !!LIST_ID, email: !!email })
    return NextResponse.json({ error: 'Missing configuration or email' }, { status: 400 })
  }

  const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex')

  try {
    // ✅ Step 1: Upsert subscriber (safe PUT)
    console.log('Attempting to add/update subscriber')
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

    const memberData = await memberRes.json()
    console.log('Member API response:', memberData)

    if (!memberRes.ok) {
      console.error('Member API error:', memberData)
      return NextResponse.json({ success: false, error: memberData }, { status: 400 })
    }

    // Step 2: Apply tag if demo is checked
    if (demo) {
      console.log('Attempting to add demo tag')
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
                name: 'Demo',  // Changed to match existing tag name
                status: 'active',
              },
            ],
          }),
        }
      )

      // Handle empty response
      if (tagRes.status === 204) {
        // 204 means success with no content
        console.log('Tag successfully added (no content response)')
        return NextResponse.json({ success: true })
      }

      try {
        const responseText = await tagRes.text()
        console.log('Raw tag response:', responseText)
        
        const tagData = responseText ? JSON.parse(responseText) : null
        console.log('Tag API response:', tagData)

        if (!tagRes.ok) {
          return NextResponse.json({ success: false, error: tagData || 'Failed to add tag' }, { status: tagRes.status })
        }
      } catch (error) {
        console.error('Error processing tag response:', error)
        // If we get here with a 204, it's still a success
        if (tagRes.status === 204) {
          return NextResponse.json({ success: true })
        }
        return NextResponse.json({ success: false, error: 'Failed to process tag response' }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
