import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import LatestDrops from "@/components/LatestDrops"
import TrendingCollections from "@/components/TrendingCollections"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LatestDrops />
      <TrendingCollections />
      <Footer />
    </main>
  )
}
