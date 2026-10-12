import { useState, type FormEvent } from 'react'
import Button from '../ui/Button'

const ESTIMATE_EMAIL = 'caue@conexionservicesfl.com'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
// Public Web3Forms access key (safe to ship in the browser). Without it, the form opens a pre-filled email instead.
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

const serviceGroups = [
  { label: 'Flooring & Interiors', services: ['Vinyl Plank Flooring', 'Laminate Flooring', 'Hardwood Flooring', 'Bathroom Remodeling', 'Kitchen Remodeling'] },
  { label: 'Home & Commercial Cleaning', services: ['Residential Cleaning', 'Commercial / Office Cleaning', 'Post-Construction Cleaning', 'Move-In / Move-Out Cleaning'] },
]

const contactMethods = ['Call', 'Text', 'Email']

type Status = 'idle' | 'sending' | 'sent' | 'error'

function buildMailto(data: FormData) {
  const field = (name: string) => String(data.get(name) ?? '').trim()
  const body = [
    `Name: ${field('name')}`,
    `Phone: ${field('phone')}`,
    `Email: ${field('email')}`,
    `City / ZIP: ${field('location')}`,
    `Service: ${field('service')}`,
    `Preferred contact: ${field('contact_method')}`,
    '',
    field('details'),
  ].join('\n')
  return `mailto:${ESTIMATE_EMAIL}?subject=${encodeURIComponent(`Free estimate request: ${field('service')}`)}&body=${encodeURIComponent(body)}`
}

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return

    if (!accessKey) {
      window.location.href = buildMailto(data)
      return
    }

    setStatus('sending')
    data.set('access_key', accessKey)
    data.set('subject', `New estimate request: ${String(data.get('service') ?? '')}`)
    data.set('from_name', 'CS Conexion Services website')
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
      const result = (await response.json()) as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Submission failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="estimate-form__done" role="status">
        <h2>Thank you! We got your request.</h2>
        <p>We&apos;ll reach out shortly to talk about your project. Need us sooner? Call <a href="tel:+19049555850">(904) 955-5850</a>.</p>
      </div>
    )
  }

  return (
    <form className="estimate-form" onSubmit={handleSubmit} aria-labelledby="estimate-form-title">
      <h2 id="estimate-form-title">Request your free estimate</h2>
      <p className="estimate-form__intro">Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>
      <div className="estimate-form__grid">
        <label>Full name *<input name="name" type="text" autoComplete="name" required /></label>
        <label>Phone *<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" /></label>
        <label>City or ZIP code *<input name="location" type="text" autoComplete="postal-code" required /></label>
        <label className="estimate-form__wide">Service *
          <select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            {serviceGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.services.map((service) => <option key={service}>{service}</option>)}</optgroup>)}
            <option>Other / Not sure yet</option>
          </select>
        </label>
        <label className="estimate-form__wide">Tell us about your project
          <textarea name="details" rows={5} placeholder="Rooms, approximate size, timeline or anything else we should know." />
        </label>
        <fieldset className="estimate-form__wide estimate-form__methods">
          <legend>Best way to reach you</legend>
          {contactMethods.map((method, index) => <label key={method}><input type="radio" name="contact_method" value={method} defaultChecked={index === 0} />{method}</label>)}
        </fieldset>
        <input className="estimate-form__trap" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>
      {status === 'error' && <p className="estimate-form__error" role="alert">Something went wrong sending your request. Please call <a href="tel:+19049555850">(904) 955-5850</a> or email <a href={`mailto:${ESTIMATE_EMAIL}`}>{ESTIMATE_EMAIL}</a>.</p>}
      <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Get My Free Estimate'}</Button>
    </form>
  )
}
