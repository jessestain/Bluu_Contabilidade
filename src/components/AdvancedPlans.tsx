import React, { useState, useEffect } from 'react';
import { Check, Rocket, Star, Clock, ChevronDown, Sparkles } from 'lucide-react';
import PlanQuiz from './PlanQuiz';
import { trackEvent } from '../utils/analytics';

// --- INSTRUÇÕES DE CUSTOMIZAÇÃO ---
// 1. NÚMERO DE WHATSAPP: Altere o valor da constante 'whatsAppNumber' abaixo.
// 2. PREÇOS E SERVIÇOS: Modifique o conteúdo do array 'pricingData'. Você pode adicionar/remover subcategorias.
// 3. FAQ: Adicione ou altere perguntas e respostas no array 'faqData'.
// -----------------------------------

// 1. NÚMERO DE WHATSAPP
const whatsAppNumber = '5516997574247';

// 2. DADOS DOS PLANOS (PREÇOS E SERVIÇOS)
const pricingData = [
  {
    category: 'MEI',
    plans: [
      {
        name: 'Básico',
        price: '59,90',
        features: ['Abertura de empresa', 'Emissão de DAS', 'Escrituração Contábil', 'Suporte via email'],
      },
      {
        name: 'Essencial',
        price: '79,90',
        isRecommended: true,
        features: ['Tudo do Básico', 'DIRPF do sócio', 'Pró-labore', 'Suporte via WhatsApp'],
      },
      {
        name: 'Prime',
        price: '399,90',
        isFeatured: true,
        features: ['Tudo do Essencial', 'BPO Financeiro', 'Consultoria Estratégica', 'Emissão de NFs'],
      },
    ],
  },
  {
    category: 'Simples Nacional',
    subcategories: [
      {
        name: 'Serviços',
        plans: [
          {
            name: 'Básico',
            price: '189,90',
            features: ['Apuração do Simples (Anexo III ou V)', 'Obrigações (DEFIS)', 'Pró-labore dos sócios', 'Relatórios contábeis'],
          },
          {
            name: 'Essencial',
            price: '299,90',
            isRecommended: true,
            features: ['Tudo do Básico', 'Folha (até 3 funcionários)', 'Conciliação bancária', 'Atendimento WhatsApp'],
          },
          {
            name: 'Prime',
            price: '599,90',
            isFeatured: true,
            features: ['Tudo do Essencial', 'BPO Financeiro completo', 'Planejamento tributário', 'Consultor dedicado'],
          },
        ]
      },
      {
        name: 'Comércio ou Indústria',
        plans: [
          {
            name: 'Básico',
            price: '249,90',
            features: ['Apuração do Simples (Anexo I ou II)', 'Controle de estoque (orientação)', 'Obrigações (DEFIS)', 'Relatórios contábeis'],
          },
          {
            name: 'Essencial',
            price: '399,90',
            isRecommended: true,
            features: ['Tudo do Básico', 'Folha (até 5 funcionários)', 'Emissão de NFe (orientação)', 'Atendimento WhatsApp'],
          },
          {
            name: 'Prime',
            price: '799,90',
            isFeatured: true,
            features: ['Tudo do Essencial', 'Gestão de impostos sobre produtos', 'Planejamento tributário', 'Consultor dedicado'],
          },
        ]
      }
    ]
  },
  {
    category: 'Lucro Presumido',
    plans: [
      {
        name: 'Básico',
        price: '499,90',
        features: ['Apuração PIS/COFINS/IRPJ/CSLL', 'ECD e EFD', 'Obrigações acessórias', 'Suporte especializado'],
      },
      {
        name: 'Essencial',
        price: '799,90',
        isRecommended: true,
        features: ['Tudo do Básico', 'Folha (até 10 funcionários)', 'Análise de balanço', 'Consultoria fiscal'],
      },
      {
        name: 'Prime',
        price: '1.299,90',
        isFeatured: true,
        features: ['Tudo do Essencial', 'BPO Financeiro estratégico', 'Reuniões mensais', 'Contador sênior'],
      },
    ],
  },
  {
    category: 'Lucro Real',
    plans: [
      {
        name: 'Básico',
        price: '999,90',
        features: ['Apuração completa de impostos', 'LALUR', 'Entrega de obrigações', 'Contabilidade completa'],
      },
      {
        name: 'Essencial',
        price: '1.599,90',
        isRecommended: true,
        features: ['Tudo do Básico', 'Folha (até 20 funcionários)', 'Consultoria tributária', 'Gerente de contas'],
      },
      {
        name: 'Prime',
        price: '2.499,90',
        isFeatured: true,
        features: ['Tudo do Essencial', 'Planejamento tributário avançado', 'CFO as a service', 'Suporte 24/7'],
      },
    ],
  },
];

// 3. DADOS DO FAQ
const faqData = [
  {
    question: 'Posso trocar de contador a qualquer momento?',
    answer: 'Sim! A troca de contador é um direito seu e pode ser feita em qualquer mês. Nós cuidamos de todo o processo de migração para você, sem dor de cabeça.',
  },
  {
    question: 'Como funciona o atendimento e suporte?',
    answer: 'Nosso suporte é 100% digital e humanizado. Você terá acesso a canais como WhatsApp, e-mail e videochamadas para falar diretamente com um especialista sempre que precisar.',
  },
  {
    question: 'A abertura de empresa está inclusa?',
    answer: 'Sim, ao contratar qualquer plano anual, o serviço de abertura da sua empresa é gratuito. Você paga apenas as taxas governamentais.',
  },
];

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const difference = endOfDay.getTime() - now.getTime();
    
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center space-x-1">
      <Clock className="w-4 h-4" />
      <span>
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </span>
    </div>
  );
};

