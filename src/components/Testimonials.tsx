import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CEO',
      company: 'TechStart Solutions',
      content: 'A Bluu revolucionou nossa contabilidade. Antes perdíamos horas com questões fiscais, agora focamos 100% no crescimento da empresa. O atendimento é excepcional!',
      rating: 5,
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/3B82F6/FFFFFF?text=CS'
    },
    {
      name: 'Ana Beatriz',
      position: 'Diretora Financeira',
      company: 'Inovação Retail',
      content: 'Migrar para a Bluu foi a melhor decisão que tomamos. Os relatórios gerenciais nos ajudam a tomar decisões mais assertivas. Recomendo para qualquer empresa!',
      rating: 5,
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/10B981/FFFFFF?text=AB'
    },
    {
      name: 'Roberto Mendes',
      position: 'Proprietário',
      company: 'Construtora Prime',
      content: 'Profissionalismo e agilidade definem a Bluu. Sempre respondem rapidamente e com soluções práticas. Nossa empresa está sempre em dia com todas as obrigações.',
      rating: 5,
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/F59E0B/FFFFFF?text=RM'
    },
    {
      name: 'Marina Costa',
      position: 'Sócia',
      company: 'Consultoria Estratégica',
      content: 'A expertise da equipe da Bluu é impressionante. Eles não apenas fazem a contabilidade, mas nos ajudam com planejamento tributário que gera economia real.',
      rating: 5,
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/8B5CF6/FFFFFF?text=MC'
    },
    {
      name: 'Fernando Lima',
      position: 'Diretor',
      company: 'Logística Express',
      content: 'Desde que contratamos a Bluu, nossa vida empresarial ficou muito mais tranquila. Tudo é feito no prazo e com qualidade. Excelente custo-benefício!',
      rating: 5,
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/EF4444/FFFFFF?text=FL'
    },
    {
      name: 'Juliana Santos',
      position: 'Proprietária',
      company: 'Clínica Saúde+',
      content: 'O que mais me impressiona na Bluu é o atendimento humanizado. Mesmo sendo digital, você sente que tem pessoas reais cuidando da sua empresa.',
      rating: 5,
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/06B6D4/FFFFFF?text=JS'
    }
  ];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mais de 500 empresas confiam na Bluu para cuidar de sua contabilidade. Veja alguns depoimentos reais de nossos clientes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">
                    {testimonial.position} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 border border-slate-200">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-slate-600 text-sm">Avaliação média</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-600 text-sm">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-slate-600 text-sm">Empresas atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-slate-600 text-sm">Anos de experiência</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Seja nosso próximo cliente satisfeito!
          </h3>
          <p className="text-slate-600 mb-8">
            Junte-se a centenas de empresas que já transformaram sua contabilidade conosco.
          </p>
          <a
            href="https://wa.me/5516997842645?text=Olá! Quero ser cliente da Bluu Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
