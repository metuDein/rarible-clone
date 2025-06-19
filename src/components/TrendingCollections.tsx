import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { TrendingUp, TrendingDown } from "lucide-react"

const trendingCollections = [
  {
    rank: 1,
    name: "Anome OG NFT",
    image: "https://ext.same-assets.com/182763557/974502180.gif",
    floorPrice: "74.57 ETH",
    floorChange: "+4.5%",
    isFloorUp: true,
    volume: "500",
    volumeChange: "",
    items: "129",
    owners: "50"
  },
  {
    rank: 2,
    name: "Zoolini",
    image: "https://ext.same-assets.com/182763557/3220562198.gif",
    floorPrice: "0.009 ETH",
    floorChange: "",
    isFloorUp: null,
    volume: "70.6 ETH",
    volumeChange: "",
    items: "10K",
    owners: "3.9K"
  },
  {
    rank: 3,
    name: "NodePunks",
    image: "https://ext.same-assets.com/182763557/2298714346.gif",
    floorPrice: "~0.001 ETH",
    floorChange: "0%",
    isFloorUp: null,
    volume: "14.35 ETH",
    volumeChange: "+212.9%",
    items: "10K",
    owners: "3K"
  },
  {
    rank: 4,
    name: "DX Terminal",
    image: "https://ext.same-assets.com/182763557/1606132934.gif",
    floorPrice: "0.002 ETH",
    floorChange: "0%",
    isFloorUp: null,
    volume: "8.263 ETH",
    volumeChange: "+783.5%",
    items: "36.7K",
    owners: "4.8K"
  },
  {
    rank: 5,
    name: "Penguins",
    image: "https://ext.same-assets.com/182763557/3425527907.gif",
    floorPrice: "5.9 ETH",
    floorChange: "",
    isFloorUp: null,
    volume: "37.9K",
    volumeChange: "",
    items: "4K",
    owners: ""
  },
  {
    rank: 6,
    name: "Kingdom OGs",
    image: "https://ext.same-assets.com/182763557/168705788.gif",
    floorPrice: "3.3 ETH",
    floorChange: "+39.2%",
    isFloorUp: true,
    volume: "5.37 ETH",
    volumeChange: "",
    items: "999",
    owners: "3"
  },
  {
    rank: 7,
    name: "TOPU, Inc. Fragmetric",
    image: "https://ext.same-assets.com/182763557/2070463487.jpeg",
    floorPrice: "0.07 ETH",
    floorChange: "",
    isFloorUp: null,
    volume: "4.054 ETH",
    volumeChange: "",
    items: "445",
    owners: "385"
  },
  {
    rank: 8,
    name: "Replicandytrump",
    image: "https://ext.same-assets.com/182763557/974502180.gif",
    floorPrice: "0.037 ETH",
    floorChange: "-62.8%",
    isFloorUp: false,
    volume: "3.933 ETH",
    volumeChange: "+5,611.5%",
    items: "648",
    owners: "13"
  },
  {
    rank: 9,
    name: "Replicandy by Matt Furie",
    image: "https://ext.same-assets.com/182763557/3220562198.gif",
    floorPrice: "0.15 ETH",
    floorChange: "",
    isFloorUp: null,
    volume: "3.533 ETH",
    volumeChange: "",
    items: "1K",
    owners: "2"
  },
  {
    rank: 10,
    name: "Sylixtrump",
    image: "https://ext.same-assets.com/182763557/2298714346.gif",
    floorPrice: "2.909 ETH",
    floorChange: "",
    isFloorUp: null,
    volume: "",
    volumeChange: "",
    items: "62",
    owners: "12"
  }
]

export default function TrendingCollections() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Trending</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Floor price</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="w-12">#</TableHead>
                <TableHead>Collection</TableHead>
                <TableHead className="text-right">Floor price</TableHead>
                <TableHead className="text-right">Floor change</TableHead>
                <TableHead className="text-right">Volume</TableHead>
                <TableHead className="text-right">Volume change</TableHead>
                <TableHead className="text-right">Items</TableHead>
                <TableHead className="text-right">Owners</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trendingCollections.map((collection) => (
                <TableRow key={collection.rank} className="border-border hover:bg-muted/50 cursor-pointer">
                  <TableCell className="font-medium">{collection.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={collection.image} alt={collection.name} />
                        <AvatarFallback>{collection.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium hover:text-primary transition-colors">
                        {collection.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {collection.floorPrice || "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    {collection.floorChange ? (
                      <div className={`flex items-center justify-end space-x-1 ${
                        collection.isFloorUp === true ? 'text-green-500' :
                        collection.isFloorUp === false ? 'text-red-500' : 'text-muted-foreground'
                      }`}>
                        {collection.isFloorUp === true && <TrendingUp className="w-3 h-3" />}
                        {collection.isFloorUp === false && <TrendingDown className="w-3 h-3" />}
                        <span>{collection.floorChange}</span>
                      </div>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {collection.volume || "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    {collection.volumeChange ? (
                      <span className={collection.volumeChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                        {collection.volumeChange}
                      </span>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="text-right">{collection.items}</TableCell>
                  <TableCell className="text-right">{collection.owners || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/explore">View all collections</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
