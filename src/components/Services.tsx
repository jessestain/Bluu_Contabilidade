import React from 'react';
import { Calculator, FileText, Building, TrendingUp, Users, Briefcase } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade Completa',
      description: 'Escrituração fiscal, balancetes, DRE e todas as obrigações contábeis da sua empresa.',
      features: ['Escrituração fiscal', 'Balancetes mensais', 'DRE detalhado', 'Balanço patrimonial']
    },
    {
      icon: FileText,
      title: 'Obrigações Fiscais',
      description: 'Cuidamos de todas as declarações e impostos para manter sua empresa sempre em dia.',
      features: ['IRPJ e CSLL', 'PIS/COFINS', 'ICMS/ISS', 'Declarações mensais']
    },
    {
      icon: Building,
      title: 'Abertura de Empresas',
      description: 'Processo completo de constituição da sua empresa de forma rápida e desburocratizada.',
      features: ['Registro na Junta', 'CNPJ e inscrições', 'Alvarás e licenças', 'Enquadramento tributário']
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Estratégica',
      description: 'Orientação especializada para decisões financeiras e tributárias estratégicas.',
      features: ['Planejamento tributário', 'Análise de viabilidade', 'Reestruturação societária', 'Otimização fiscal']
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Gestão completa de RH, folha de pagamento e obrigações trabalhistas.',
      features: ['Folha de pagamento', 'eSocial e FGTS', 'Admissões e demissões', 'Férias e 13º salário']
    },
    {
      icon: Briefcase,
      title: 'BPO Financeiro',
      description: 'Terceirização completa do seu departamento financeiro com tecnologia de ponta.',
      features: ['Contas a pagar/receber', 'Fluxo de caixa', 'Conciliação bancária', 'Relatórios gerenciais']
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluções completas em contabilidade, fiscal e gestão para empresas de todos os portes. Tudo que você precisa em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                  Saiba mais
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Precisa de um serviço personalizado?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Nossa equipe está pronta para criar uma solução sob medida para sua empresa.
            </p>
            <a
              href="https://wa.me/5516997842645?text=Olá! Preciso de um orçamento personalizado para minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Solicitar Orçamento Personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
