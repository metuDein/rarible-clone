import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest insights from Rarible. By clicking send you'll receive occasional emails from Rarible.
            You always have the choice to unsubscribe within every email you receive.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <Input
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Send</Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <div className="space-y-2">
              <Link href="/explore" className="block text-muted-foreground hover:text-foreground transition-colors">
                Explore
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/jobs" className="block text-muted-foreground hover:text-foreground transition-colors">
                Jobs <span className="text-primary">We're hiring!</span>
              </Link>
              <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help center
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <Link href="/api" className="block text-muted-foreground hover:text-foreground transition-colors">
                Rarible API
              </Link>
              <Link href="/rari" className="block text-muted-foreground hover:text-foreground transition-colors">
                RARI token
              </Link>
              <Link href="/bug-bounty" className="block text-muted-foreground hover:text-foreground transition-colors">
                Bug bounty
              </Link>
              <Link href="/partner" className="block text-muted-foreground hover:text-foreground transition-colors">
                Become a partner
              </Link>
              <Link href="/branding" className="block text-muted-foreground hover:text-foreground transition-colors">
                Branding
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Join us</h4>
            <div className="space-y-2">
              <Link href="https://x.com/rarible" className="block text-muted-foreground hover:text-foreground transition-colors">
                X
              </Link>
              <Link href="https://instagram.com/rarible" className="block text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
              <Link href="https://discord.gg/rarible" className="block text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </Link>
              <Link href="https://warpcast.com/rarible" className="block text-muted-foreground hover:text-foreground transition-colors">
                Farcaster
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community Marketplaces</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Create a custom marketplace for your community powered by Rarible API
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <span className="font-semibold">Rarible, Inc.</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/community-guidelines" className="hover:text-foreground transition-colors">
              Community guidelines
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
