"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"
import TechStack from "@/components/tech-stack"
import Certs from "@/components/certs"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Mohamed Nofal</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button
  variant="outline"
  className="ml-auto"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Mohamed-Nofal-Resume.pdf";  
    link.download = "Mohamed-Nofal-Resume.pdf";     
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Resume
</Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Penetration Tester & DevOps Engineer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  
Securing digital infrastructures while optimizing operations through automation. Specialized in penetration testing, threat detection, incident response, and deploying robust, scalable systems with DevOps methodologies.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Ricksanchez-c137-og" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/vaxene/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/vaxene1" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">X</span>
                  </Button>
                </Link>
                <Link href="mailto:mohamed.nofal@vax-labs.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Web Application Penetration Testing Lab"
                description="I designed, developed, and rigorously tested a series of web applications leveraging TypeScript, React, Next.js, and Tailwind CSS—both to deliver dynamic user experiences and to serve as a research platform for security and penetration testing. Using specialized tools like BurpSuite, I performed comprehensive assessments that uncovered and exploited critical vulnerabilities such as SQL injection, cross-site scripting (XSS), and privilege escalation. This process not only evaluated and strengthened the applications’ defense mechanisms, but also significantly deepened my expertise in full-stack development and web security, solidifying a secure-by-design approach that informs every stage of my software development lifecycle."
                image="/burp.png?height=400&width=600"
                link="https://github.com"
                tags={["ELK Stack", "Python", "SIEM", "Burpsuite", "OWASP"]}
              />
              <ProjectCard
                title="CI/CD Pipeline for Microservices"
                description="Designed and deployed a high-performance CI/CD pipeline leveraging Jenkins, Docker, and Kubernetes, enabling fully automated build, test, and deployment workflows for a microservices architecture. Integrated GitHub Actions for version control automation, ensuring rapid and reliable code delivery. Implemented containerized environments with Kubernetes for seamless orchestration, scalability, and efficient resource utilization. Optimized deployment strategies with blue-green and canary releases, reducing downtime and enhancing system reliability. Established automated security scanning and compliance checks to reinforce infrastructure integrity and resilience."
                image="/ci-cd.jpeg?height=400&width=600"
                link="https://github.com"
                tags={["Jenkins", "Docker", "Kubernetes, Automation, Scalability"]}
              />
              <ProjectCard
              title="Vax-Labs.com – Scalable Cloud Infrastructure for a Startup"
              description="
                   Engineered a fully automated, scalable cloud infrastructure for Vax-Labs.com using Terraform, Docker, and Ansible, ensuring seamless deployment and efficient resource provisioning. Developed CI/CD pipelines with Jenkins and GitHub Actions, automating software delivery, testing, and security compliance across cloud environments. Implemented AWS-based architecture with infrastructure-as-code (IaC) principles, enhancing system resilience, scalability, and cost efficiency. Integrated real-time monitoring, auto-healing, and backup automation to guarantee uptime and reliability. Streamlined DevOps workflows, reducing deployment time, minimizing manual intervention, and aligning infrastructure with security and compliance best practices to support VaxLabs' growth and innovation."
                image="/vax-labs.png?height=400&width=600"
               link="https://github.com/Ricksanchez-c137-og/Active-Directory-Lab"
                tags={["Terraform", "AWS", "Jenkins", "Docker", "Ansible", "CI/CD", "Infrastructure-as-Code", "Automation", "Security"]}
              />
              <ProjectCard
              title="Active Directory Lab – Red Team & Blue Team Exercises"
              description="
                Designed and deployed a simulated Active Directory environment for red team and blue team exercises, enabling security professionals to practice offensive and defensive techniques. Configured domain controllers, group policies, and user accounts to replicate real-world scenarios, facilitating hands"
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Ricksanchez-c137-og/Active-Directory-Lab"
                tags={["Active Directory", "Red Team", "Blue Team", "Security"]}
              />
              <ProjectCard
                title="Network Security Monitoring with ELK Stack"
                description="Implemented an ELK Stack-based network security monitoring system to detect and analyze security incidents, threats, and vulnerabilities across network traffic. Configured Logstash to collect and parse logs from network devices, servers, and applications, enabling real-time log analysis and visualization with Kibana. Developed custom dashboards and alerts to monitor network traffic, detect anomalies, and respond to security incidents promptly. Enhanced threat detection capabilities with machine learning algorithms, statistical analysis, and threat intelligence feeds, enabling proactive security measures and incident response."
                image="/elk.png?height=400&width=600"
                link="https://github.com"
                tags={["ELK Stack", "Python", "SIEM"]}
              />
              <ProjectCard 
                title="Azure with K8 and Docker"
                description="
                  I designed and deployed a scalable Active Directory (AD) environment on Azure, ensuring centralized identity management, security policies, and seamless authentication across cloud resources. The environment included Azure AD Domain Services, synchronized with on-premises AD, enabling secure user authentication, group policies, and access control.

                  To support containerized workloads, I implemented Docker and Kubernetes (AKS - Azure Kubernetes Service), ensuring efficient orchestration, automated scaling, and high availability for microservices. Leveraging Infrastructure as Code (IaC) with Terraform, I provisioned cloud resources dynamically, streamlining deployment processes and enhancing infrastructure resilience.

                  For software delivery, I built and maintained CI/CD pipelines using Jenkins and GitHub Actions, automating testing, building, and deployment of applications across environments. This reduced deployment times, minimized human errors, and ensured reliable rollouts. Additionally, I integrated monitoring and logging solutions such as Azure Monitor and Prometheus, providing real-time observability and proactive alerting for system performance and security.

                  By continuously managing and optimizing the Active Directory environment, ensuring compliance, security, and automation, I enabled a robust and scalable cloud infrastructure that seamlessly supports both traditional and modern cloud-native applications."  
                image="/Azure.png?height=400&width=600"
                link="https://github.com"
                tags={["Azure", "Kubernetes", "Docker", "Active Directory", "CI/CD", "Terraform", "IaC", "Automation", "Security"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Certifications
              </h2>
              <Certs/>
          </div>

        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Vaxene All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          </nav>
        </div>
      </footer>
    </div>
  )
}
