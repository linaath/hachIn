import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, GraduationCap, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Trouvez votre prochain talent ou emploi avec FORSSA 
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              La plateforme qui connecte les entreprises avec les meilleurs talents dans tous les domaines
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/auth/register">Commencer maintenant</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Pour les Entreprises</h3>
              <p className="text-muted-foreground">
                Publiez des offres d'emploi, trouvez les meilleurs talents et gérez vos recrutements
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Pour les Diplômés</h3>
              <p className="text-muted-foreground">
                Créez votre profil, passez des quiz et trouvez l'emploi de vos rêves
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Recherche Intelligente</h3>
              <p className="text-muted-foreground">
                Utilisez notre système de matching avancé pour trouver les meilleures correspondances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light py-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold">Prêt à commencer ?</h2>
            <p className="mx-auto max-w-[600px] text-gray-200">
              Rejoignez FORSSA aujourd'hui et découvrez de nouvelles opportunités
            </p>
            <Button asChild size="lg" className="bg-white text-primary-light hover:bg-gray-100">
              <Link href="/auth/register" className="inline-flex items-center">
                S'inscrire maintenant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

