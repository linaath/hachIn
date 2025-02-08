"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link" 

const categories = [
    { id: "company", label: "Entreprise" },
    { id: "startup", label: "Startup" },
    { id: "pastry", label: "Pâtisserie" },
    { id: "chef", label: "Chef Cuisinier" },
    { id: "training", label: "Centre de Formation" },
]

export default function SignForm() {
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
                <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-2">
                        <Label htmlFor="email">Adresse email</Label>
                        <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" type="password" required />
                    </div>

                    <Button type="submit" className="w-full">
                        S'inscrire
                    </Button>
                </form>

                {/* Added link to sign up page */}
                <div className="mt-4 text-center">
                    <p>
                        Vous n'avez pas de compte ?{" "}
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Cliquez ici pour vous inscrire
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}