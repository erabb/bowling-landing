import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  rating: number
}

export default function TestimonialCard({ quote, author, position, rating }: TestimonialCardProps) {
  return (
    <div className="relative">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                width={64}
                height={64}
                alt={author}
                className="h-16 w-16 object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700 mb-4">{quote}</p>
          <div className="mt-2">
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
          <div className="flex mt-2">
            {Array.from({ length: rating }).map((_, i) => (
              <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -z-10 -bottom-10 left-0 right-0 h-16 bg-gradient-to-r from-[#FF5C29]/20 via-[#2563EB]/20 to-[#FF5C29]/20 rounded-full blur-xl"></div>
    </div>
  )
}
