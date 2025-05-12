import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/forms/contact-form"


import NewsletterForm from "@/components/forms/newsletter-form"

export default function FormsPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Forms</h1>
          <p className="max-w-3xl mx-auto text-lg">All the forms available on the Creating Opportunities website.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contact" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid grid-cols-6 w-full max-w-4xl">
                <TabsTrigger value="contact">Contact</TabsTrigger>
               
                <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contact" className="max-w-4xl mx-auto">
              <ContactForm />
            </TabsContent>

    
       



            <TabsContent value="newsletter" className="max-w-4xl mx-auto">
              <NewsletterForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
