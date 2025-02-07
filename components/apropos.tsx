"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container py-10">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">À propos de FORSSA</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg">
                    <p>
                        FORSSA est une plateforme innovante qui connecte les jeunes talents sans expérience avec des startups et
                        entreprises en quête de nouveaux profils. Notre mission est de faciliter l'accès au marché du travail en
                        offrant des outils adaptés tels que des candidatures simplifiées, des simulations d'entretiens, des quiz de
                        validation de compétences et un système de points améliorant la visibilité des candidats.
                    </p>
                    <p>
                        Nous croyons en l'égalité des chances et souhaitons offrir à chacun l'opportunité de réussir, quel que soit
                        son domaine. Que vous soyez une entreprise recherchant de nouveaux talents ou un jeune diplômé en quête
                        d'opportunités, FORSSA vous accompagne vers un avenir professionnel prometteur.
                    </p>
                    <p>Rejoignez-nous dès aujourd'hui et donnez un coup d'accélérateur à votre carrière !</p>
                </CardContent>
            </Card>
        </div>
    )
}