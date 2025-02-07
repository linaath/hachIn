import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d'%C3%A9cran%202025-02-07%20143423-yGXnPeJeLNh0cJt1Lk13ILaUSaX7uK.png"
            alt="FORSSA Logo"
            width={70}
            height={2}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/auth/Apropos" className="text-foreground/60  hover:text-foreground">
            À propos
          </Link>
          <Link href="/auth/Contact" className="text-foreground/60 hover:text-foreground">
            Contact
          </Link>
          <Button asChild >
            <Link href="/auth/sign" className="text-white">Connexion</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register" className="text-white">Inscription</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

