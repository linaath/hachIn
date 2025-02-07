import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="container py-10">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Restons en contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-center text-lg text-muted-foreground">
                        Une question, une suggestion ou un besoin particulier ? Contactez-nous !
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-primary" />
                                <span>support@forssa.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-primary" />
                                <span>+213 123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-primary" />
                                <span>123, Rue des Startups, Alger, Algérie</span>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <Input placeholder="Votre nom" />
                            <Input type="email" placeholder="Votre email" />
                            <Textarea placeholder="Votre message" rows={4} />
                            <Button type="submit" className="w-full text-white">
                                Envoyer
                            </Button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}