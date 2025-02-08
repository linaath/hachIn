import ComingSoon from "@/components/coming-soon"

interface ComingSoonLayoutProps {
  title: string
}

export default function ComingSoonLayout({ title }: ComingSoonLayoutProps) {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl text-gray-300 mb-8">{title}</h1>
      <ComingSoon />
    </div>
  )
}

