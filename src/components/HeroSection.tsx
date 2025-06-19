import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        {/* TrailHeads Featured Drop */}
        <div className="mb-12 relative bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/182763557/2770559676.png')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="https://ext.same-assets.com/182763557/1474350826.gif"
                  alt="TrailHeads NFT"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div>
                  <Badge className="mb-2">Minting not started yet</Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">TrailHeads</h1>
                  <p className="text-muted-foreground">by Camp Network</p>
                </div>
              </div>
              <p className="text-lg mb-6 max-w-2xl">
                Welcome to the Camp Network TrailHeads drop. With our artist Ikaa, explore the makings
                of great summer camp activities with real items from nature that come together to create the TrailHeads!
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Starts in</p>
                  <p className="text-xl font-bold">13h 41m</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="text-xl font-bold">0.01 ETH</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>

        {/* Grid of Featured Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* The Composables */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="relative mb-6">
              <Image
                src="https://ext.same-assets.com/182763557/335331430.gif"
                alt="The Composables"
                width={400}
                height={200}
                className="w-full rounded-xl"
              />
              <Badge className="absolute top-4 left-4 bg-red-500">Sold Out</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-2">The Composables</h2>
            <p className="text-muted-foreground mb-4">
              All 5,000 items have been sold out. Find yours on rarible.fun. Each of these personas
              has their own traits and represents roles that we each play in building an ecosystem
              where all chains work together as one.
            </p>
            <Button variant="outline" className="w-full">
              View on RaribleFUN
            </Button>
          </div>

          {/* RaribleFUN is Live */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="relative mb-6">
              <div className="w-full h-48 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <h3 className="text-2xl font-bold gradient-text">RaribleFUN</h3>
              </div>
              <Badge className="absolute top-4 left-4 bg-green-500">Live</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-2">RaribleFUN is Live</h2>
            <p className="text-muted-foreground mb-4">
              Meet RaribleFUN: our experimental NFT marketplace for advanced collectors, traders and creators.
              Built on MegaETH testnet, its a high-speed, community-driven platform.
            </p>
            <div className="flex space-x-2">
              <Button className="flex-1">Visit RaribleFUN</Button>
              <Button variant="outline" className="flex-1">Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
