"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"  // Importing Link component

const categories = [
    { id: "company", label: "company" },
    { id: "user", label: "user" },

]
export default function SignForm() {
    const [category, setCategory] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        // Redirect to appropriate dashboard based on category
        if (category === "company") {
            router.push("/dashboard/company")  // Redirect to company dashboard page
        } else {
            router.push(`/dashboard/${category}`)  // Redirect to other category dashboards
        }
    }
    return (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Se Connecter </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Adresse email</Label>
                        <Input id="email" type="email" required placeholder="entrer votre Email"  />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" type="password" required  placeholder="entrer votre mot de passe" />
                    </div>
                    {/* Add a Select dropdown for category */}
                    <div className="space-y-2">
                        <Label htmlFor="category">Choisir la catégorie</Label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded"
                            required>
                            <option value="">Sélectionner une catégorie</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button type="submit" className="w-full text-white">
                        Démmarer
                    </Button>
                </form>
                {/* Added link to sign in en tant que entreprise */}
                {/* Added link to sign up page */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Vous n'avez pas de compte ?{" "}
                        <Link href="/auth/register" className="text-blue-500 hover:underline">
                            Cliquez ici
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}