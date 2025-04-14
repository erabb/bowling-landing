"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [wantsDemo, setWantsDemo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  if (isSubmitted) {
    return <div className="bg-white/10 rounded-lg p-3 text-white">Thanks for subscribing! We'll keep you updated.</div>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-white border-gray-500"
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="demo-checkbox"
          checked={wantsDemo}
          onChange={(e) => setWantsDemo(e.target.checked)}
          className="w-4 h-4 rounded border border-black"
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
    </form>
  )
}
