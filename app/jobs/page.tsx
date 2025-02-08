import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobs = [
    
    
    {
        id: 3,
        title: "Chef de Partie",
        company: "Restaurant Le Palmier",
        location: "Constantine, Algérie",
        type: "CDI",
        description: "Nous cherchons un chef de partie talentueux pour rejoindre notre cuisine...",
        skills: ["Travail d'équipe", "Créativité", "Gestion du stress"],
    },
    {
        id: 4,
        title: "Développeur Full Stack",
        company: "TechAlgeria",
        location: "Alger, Algérie",
        type: "CDI",
        description:
            "Rejoignez notre équipe de développement pour travailler sur des projets innovants utilisant les dernières technologies...",
        skills: ["React", "Node.js", "MongoDB", "DevOps"],
    },
    {
        id: 5,
        title: "Chef de Projet Marketing Digital",
        company: "DigitMark",
        location: "Sétif, Algérie",
        type: "CDI",
        description:
            "Nous recherchons un chef de projet marketing digital expérimenté pour gérer nos campagnes multicanales...",
        skills: ["Marketing Digital", "SEO", "Réseaux Sociaux", "Analytics"],
    },
    {
        id: 6,
        title: "Analyste Financier",
        company: "Finance Plus",
        location: "Alger, Algérie",
        type: "CDI",
        description: "Recherche d'un analyste financier pour rejoindre notre équipe de conseil en investissement...",
        skills: ["Analyse Financière", "Excel", "Modélisation", "Risk Management"],
    },
    {
        id: 7,
        title: "Architecte Cloud",
        company: "CloudTech Algérie",
        location: "Alger, Algérie",
        type: "CDI",
        description: "Conception et mise en œuvre de solutions cloud pour nos clients entreprises...",
        skills: ["AWS", "Azure", "DevOps", "Sécurité Cloud"],
    },
    {
        id: 8,
        title: "Responsable Communication",
        company: "MediaGroup",
        location: "Oran, Algérie",
        type: "CDI",
        description: "Élaboration et mise en œuvre de la stratégie de communication globale de l'entreprise...",
        skills: ["Communication", "Relations Publiques", "Gestion de Crise", "Événementiel"],
    },
    {
        id: 9,
        title: "Data Scientist",
        company: "DataAlg Solutions",
        location: "Alger, Algérie",
        type: "CDI",
        description: "Analyse de données complexes et développement de modèles prédictifs pour nos clients...",
        skills: ["Python", "Machine Learning", "SQL", "Visualisation de données"],
    },
]

export default function JobsPage() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Offres d'emploi</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <Card key={job.id}>
                        <CardHeader>
                            <CardTitle>{job.title}</CardTitle>
                            
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">{job.location}</p>
                            <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full bg-primary hover:bg-primary/90">
                                <Link href="/auth/register" className="text-white">
                                    Postuler
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

