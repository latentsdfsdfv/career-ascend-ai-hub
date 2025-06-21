
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            About CareerAI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            We're revolutionizing career development with AI-powered tools that help professionals 
            achieve their career goals faster and more efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              At CareerAI, we believe everyone deserves to reach their full professional potential. 
              Our advanced AI technology analyzes resumes, identifies strengths and gaps, and provides 
              personalized recommendations to accelerate career growth.
            </p>
            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              Through intelligent resume analysis and realistic interview simulations, we prepare 
              professionals for success in today's competitive job market.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-blue-900/50">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">50K+ Users</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Trust our platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-green-900/50">
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">89% Success</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Job placement rate</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-purple-900/50">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">4.9 Rating</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">User satisfaction</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 dark:bg-orange-900/50">
                  <Target className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">AI Powered</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Smart analysis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white dark:from-blue-700 dark:to-indigo-700">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their career growth with CareerAI's 
            intelligent analysis and personalized recommendations.
          </p>
          <button 
            onClick={() => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
