import { FormEvent, useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)
      
      // Replace with your actual API endpoint
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        setMessage('Message sent successfully!')
        e.currentTarget.reset()
      } else {
        setMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setMessage('Error sending message. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="section-container py-20 fade-in">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
          />
        </div>

        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </form>
    </div>
  )
}
