import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'pricing page',
    description: 'pricing description',
    keywords: ['best prices', 'price keyword']
}

export default function PricingPage() {
  return (
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        <span className="text-7xl">Pricing Page</span>
      </main>
  )
}
