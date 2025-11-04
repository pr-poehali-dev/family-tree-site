import Icon from '@/components/ui/icon';
import FeatureCard from '@/components/FeatureCard';
import { features } from '@/data/features';

const LOGO_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/32bf72e6-9eec-4092-8b7f-332326330ee4.jpg';
const BG_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/10f21cfe-ce6d-4e44-a330-d9a436d897cf.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={BG_URL}
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src={LOGO_URL}
                alt="Ant Gateway Logo"
                className="w-24 h-24 rounded-2xl shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AntGW</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              Современное решение для управления данными между сервисами
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Icon name="Pencil" size={20} className="text-blue-300" />
              <span className="text-blue-200 font-medium">Проект в стадии проектирования</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Основные возможности
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-slate-900">
              О проекте
            </h2>
            <p className="text-lg text-slate-600 mb-6 text-center leading-relaxed">
              Ant Gateway — это современный API Gateway, созданный для упрощения управления микросервисной архитектурой. 
              Мы предоставляем мощные инструменты для маршрутизации, балансировки нагрузки и защиты ваших API.
            </p>
            <p className="text-lg text-slate-600 text-center leading-relaxed">
              Наше решение подходит как для малых проектов, так и для крупных enterprise-систем, 
              обеспечивая надежность, производительность и простоту использования.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Ant Gateway. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
