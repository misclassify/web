"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialLinks } from "@/components/social-links"

declare global {
  interface Window {
    emailjs: any
  }
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Check if EmailJS is already loaded from layout.tsx
    if (window.emailjs) {
      setEmailJSLoaded(true)
      return
    }

    // If not loaded, load it manually
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        setEmailJSLoaded(true)
      }
    }
    document.body.appendChild(script)

    return () => {
      // Only remove if we added it
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!emailJSLoaded) {
      setError("Email service is still loading. Please try again in a moment.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await window.emailjs.send("service_smer5wp", "template_ygimfns", {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      })

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("Failed to send your message. Please try again or contact me directly at misclassifyy@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 py-16 md:px-6 md:py-24 animate-fade-in">
      <div className="mb-12">
        <Link href="/" passHref>
          <Button variant="ghost" className="gap-1 pl-0 mb-4 group">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Have a project idea or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 rounded-full bg-primary/20 p-2">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I'll respond to your message as soon as possible.
                </p>
                <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" value={formState.name} onChange={handleChange} required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="subject" className="font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="text-destructive text-sm">{error}</p>}
                <Button type="submit" className="w-full hover-lift" disabled={isSubmitting || !emailJSLoaded}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Fallback contact method */}
                <div className="text-center mt-2">
                  <p className="text-sm text-muted-foreground">
                    Or email me directly at{" "}
                    <a href="mailto:misclassifyy@gmail.com" className="text-primary hover:underline">
                      misclassifyy@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6 animate-slide-up-delayed">
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>You can also reach out to me on these platforms.</CardDescription>
            </CardHeader>
            <CardContent>
              <SocialLinks className="flex-col items-start gap-4" showLabels />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Collaboration Information</CardTitle>
              <CardDescription>Interested in working together?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I'm open to collaborating on interesting Minecraft mod development, Discord bot creation, and community
                management projects. Let's discuss how we can create something amazing together.
              </p>
              <Link href="/commissions" passHref>
                <Button variant="outline" className="w-full hover-lift">
                  View Collaboration Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
