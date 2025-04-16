"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [wantsDemo, setWantsDemo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          demo: wantsDemo 
        }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setWantsDemo(false)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 text-center">
          Thanks for subscribing! {wantsDemo && "We'll contact you soon about scheduling a demo."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-white border-gray-300"
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="demo-checkbox"
          checked={wantsDemo}
          onChange={(e) => setWantsDemo(e.target.checked)}
          className="w-4 h-4 rounded border border-gray-500"
        />
        <label htmlFor="demo-checkbox" className="text-sm">
          I would like to schedule a demo of Bowling Champ
        </label>
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        variant="default"
        className="w-full bg-[#F84301] hover:bg-[#F84301]/90"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
