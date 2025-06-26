import Image from "next/image"
import { BarChart3, FolderKanban, Palette, Users, Bell, TrendingUp, LayoutDashboard, ClipboardEdit, DollarSign, Share2, Trophy } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import NewsletterForm from "@/components/newsletter-form"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/bowlingchamp-large-logo.svg"
              alt="Bowling Champ Logo"
              width={180}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </div>
          <a
            href="#waitlist"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#2563EB] px-6 text-sm font-medium text-white hover:bg-[#2563EB]/90"
          >
            Contact us
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 py-20 md:py-12">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-[3.25rem] md:leading-[1.15] text-gray-900">
                Theee modern way to run bowling tournaments
              </h1>
              <p className="mt-6 text-lg text-gray-600">Run your next tournament online with ease.</p>
            </div>

            <div className="relative mx-auto" style={{ maxWidth: "1000px" }}>
              <div className="">
                <div className="relative rounded-xl bg-white p-2 shadow-2xl" style={{ marginBottom: "-35%" }}>
                  <Image
                    src="https://fnjjtlfjqbumqcmnlnpz.supabase.co/storage/v1/object/public/tournament-images//dashboard5.png"
                    width={1000}
                    height={1000}
                    alt="Bowling tournament dashboard"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 h-64 w-64 rounded-full bg-[#FF5C29]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 h-64 w-96 bg-[#2563EB]/10 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 h-32 w-96 bg-[#2563EB]/10 -rotate-45 transform"></div>
          <div className="absolute bottom-1/4 right-1/4 h-32 w-64 bg-[#FF5C29]/10 rotate-45 transform"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Features</h2>
              <p className="mt-4 text-lg text-gray-600">
                
              </p>
            </div>

            <div className="grid gap-8 max-md:gap-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Tournament Dashboard"
                description="See exactly in real-time what's going on in your tournament with our easy to use dashboard."
              />
              <FeatureCard
                icon={<ClipboardEdit className="h-6 w-6" />}
                title="Online Registration"
                description="Your bowlers register online allowing you to easily manage your players and score reporting."
              />
              <FeatureCard
                icon={<DollarSign className="h-6 w-6" />}
                title="Collect Payments"
                description="Multiple payment methods allow bowlers to pay online before the tournament."
              />
              <FeatureCard
                icon={<Share2 className="h-6 w-6" />}
                title="Shareable Link"
                description="Bowling Champ will generate a shareable link and QR code for your tournament, so you can easily share it on social or bowling flyers."
              />
              <FeatureCard
                icon={<Bell className="h-6 w-6" />}
                title="Notifications"
                description="Notify your bowlers when important changes are made to the tournament."
              />
              <FeatureCard
                icon={<Trophy className="h-6 w-6" />}
                title="Report Tournament Results"
                description="Easily track and share the results of your tournaments. Bowlers also can see tournament results and standings in real-time."
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#2563EB] relative">
          <div className="w-full py-20" 
               style={{
                 backgroundImage: 'url("/bowlingchamp-logo.svg")',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 backgroundSize: '600px'
               }}>
            <div className="flex container mx-auto p-8 md:px-6 relative z-10 justify-center items-center bg-white rounded-md max-w-[600px]">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight">Be the first to know!</h2>
                <p className="mt-4 text-lg">
                  Sign up for our waitlist to be the first to know when we go live.
                </p>
                <div className="mt-8">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          {/* <div className="absolute top-0 right-0 h-32 w-96 bg-white/10 -rotate-45 transform"></div>
          <div className="absolute bottom-0 left-0 h-32 w-96 bg-[#FF5C29]/30 rotate-45 transform"></div> */}
        </section>

        {/* Product Section 1 */}
        <section id="product" className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Product</h2>
              <p className="mt-2 text-lg text-gray-600">Discover our advanced tournament features.</p>
            </div>

            <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-8">
              <div className="grid gap-16 md:grid-cols-2 items-center py-12">
                <div className="space-y-6 max-w-xs mx-auto md:mx-0">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900">Create a tournament in minutes</h3>
                  <p className="text-lg text-gray-600">
                    Set up your tournament with customizable formats, entry fees, and share with your bowlers.
                  </p>
                </div>
                <div className="relative mx-auto md:mx-0">
                  <div className="bg-white rounded-xl shadow-xl">
                    <Image 
                      src="https://fnjjtlfjqbumqcmnlnpz.supabase.co/storage/v1/object/public/tournament-images//tournament-detail.png" 
                      alt="Tournament Setup" 
                      width={800} 
                      height={800} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section 2 */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-8">
              <div className="grid gap-16 md:grid-cols-2 items-center py-12">
                <div className="relative mx-auto md:mx-0 order-2 md:order-1">
                  <div className="bg-white rounded-xl shadow-xl">
                    <Image 
                      src="https://bowling-champs.vercel.app/_next/image?url=https%3A%2F%2Ffnjjtlfjqbumqcmnlnpz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ftournament-images%2F%2Ftournament-results.png&w=640&q=75" 
                      alt="Tournament Setup" 
                      width={800} 
                      height={800} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-6 max-w-xs mx-auto md:mx-0 order-1 md:order-2">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900">Real-time score tracking</h3>
                  <p className="text-lg text-gray-600">
                    Bowlers enter their scores into the platform at the end of each game, saving you time and effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Section 3 */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-8">
              <div className="grid gap-16 md:grid-cols-2 items-center py-12">
                <div className="space-y-6 max-w-xs mx-auto md:mx-0">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900">Instant payouts to bowling directors</h3>
                  <p className="text-lg text-gray-600">
                    Tournament funds are automatically sent to your account, ensuring quick payouts.
                  </p>
                </div>
                <div className="relative mx-auto md:mx-0">
                  <div className="bg-white rounded-xl shadow-xl">
                    <Image 
                      src="https://bowling-champs.vercel.app/_next/image?url=https%3A%2F%2Ffnjjtlfjqbumqcmnlnpz.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ftournament-images%2F%2Fearnings.png&w=640&q=75" 
                      alt="Tournament Setup" 
                      width={800} 
                      height={800} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">What our customers say</h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <TestimonialCard
                quote="Hands down the best tournament tool I've used, and I've tried many!"
                author="Michael Wood"
                position="League Manager at OakLane Bowl"
                rating={5}
              />
            </div>
          </div>
        </section> */}

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Join the Waitlist</h2>
                  <p className="mt-2 text-lg text-gray-600">Be among the first to use Bowling Champ when we launch.</p>
                </div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">©2025 All Rights Reserved Bowling Champ</p>
            </div>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
