import Icon from '@/components/ui/icon';

const LOGO_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/9db62e31-f8c2-4374-9acc-3b0e2e7bd1fd.jpg';
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
              className="w-32 h-32 rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">BullGW</h1>
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