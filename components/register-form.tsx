"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { id: "company", label: "Entreprise" },
  { id: "startup", label: "Startup" },
  { id: "pastry", label: "Pâtisserie" },
  { id: "chef", label: "Chef Cuisinier" },
  { id: "training", label: "Centre de Formation" },
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

          <div className="space-y-2">
            <Label htmlFor="fullName">Nom complet</Label>
            <Input id="fullName" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Adresse email</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Numéro de téléphone</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <Input id="address" required />
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
      </CardContent>
    </Card>
  )
}

