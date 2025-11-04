import Icon from '@/components/ui/icon';

const LOGO_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/7ade3cd0-cd00-4227-8c9a-491d83d7d466.jpg';
const BG_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/1d93792a-ceb8-4718-8bd4-15a52b9d44ca.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={BG_URL}
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src={LOGO_URL}
              alt="Bull Gateway Logo"
              className="w-80 h-80 rounded-2xl shadow-2xl"
            />
          </div>
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