const AdvancedPlans: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('MEI');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [showComparator, setShowComparator] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const currentCategoryData = pricingData.find(p => p.category === activeCategory);
    if (currentCategoryData?.subcategories) {
      const defaultSubCategory = currentCategoryData.subcategories[0].name;
      setActiveSubCategory(defaultSubCategory);
      trackEvent('category_switch', 'Plans', `${activeCategory} - ${defaultSubCategory}`);
    } else {
      setActiveSubCategory(null);
      trackEvent('category_switch', 'Plans', activeCategory);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleSubCategoryClick = (subCategory: string) => {
    setActiveSubCategory(subCategory);
    trackEvent('category_switch', 'Plans', `${activeCategory} - ${subCategory}`);
  };

  const handleHireClick = (planName: string, category: string, subCategory: string | null) => {
    let label = `${category}`;
    if (subCategory) {
      label += ` - ${subCategory}`;
    }
    label += ` - ${planName}`;
    trackEvent('plan_selected', 'Plans', label);

    let messageText = `Quero contratar o plano ${planName}`;
    if (subCategory) {
      messageText += ` da subcategoria ${subCategory}`;
    }
    messageText += ` em ${category}.`;
    
    const message = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const categoryData = pricingData.find(p => p.category === activeCategory);
  const activePlans = activeSubCategory
    ? categoryData?.subcategories?.find(sc => sc.name === activeSubCategory)?.plans
    : categoryData?.plans;

  const allFeatures = Array.from(new Set(activePlans?.flatMap(p => p.features)));
  
  const handleQuizComplete = (recommendation: string) => {
    setActiveCategory(recommendation);
    setIsQuizOpen(false);
    trackEvent('quiz_complete', 'Plans', `Recommended: ${recommendation}`);
  };

  return (
    <>
      <PlanQuiz 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onComplete={handleQuizComplete}
      />
      <section id="planos" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Planos flexíveis para cada tipo de empresa
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Escolha o regime tributário e encontre o plano perfeito. Sem surpresas, sem burocracia.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl p-6 text-center mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Não sabe qual seu regime tributário?</h3>
            <p className="text-slate-600 mb-4">Responda 2 perguntas e descubra o plano ideal para sua empresa.</p>
            <button 
              onClick={() => {
                setIsQuizOpen(true);
                trackEvent('quiz_start', 'Plans', 'Clicked Descobrir meu plano');
              }}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Descobrir meu plano
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {pricingData.map(item => (
              <button
                key={item.category}
                onClick={() => handleCategoryClick(item.category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeCategory === item.category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {categoryData?.subcategories && (
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 animate-fade-in">
              {categoryData.subcategories.map(sub => (
                <button
                  key={sub.name}
                  onClick={() => handleSubCategoryClick(sub.name)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeSubCategory === sub.name
                      ? 'bg-slate-800 text-white shadow-md'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {activePlans?.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 relative overflow-hidden ${
                  plan.isFeatured
                    ? 'bg-slate-900 text-white border-2 border-blue-500 shadow-2xl'
                    : 'bg-white border border-slate-200 shadow-soft'
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute top-4 -right-12 transform rotate-45 bg-yellow-400 text-slate-900 px-8 py-1 text-xs font-bold">
                    <Star className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                    MAIS VENDIDO
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-2xl font-bold ${plan.isFeatured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  {plan.isFeatured && <Rocket className="w-6 h-6 text-blue-400" />}
                </div>
                
                <div className="mb-6">
                  <p className={`text-5xl font-bold ${plan.isFeatured ? 'text-white' : 'text-slate-900'}`}>
                    R$ {plan.price}
                    <span className={`text-lg font-normal ${plan.isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>/mês</span>
                  </p>
                </div>

                {plan.isFeatured && (
                  <div className="bg-blue-600 text-white text-xs font-semibold p-2 rounded-md mb-6 flex items-center justify-center space-x-2">
                    <span>OFERTA TERMINA EM:</span>
                    <CountdownTimer />
                  </div>
                )}

                <div className={`border-t mb-6 ${plan.isFeatured ? 'border-slate-700' : 'border-slate-200'}`}></div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${plan.isFeatured ? 'text-blue-400' : 'text-green-500'}`} />
                      <span className={`${plan.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleHireClick(plan.name, activeCategory, activeSubCategory)}
                  className={`w-full mt-8 text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group ${
                    plan.isFeatured
                      ? 'bg-white text-blue-600 hover:bg-blue-100 transform hover:scale-105'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Contratar Agora
                  {plan.isFeatured && <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowComparator(!showComparator)}
              className="bg-transparent border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {showComparator ? 'Esconder' : 'Comparar Planos'}
            </button>
          </div>

          {showComparator && (
            <div className="mt-12 overflow-x-auto animate-fade-in">
              <div className="min-w-[700px]">
                <div className="grid grid-cols-4 gap-4 bg-slate-800 text-white p-4 rounded-t-lg font-bold">
                  <div>Serviços</div>
                  {activePlans?.map(p => <div key={p.name} className="text-center">{p.name}</div>)}
                </div>
                <div className="divide-y divide-slate-200">
                  {allFeatures.map(feature => (
                    <div key={feature} className="grid grid-cols-4 gap-4 p-4 bg-white hover:bg-slate-50">
                      <div className="text-slate-700">{feature}</div>
                      {activePlans?.map(plan => (
                        <div key={plan.name} className="flex justify-center items-center">
                          {plan.features.includes(feature) ? (
                            <Check className="w-6 h-6 text-green-500" />
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-center text-3xl font-bold text-slate-900 mb-12">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left font-semibold text-slate-800 hover:bg-slate-100"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-6 pt-0 text-slate-600 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedPlans;
