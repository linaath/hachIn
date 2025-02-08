"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CompanyDashboard() {
    const [showForm, setShowForm] = useState(false);
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobs, setJobs] = useState([]);

    const handlePublish = (e) => {
        e.preventDefault();
        if (jobTitle && jobDescription) {
            setJobs([...jobs, { title: jobTitle, description: jobDescription }]);
            setJobTitle("");
            setJobDescription("");
            setShowForm(false);
        }
    };

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
                                <Button onClick={() => setShowForm(true)}>Publier une offre</Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {showForm && (
                                <form onSubmit={handlePublish} className="space-y-4">
                                    <Input
                                        type="text"
                                        placeholder="Titre de l'emploi"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        required
                                    />
                                    <Textarea
                                        placeholder="Description de l'emploi"
                                        value={jobDescription}
                                        onChange={(e) => setJobDescription(e.target.value)}
                                        required
                                    />
                                    <Button type="submit">Publier</Button>
                                    <Button variant="outline" onClick={() => setShowForm(false)}>Annuler</Button>
                                </form>
                            )}
                            {jobs.length === 0 ? (
                                <p className="text-muted-foreground">Aucune offre publiée pour le moment.</p>
                            ) : (
                                <ul className="space-y-4 mt-4">
                                    {jobs.map((job, index) => (
                                        <li key={index} className="border p-4 rounded-md">
                                            <h3 className="font-bold">{job.title}</h3>
                                            <p>{job.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
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
    );
}
