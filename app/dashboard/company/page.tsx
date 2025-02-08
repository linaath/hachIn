"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanyDashboard() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Tableau de bord Entreprise</h1>
            <Tabs defaultValue="jobs" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="jobs">Offres d'emploi</TabsTrigger>
                    <TabsTrigger value="candidates">Candidats</TabsTrigger>
                    <TabsTrigger value="points">Points & Visibilité</TabsTrigger>
                </TabsList>

                <TabsContent value="jobs">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>Vos offres d'emploi</span>
                                <Button>Publier une offre</Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Aucune offre publiée pour le moment.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="candidates">
                    <Card>
                        <CardHeader>
                            <CardTitle>Candidats</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Aucun candidat pour le moment.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="points">
                    <Card>
                        <CardHeader>
                            <CardTitle>Points & Visibilité</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center p-6">
                                <div className="text-4xl font-bold text-primary mb-2">0</div>
                                <p className="text-muted-foreground">Points accumulés</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
} 



