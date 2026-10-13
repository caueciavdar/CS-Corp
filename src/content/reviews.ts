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

export const reviews: Review[] = []
