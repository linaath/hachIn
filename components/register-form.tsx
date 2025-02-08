"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"  // Importing Link component

const categories = [
  { id: "company", label: "Entreprise / Startup / Commercant " },
  { id: "demandeur d'emploi", label: "demandeur d'emploi" },
]

export default function RegisterForm() {
  const [category, setCategory] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // Redirect to appropriate dashboard based on category
    router.push(`/dashboard/${category}`)
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Créer un compte</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nom complet</Label>
            <Input id="fullName" required placeholder="entrer votre nom et prenom" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Adresse email</Label>
            <Input id="email" type="email" required placeholder="entrer votre add email " />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" required placeholder="entrer votre mot de passe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <Input id="address" required placeholder="entrer votre add" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Catégorie</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {category && (
            <div className="space-y-2">
              <Label htmlFor="document">Document requis</Label>
              <Input id="document" type="file" accept=".pdf,.jpg,.png" required />
              <p className="text-sm text-muted-foreground">
                {category === "company" || category === "startup" ? "Registre du commerce" : "Diplôme ou certification"}
              </p>
            </div>
          )}
          <Button type="submit" className="w-full text-white">
            S'inscrire
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <p>
            Vous avez déja un compte ?{" "}
            <Link href="/auth/sign" className="text-blue-500 hover:underline">
              Cliquez ici
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}