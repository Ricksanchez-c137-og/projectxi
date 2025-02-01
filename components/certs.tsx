import { Card } from "@/components/ui/card"
import { describe } from "node:test"

const technologies = [
  {
    category: "OSCP",
    describtion: [
        "OSCP is a foundational penetration testing certification, intended for those seeking a step up in their skills and career. Earning the OSCP certification demonstrates a solid understanding and practical application of penetration testing methodologies.",
    ]

  },
  {
    category: "Network+",
    describtion: ["Network+ certifies the essential skills needed to confidently design, configure, manage and troubleshoot any wired and wireless devices. CompTIA Network+ certified individuals are in-demand worldwide."]
  },
  {
    category: "KLCP",
    describtion: ["Kali Linux Certified Proffisional holders have demonstrated their ability to use kali linux effectively ."],
  },
  {
    category: "OSED",
    describtion: ["The Offensive Security Exploit Developer (OSED) certification validates expertise in developing custom exploits for Windows, focusing on buffer overflows, shellcode, and advanced reverse engineering."],
  },
]

export default function Certs() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.describtion.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

