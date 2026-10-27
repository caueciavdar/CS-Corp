// Real client reviews only (docs/BUSINESS_RULES.md). Copy each one exactly as the client wrote it
// on Google, with the client's permission. Newest first. While the list is empty, the Home shows
// "Client reviews coming soon."
//
// Example of one entry:
// {
//   customerName: 'First name + last initial',
//   reviewText: 'The review text, word for word.',
//   rating: 5,
//   source: 'Google',
//   date: '2026-10-14',
// },

export type Review = {
  customerName: string
  reviewText: string
  rating: number
  source: string
  date: string
}

export const reviews: Review[] = [
  {
    customerName: 'Aariana H.',
    reviewText: "I was very pleased with this company's work; the guys who did the job were very polite and quick. I am very happy with the result.",
    rating: 5,
    source: 'Google',
    date: '2026-10-27',
  },
  {
    customerName: 'Moses N.',
    reviewText: 'I had the LVP flooring replaced in my home, and I’m very happy with the results! Affordable pricing, fast service, and great quality work. The team was professional, reliable, and easy to work with.',
    rating: 5,
    source: 'Google',
    date: '2026-10-23',
  },
  {
    customerName: 'Jazmine V.',
    reviewText: 'The team was very professional and timely. They were thorough getting everything done with detail. I loved working with them, especially how clean everything looked afterwards. Great team!',
    rating: 5,
    source: 'Google',
    date: '2026-10-14',
  },
]
