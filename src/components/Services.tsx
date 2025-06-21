
import { FileText, Brain, Users, BarChart3, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "AI Resume Analysis",
      description: "Get detailed insights on your resume with AI-powered analysis. Identify strengths, weaknesses, and improvement areas.",
      features: ["Keyword optimization", "Format suggestions", "Industry-specific tips", "ATS compatibility check"],
      color: "blue"
    },
    {
      icon: Brain,
      title: "AI Mock Interviews",
      description: "Practice with our AI interviewer that adapts to your role and experience level. Get real-time feedback.",
      features: ["Role-specific questions", "Real-time feedback", "Performance analytics", "Improvement roadmap"],
      color: "green"
    },
    {
      icon: Target,
      title: "Job Role Matching",
      description: "Discover perfect job roles based on your skills, experience, and career goals using advanced matching algorithms.",
      features: ["Skill-based matching", "Salary insights", "Growth potential", "Market demand analysis"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
      case 'green':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'purple':
        return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30';
      default:
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Comprehensive career development tools powered by artificial intelligence 
            to help you succeed in your professional journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/20">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12 dark:text-white">
            How It Works
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Upload Resume", desc: "Upload your resume in PDF or DOC format" },
              { step: "2", title: "AI Analysis", desc: "Our AI analyzes your resume and provides insights" },
              { step: "3", title: "Get Matches", desc: "Discover job roles perfect for your profile" },
              { step: "4", title: "Practice Interview", desc: "Take AI mock interviews and improve" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 dark:bg-blue-800 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
