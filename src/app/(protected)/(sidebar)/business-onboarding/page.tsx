import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface Template {
  id: string;
  name: string;
  image: string;
}

const templates: Template[] = [
  { id: "cafe", name: "Cafe Template", image: "/templates/cafe.png" },
  { id: "restaurant", name: "Restaurant Template", image: "/templates/restro.png" },
  { id: "retail", name: "Retail Template", image: "/templates/shop.png" },
  { id: "salon", name: "Salon Template", image: "/templates/salon.png" },
  { id: "spa", name: "Spa Template", image: "/templates/spa.png" },
  { id: "deli", name: "Deli Template", image: "/templates/deli.png" },
  { id: "bakery", name: "Bakery Template", image: "/templates/bakery.png" },
]

const DesignTemplate = () => {
  return (
    <div className="container max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-12">Choose a Template</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <Link href={`/business-onboarding/edit/${template.id}`} key={template.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </CardContent>
              <CardFooter>
                <h3 className="text-lg font-semibold text-center w-full py-2">{template.name}</h3>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DesignTemplate