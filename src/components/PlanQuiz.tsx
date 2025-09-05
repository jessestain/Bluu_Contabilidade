import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Building, Users, DollarSign, Sparkles } from 'lucide-react';

type QuizAnswers = {
  faturamento: string;
  funcionarios: string;
};

type PlanQuizProps = {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (recommendation: string) => void;
};

const quizSteps = [
  {
    id: 'faturamento',
    question: 'Qual o faturamento médio mensal da sua empresa?',
    icon: DollarSign,
    options: [
      'Até R$ 6.750',
      'De R$ 6.751 a R$ 400.000',
      'De R$ 400.001 a R$ 6.500.000',
      'Acima de R$ 6.500.000',
    ],
  },
  {
    id: 'funcionarios',
    question: 'Quantos funcionários sua empresa possui?',
    icon: Users,
    options: ['Nenhum', '1 a 5', '6 a 50', 'Mais de 50'],
  },
];

const PlanQuiz: React.FC<PlanQuizProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const handleAnswer = (questionId: keyof QuizAnswers, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (step < quizSteps.length - 1) {
      setStep(step + 1);
    } else {
      calculateRecommendation();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setIsFinished(false);
    setRecommendation('');
    onClose();
  }

  const calculateRecommendation = () => {
    const { faturamento, funcionarios } = answers;
    let result = 'Simples Nacional';

    if (faturamento === 'Até R$ 6.750' && (funcionarios === 'Nenhum' || funcionarios === '1 a 5')) {
      result = 'MEI';
    } else if (faturamento === 'Acima de R$ 6.500.000' || funcionarios === 'Mais de 50') {
      result = 'Lucro Real';
    } else if (faturamento === 'De R$ 400.001 a R$ 6.500.000') {
      result = 'Lucro Presumido';
    }

    setRecommendation(result);
    setIsFinished(true);
  };

  const handleShowRecommendation = () => {
    onComplete(recommendation);
    resetQuiz();
  };

  if (!isOpen) return null;

  const currentStep = quizSteps[step];
  const Icon = currentStep?.icon || Sparkles;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative transform transition-all scale-100">
        <button onClick={resetQuiz} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-6 h-6" />
        </button>

        {!isFinished ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                 <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{currentStep.question}</h2>
              <p className="text-slate-500 mt-1">Passo {step + 1} de {quizSteps.length}</p>
            </div>

            <div className="space-y-3">
              {currentStep.options.map(option => (
                <button
                  key={option}
                  onClick={() => handleAnswer(currentStep.id as keyof QuizAnswers, option)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors text-lg font-medium ${
                    answers[currentStep.id as keyof QuizAnswers] === option
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentStep.id as keyof QuizAnswers]}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
              >
                {step === quizSteps.length - 1 ? 'Ver Resultado' : 'Próximo'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                 <Sparkles className="w-10 h-10 text-green-600" />
              </div>
            <h2 className="text-2xl font-bold text-slate-800">Plano recomendado para você!</h2>
            <div className="my-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <p className="text-slate-600">Com base nas suas respostas, o regime ideal é:</p>
              <p className="text-4xl font-bold text-blue-600 my-2">{recommendation}</p>
            </div>
            <button
              onClick={handleShowRecommendation}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold"
            >
              Ver planos para {recommendation}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanQuiz;
