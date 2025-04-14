"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [wantsDemo, setWantsDemo] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-6 text-center">
        <div className="rounded-full bg-green-100 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">You're on the list!</h3>
        <p className="text-gray-500">
          Thanks for joining our waitlist. We'll notify you when we launch.
          {wantsDemo && " We'll also reach out about scheduling your demo."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">Organization/Bowling Center</Label>
        <Input id="organization" placeholder="Enter your organization" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="demo" checked={wantsDemo} onCheckedChange={(checked) => setWantsDemo(checked as boolean)} />
        <Label htmlFor="demo" className="text-sm font-normal">
          I'd like to request a demo
        </Label>
      </div>
      <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  )
}
