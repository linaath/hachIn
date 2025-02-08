"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const applications = [
    { id: 1, job: "Chef Pâtissier", company: "La Douceur Sucrée", status: "En cours" },
    { id: 2, job: "Formateur en Cuisine", company: "École Culinaire Française", status: "Entretien" },
    { id: 3, job: "Chef de Partie", company: "Restaurant Étoilé", status: "Refusé" },
]

const quizzes = [
    { id: 1, title: "Techniques de pâtisserie", score: 80, totalQuestions: 10 },
    { id: 2, title: "Hygiène en cuisine", score: 90, totalQuestions: 15 },
    { id: 3, title: "Gestion de cuisine", score: 75, totalQuestions: 20 },
]

export default function CandidateDashboard() {
    const [activeTab, setActiveTab] = useState("applications")

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Tableau de bord Candidat</h1>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList>
                    <TabsTrigger value="applications">Candidatures</TabsTrigger>
                    <TabsTrigger value="quizzes">Quiz</TabsTrigger>
                    <TabsTrigger value="profile">Profil</TabsTrigger>
                </TabsList>

                <TabsContent value="applications">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>Vos candidatures</span>
                                <Button>Chercher des offres</Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {applications.map((app) => (
                                    <div key={app.id} className="flex items-center justify-between p-4 border rounded">
                                        <div>
                                            <h3 className="font-semibold">{app.job}</h3>
                                            <p className="text-sm text-muted-foreground">{app.company}</p>
                                        </div>
                                        <Badge variant={app.status === "Refusé" ? "destructive" : "default"}>{app.status}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="quizzes">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vos quiz</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {quizzes.map((quiz) => (
                                    <div key={quiz.id} className="space-y-2">
                                        <div className="flex justify-between">
                                            <h3 className="font-semibold">{quiz.title}</h3>
                                            <span className="text-sm text-muted-foreground">
                                                {quiz.score}/{quiz.totalQuestions}
                                            </span>
                                        </div>
                                        <Progress value={(quiz.score / quiz.totalQuestions) * 100} />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Votre profil</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold">Nom complet</h3>
                                    <p>Jean Dupont</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p>jean.dupont@email.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Téléphone</h3>
                                    <p>+33 6 12 34 56 78</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Compétences</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <Badge>Pâtisserie</Badge>
                                        <Badge>Gestion d'équipe</Badge>
                                        <Badge>Créativité culinaire</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}