import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
})

export async function POST(req: Request) {
    const { plan, companyData } = await req.json()

    const subscriptionPlans = {
        basic: { price: "price_1234", name: "Basique" },
        pro: { price: "price_5678", name: "Professionnel" },
        enterprise: { price: "price_9012", name: "Entreprise" },
    }

    const selectedPlan = subscriptionPlans[plan as keyof typeof subscriptionPlans]

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: selectedPlan.price,
                    quantity: 1,
                },
            ],
            mode: "subscription",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/company?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
            metadata: {
                companyName: companyData.name,
                companyEmail: companyData.email,
            },
        })

        return NextResponse.json({ id: session.id })
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}

