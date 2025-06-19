
import { Code, Cloud, Shield, Users, Zap, TestTube } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "DevOps & Cloud Engineering",
      description: "Build fast, scale smart. We design and manage CI/CD pipelines, infrastructure-as-code, and cloud-native environments (AWS, Azure, GCP) with automation at the core.",
      features: ["CI/CD Pipeline Design", "Infrastructure as Code", "Container Orchestration", "Monitoring & Alerting"],
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Optimization",
      description: "Whether you're moving to the cloud or improving existing infrastructure, we ensure secure, scalable, and cost-efficient solutions.",
      features: ["Cloud Strategy Planning", "Migration Roadmaps", "Cost Optimization", "Performance Tuning"],
    },
    {
      icon: TestTube,
      title: "QA Automation & Testing",
      description: "We implement robust test strategies, automation frameworks, and CI-integrated quality checks to boost your release confidence.",
      features: ["Test Automation Frameworks", "Performance Testing", "Security Testing", "Quality Assurance"],
    },
    {
      icon: Code,
      title: "Software Development",
      description: "From MVPs to enterprise-grade systems, we build backend services, APIs, and full-stack applications using modern frameworks and best practices.",
      features: ["Full-Stack Development", "API Design & Development", "Microservices Architecture", "Modern Frameworks"],
    },
    {
      icon: Shield,
      title: "Security & Compliance Readiness",
      description: "Security is built in—not bolted on. We help you enforce DevSecOps, IAM, and compliance checks that fit your industry standards.",
      features: ["DevSecOps Implementation", "Identity & Access Management", "Compliance Audits", "Security Best Practices"],
    },
    {
      icon: Users,
      title: "Offshore Engineering Teams",
      description: "Need extended teams at a lean cost? Our India-based experts, led and quality-assured from Europe, offer top-tier skills without the overhead.",
      features: ["Dedicated Teams", "European Quality Standards", "Cost-Effective Solutions", "Seamless Communication"],
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Tech Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  <service.icon className="text-purple-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to leverage cutting-edge technology for your business? Our team is here to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </Link>
            <a
              href="https://avadyne.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Visit avadyne.eu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
