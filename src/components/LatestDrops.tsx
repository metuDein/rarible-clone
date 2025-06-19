import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"

const latestDrops = [
  {
    id: 1,
    title: "skull studies",
    artist: "desultor",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/2070463487.jpeg",
    status: "Minting Now",
    price: "0.055 ETH",
    blockchain: "Ethereum"
  },
  {
    id: 2,
    title: "Little Sushi!",
    artist: "Juniper Paisley",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/3220562198.gif",
    status: "Minting Now",
    price: "2 XTZ",
    blockchain: "Etherlink"
  },
  {
    id: 3,
    title: "𝔬𝔫𝔩𝔦𝔫𝔢 𝔞𝔫𝔤𝔢𝔩𝔰",
    artist: "Petra Voice",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/2298714346.gif",
    status: "Minting Now",
    price: "0.111 ETH",
    blockchain: "Ethereum"
  },
  {
    id: 4,
    title: "Tribute to fierceness V",
    artist: "Rueby",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/974502180.gif",
    status: "Minting Now",
    price: "0.03 ETH",
    blockchain: "Shape"
  },
  {
    id: 5,
    title: "MASSIVE_PAINTER.RAW",
    artist: "xpqzl",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/3425527907.gif",
    status: "Minting Now",
    price: "3 XTZ",
    blockchain: "Etherlink"
  },
  {
    id: 6,
    title: "1mouth analog",
    artist: "miirror",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/1606132934.gif",
    status: "Minting Now",
    price: "0.02 ETH",
    blockchain: "Ethereum"
  },
  {
    id: 7,
    title: "SarahBeetson-My Portrait",
    artist: "SarahBeetson",
    artistImage: "https://ext.same-assets.com/182763557/1794240721.jpeg",
    image: "https://ext.same-assets.com/182763557/168705788.gif",
    status: "Minting Now",
    price: "10 APT",
    blockchain: "Aptos"
  }
]

export default function LatestDrops() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest drops</h2>
          <Button variant="outline" asChild>
            <Link href="/drops">Launch with Rarible</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {latestDrops.map((drop) => (
            <Card key={drop.id} className="nft-card group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={drop.image}
                    alt={drop.title}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover"
                  />
                  <Badge
                    className="absolute top-3 left-3 bg-green-500 hover:bg-green-600"
                  >
                    {drop.status}
                  </Badge>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button>Mint Now</Button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={drop.artistImage} alt={drop.artist} />
                      <AvatarFallback>{drop.artist[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{drop.artist}</span>
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {drop.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold">{drop.price}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {drop.blockchain}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/drops">View all drops</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
