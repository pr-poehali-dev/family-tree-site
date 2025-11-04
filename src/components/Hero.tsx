import Icon from '@/components/ui/icon';

const LOGO_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/5e9ef9ea-bbfa-47bd-a2ae-85a40d19a830.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={LOGO_URL}
            alt="Bull Gateway Logo"
            className="w-64 h-64 rounded-2xl shadow-2xl mx-auto mb-8"
          />
          <p className="text-xl md:text-2xl text-blue-200 mb-4">
            Связываем ваши сервисы быстро и безопасно
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <Icon name="Pencil" size={20} className="text-blue-300" />
            <span className="text-blue-200 font-medium">Проект в стадии проектирования</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;