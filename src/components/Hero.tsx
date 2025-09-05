import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Mais de 500 empresas atendidas
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transforme sua
                <span className="text-blue-600 block">contabilidade</span>
                em vantagem competitiva
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Cuidamos de toda parte fiscal e contábil da sua empresa para que você possa focar no que realmente importa: fazer seu negócio crescer.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                'Atendimento 100% digital e humanizado',
                'Suporte especializado via WhatsApp',
                'Relatórios gerenciais em tempo real',
                'Economia de até 40% vs. concorrência'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Quero uma proposta gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/5516997842645?text=Olá! Gostaria de saber mais sobre os serviços da Bluu Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Empresas atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-600">Avaliação clientes</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <div className="text-green-600 font-bold text-lg">✓</div>
                      <div className="text-xs text-green-700">Em dia</div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <div className="text-blue-600 font-bold text-lg">📊</div>
                      <div className="text-xs text-blue-700">Relatórios</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-bold">100%</div>
              <div className="text-xs">Digital</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-bold">24/7</div>
              <div className="text-xs">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
