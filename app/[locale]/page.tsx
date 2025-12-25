import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  )
}


