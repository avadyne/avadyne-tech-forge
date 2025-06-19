
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Shield, Users, Zap, TestTube, Rocket, Brain, Building } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Zap,
      title: "DevOps & Cloud Engineering",
      description: "Build fast, scale smart with CI/CD pipelines and cloud-native environments.",
    },
    {
      icon: Brain,
      title: "AI Engineering & ML Solutions",
      description: "Transform your business with cutting-edge AI and machine learning solutions.",
    },
    {
      icon: Rocket,
      title: "Technical Support for Startups",
      description: "Accelerate your startup journey with comprehensive technical support and expertise.",
    },
    {
      icon: Building,
      title: "Solution Engineering for Startups",
      description: "High-tech scaling solutions designed specifically for startups to build fast and scale efficiently.",
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Optimization",
      description: "Secure, scalable, and cost-efficient cloud solutions.",
    },
    {
      icon: TestTube,
      title: "QA Automation & Testing",
      description: "Robust test strategies and automation frameworks for release confidence.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              High-Impact
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Tech Solutions
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Avadyne, we deliver technology solutions that are tailored to your business goals.
              Transform your infrastructure, accelerate development, and scale with confidence. Led by IIM alumni with deep technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/services"
                className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From DevOps automation to AI engineering and startup scaling, we cover the full spectrum of modern tech solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
            <Link
              to="/services"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Global Presence, Local Excellence
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Headquartered in Tallinn, Estonia, Europe with our delivery center in India. We combine European quality standards with cost-effective global talent to deliver exceptional results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">🇪🇪 European HQ</h3>
                <p className="text-gray-300 text-sm">Tallinn, Estonia</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">🇮🇳 Delivery Center</h3>
                <p className="text-gray-300 text-sm">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1.7s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Tech Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Avadyne can accelerate your business with cutting-edge technology solutions and startup scaling expertise.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
