import React, { useState } from 'react';
import { Check, Rocket } from 'lucide-react';

// Data for pricing plans
const pricingData = [
  {
    category: 'MEI',
    plans: [
      {
        name: 'Básico',
        price: '59,90',
        features: [
          'Abertura da empresa com orientação de especialista',
          'Emissão e envio do DAS',
          'Escrituração Contábil e Fiscal',
          'Conta Bancária PJ Gratuita',
          'Suporte via email',
          'Declaração Anual MEI',
        ],
      },
      {
        name: 'Essencial',
        price: '79,90',
        features: [
          'Todos os benefícios do plano Básico',
          'Declaração de Imposto de Renda da Pessoa Física - DIRPF',
          'Pro-labore',
          'Folha de Pagamento (1 funcionário)',
          'Atendimento via Whatsapp',
        ],
      },
      {
        name: 'Prime',
        price: '399,90',
        isFeatured: true,
        features: [
          'Todos os benefícios do plano Essencial',
          'BPO - Financeiro',
          'Consultoria Financeira e Estratégica',
          'Atendimento via telefone ou chamada de vídeo',
          'Especialista dedicado a sua empresa',
          'Emissão de Notas Fiscais',
          'Sistema Financeiro Gratuito',
        ],
      },
    ],
  },
  {
    category: 'Simples Nacional',
    plans: [
      {
        name: 'Básico',
        price: '189,90',
        features: [
          'Apuração do Simples Nacional',
          'Obrigações acessórias (DEFIS)',
          'Pro-labore dos sócios',
          'Relatórios contábeis (DRE, Balancete)',
          'Suporte via e-mail e chat',
        ],
      },
      {
        name: 'Essencial',
        price: '299,90',
        features: [
          'Todos os benefícios do plano Básico',
          'Folha de pagamento (até 3 funcionários)',
          'Atendimento via WhatsApp',
          'Conciliação bancária',
          'Emissão de guias de impostos',
        ],
      },
      {
        name: 'Prime',
        price: '599,90',
        isFeatured: true,
        features: [
          'Todos os benefícios do plano Essencial',
          'Folha de pagamento (até 5 funcionários)',
          'BPO Financeiro completo',
          'Planejamento tributário anual',
          'Consultor dedicado',
        ],
      },
    ],
  },
  {
    category: 'Lucro Presumido',
    plans: [
      {
        name: 'Básico',
        price: '499,90',
        features: [
          'Apuração PIS/COFINS/IRPJ/CSLL',
          'Escrituração Contábil Digital (ECD)',
          'Escrituração Fiscal Digital (EFD)',
          'Obrigações acessórias',
          'Suporte especializado',
        ],
      },
      {
        name: 'Essencial',
        price: '799,90',
        features: [
          'Todos os benefícios do plano Básico',
          'Folha de pagamento (até 10 funcionários)',
          'Análise de balanço trimestral',
          'Consultoria fiscal',
          'Atendimento prioritário',
        ],
      },
      {
        name: 'Prime',
        price: '1.299,90',
        isFeatured: true,
        features: [
          'Todos os benefícios do plano Essencial',
          'Folha de pagamento (até 15 funcionários)',
          'BPO Financeiro e consultoria estratégica',
          'Reuniões mensais de resultado',
          'Acesso direto ao contador sênior',
        ],
      },
    ],
  },
  {
    category: 'Lucro Real',
    plans: [
      {
        name: 'Básico',
        price: '999,90',
        features: [
          'Apuração completa de impostos',
          'LALUR (Livro de Apuração do Lucro Real)',
          'Entrega de todas as obrigações',
          'Contabilidade completa',
          'Suporte via plataforma',
        ],
      },
      {
        name: 'Essencial',
        price: '1.599,90',
        features: [
          'Todos os benefícios do plano Básico',
          'Folha de pagamento (até 20 funcionários)',
          'Consultoria tributária',
          'Análise de indicadores financeiros',
          'Gerente de contas dedicado',
        ],
      },
      {
        name: 'Prime',
        price: '2.499,90',
        isFeatured: true,
        features: [
          'Todos os benefícios do plano Essencial',
          'Planejamento tributário avançado',
          'Controller como serviço (CFO as a service)',
          'Suporte a operações internacionais',
          'Atendimento 24/7 para urgências',
        ],
      },
    ],
  },
];

const Plans: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('MEI');
  const whatsAppNumber = '5511999999999';

  const activePlansData = pricingData.find(p => p.category === activeCategory);

  const getWhatsAppLink = (planName: string, category: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de contratar o plano ${planName} da categoria ${category}.`
    );
    return `https://wa.me/${whatsAppNumber}?text=${message}`;
  };

  return (
    <section id="planos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Planos flexíveis para cada tipo de empresa
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Escolha o regime tributário da sua empresa e encontre o plano perfeito para suas necessidades. Sem surpresas, sem burocracia.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {pricingData.map(item => (
            <button
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === item.category
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activePlansData?.plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.isFeatured
                  ? 'bg-slate-900 text-white border-2 border-blue-500 shadow-2xl scale-105'
                  : 'bg-white border border-slate-200 shadow-soft'
              }`}
            >
              <div className={`py-2 px-4 rounded-t-lg -mt-8 -mx-8 mb-8 ${plan.isFeatured ? 'bg-blue-600' : 'bg-blue-600'}`}>
                <h3 className="text-xl font-bold text-center text-white flex items-center justify-center">
                  {plan.name}
                  {plan.isFeatured && <Rocket className="w-5 h-5 ml-2" />}
                </h3>
              </div>
              
              <div className="mb-6">
                <p className={`text-sm ${plan.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                  A partir de
                </p>
                <p className={`text-5xl font-bold ${plan.isFeatured ? 'text-white' : 'text-slate-900'}`}>
                  R$ {plan.price}
                </p>
              </div>

              <div className={`border-t mb-6 ${plan.isFeatured ? 'border-slate-700' : 'border-slate-200'}`}></div>

              <div className="flex-grow">
                <p className={`font-bold mb-4 text-lg ${plan.isFeatured ? 'text-white' : 'text-slate-800'}`}>
                  Serviços
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${plan.isFeatured ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`${plan.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppLink(plan.name, activeCategory)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full mt-8 text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center group ${
                  plan.isFeatured
                    ? 'bg-white text-blue-600 hover:bg-blue-100'
                    : 'bg-slate-900 text-white hover:bg-slate-700'
                }`}
              >
                Contratar
                {plan.isFeatured && <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
