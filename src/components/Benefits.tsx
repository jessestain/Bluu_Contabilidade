import React from 'react';
import { Clock, Shield, TrendingUp, Users, Zap, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Agilidade total',
      description: 'Respostas em até 2 horas úteis. Sua empresa nunca para por questões contábeis.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Segurança garantida',
      description: 'Proteção total dos seus dados com certificação digital e backups automáticos.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Resultados reais',
      description: 'Relatórios gerenciais que ajudam a tomar decisões assertivas para o crescimento.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Time especializado',
      description: 'Contadores experientes dedicados ao seu segmento de negócio.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Tecnologia avançada',
      description: 'Plataforma moderna que automatiza processos e elimina retrabalho.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Award,
      title: 'Excelência comprovada',
      description: 'Mais de 15 anos no mercado com 98% de satisfação dos clientes.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Por que escolher a Bluu?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos muito mais que contabilidade tradicional. Nossa missão é ser o parceiro estratégico que sua empresa precisa para crescer com segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Empresas atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfação dos clientes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-blue-200">Tempo médio de resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
