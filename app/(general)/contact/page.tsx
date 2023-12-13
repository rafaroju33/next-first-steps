import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Description',
    keywords: ['description', 'Description page']
}
export default function ContactPage() {
  return (
    <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        <span className="text-7xl">Contact Page</span>
    </main>
  )
}
