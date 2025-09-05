import React from 'react';
import { MessageCircle, FileCheck, Settings, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Primeiro Contato',
      description: 'Entre em contato conosco via WhatsApp ou formulário. Respondemos em até 2 horas.',
      details: ['Atendimento imediato', 'Análise das necessidades', 'Proposta personalizada']
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Análise e Proposta',
      description: 'Analisamos sua empresa e criamos uma proposta comercial personalizada.',
      details: ['Diagnóstico completo', 'Proposta detalhada', 'Precificação transparente']
    },
    {
      number: '03',
      icon: Settings,
      title: 'Implementação',
      description: 'Configuramos todos os sistemas e processos para sua empresa.',
      details: ['Migração de dados', 'Treinamento da equipe', 'Configuração de sistemas']
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Acompanhamento',
      description: 'Gestão contínua com relatórios, suporte e consultoria especializada.',
      details: ['Relatórios mensais', 'Suporte contínuo', 'Consultoria estratégica']
    }
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um processo simples e transparente para você ter a melhor contabilidade do mercado funcionando na sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-200 z-0"></div>
                )}
                
                <div className="relative z-10 text-center group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-6">
                    <div className="text-sm text-blue-600 font-semibold mb-1">Etapa {step.number}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-slate-600 mb-6">
              Entre em contato agora e tenha sua proposta personalizada em até 2 horas.
            </p>
            <a
              href="https://wa.me/5516997842645?text=Olá! Quero saber mais sobre os serviços da Bluu Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
