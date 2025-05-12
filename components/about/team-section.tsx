import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Prajwal Bhattarai",
      position: "Senior Strategic Advisor & CEO",

      image: "/assets/prajwal.jpeg",
      social: {
        facebook: "https://www.facebook.com/prajwal7bhattarai",
        twitter:
          "https://x.com/AcademicPrajwal?fbclid=IwAR0Qm_GYpYHS1KohRUWH_lo31I46S326Zv-JxHTCgyiaPXLjX4ACdKsz4Ms",
        linkedin: "https://www.linkedin.com/in/prajwalbhattarai7/",
      },
    },
    {
      name: " Sujit k. Chaudhary",
      position: " CEO & Managing Director",

      image: "/assets/sujit.jpg",
      social: {
        facebook: "https://www.facebook.com/sujit.chaudhary.14661",
        twitter:
          "https://x.com/AcademicPrajwal?fbclid=IwY2xjawKDuwdleHRuA2FlbQIxMABicmlkETE3TjFjQkVYTmtKVnRYUkd6AR7Wy-Z8-ocoRuJmoN1qMJEPnUStLvhxxYrsC2iGNJlgWnJe5xMyI8M1g1oh3g_aem_-b4W89uu3Biad0fxnRMeDg",
        linkedin: "https://www.linkedin.com/in/prajwalbhattarai7/",
      },
    },
    {
      name: "Prasanna Dhungel ",
      position: "Head of IT",
      bio: "Rajesh specializes in building strategic partnerships with organizations across sectors.",
      image: "/assets/prassanna.jpg",
      social: {
        facebook: "https://www.facebook.com/prasanna.dhungel.5",
        twitter: "https://x.com/PrasannaDhungel",
        linkedin: "https://www.linkedin.com/in/prasanna-dhungel-923285178/",
      },
    },
    {
      name: "Bibek Yonzon",
      position: "Legal Counselors",
      bio: "Priya oversees the development and implementation of our training and development programs.",
      image: "/assets/bibek.jpg",
      social: {
        facebook: "https://www.facebook.com/bibek.yonzon.2025",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/bibek-yonjan-25ab021a7/",
      },
    },
    {
      name: "Ashmit Kumar Jha",
      position: " Research Officer / Program Coordinator",
      bio: "Michael leads our marketing efforts with innovative strategies to reach our target audience.",
      image: "/assets/assmit.jpg",
      social: {
        facebook: "https://www.facebook.com/ashmitayushjha",

        twitter: "https://x.com/jha_ashmit",
        linkedin: "https://www.linkedin.com/in/ashmit-kr-jha-aayush-a16385259/",
      },
    },
    {
      name: "Ritika Shah",
      position: "Communication Officer",
      bio: "Sarah helps individuals identify and pursue opportunities aligned with their career goals.",
      image: "/assets/ritika.jpg",
      social: {
        facebook: "https://www.facebook.com/ritikaxshah",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Aayush Chaudhary ",
      position: "Program Coordinator",
      bio: "David ensures our digital platforms provide seamless experiences for all users.",
      image: "/assets/aayush.jpg",
      social: {
        facebook: "https://www.facebook.com/zen.ith.5623",
        twitter: "https://x.com/aayush001?fbclid=IwY2xjawKDvY9leHRuA2FlbQIxMABicmlkETE3TjFjQkVYTmtKVnRYUkd6AR7NCy0yQv8O1fLbkzjvHEujJvIaKVs6MljQCjXb7Va5SliAiYlVJMnyv45lJg_aem_bdFeWgApvgBcOlFHuKgdew",
        linkedin: "https://www.linkedin.com/in/aayush-chaudhary-7b5959213/",
      },
    },
   
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals who work tirelessly to create
            opportunities and transform lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <a
                          href={member.social.facebook}
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300"
                          aria-label={`${member.name}'s Facebook`}
                        >
                          <Facebook size={16} className="text-white" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter size={16} className="text-white" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin size={16} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-[#121d3e]">
                    {member.name}
                  </h3>
                  <p className="text-[#0e9aa7] font-medium mb-2">
                    {member.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
