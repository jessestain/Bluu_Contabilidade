import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Bluu</h1>
              <p className="text-sm text-slate-600 -mt-1">CONTABILIDADE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('planos')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Fale Conosco
            </button>
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center text-slate-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>(16) 99784-2645</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Mail className="w-4 h-4 mr-1" />
              <span>contato@bluucontabilidade.com.br</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('planos')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left"
              >
                Fale Conosco
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center text-slate-600 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(16) 99784-2645</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contato@bluucontabilidade.com.br</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
