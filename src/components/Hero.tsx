import Icon from '@/components/ui/icon';

const LOGO_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/5e9ef9ea-bbfa-47bd-a2ae-85a40d19a830.jpg';
const BG_URL = 'https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/1d93792a-ceb8-4718-8bd4-15a52b9d44ca.jpg';

const Hero = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src={LOGO_URL}
              alt="Bull Gateway Logo"
              className="w-80 h-80 rounded-2xl shadow-2xl"
            />
          </div>
          <p className="text-xl md:text-2xl text-slate-600 mb-4">
            Связываем ваши сервисы быстро и безопасно
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
            <Icon name="Pencil" size={20} className="text-blue-600" />
            <span className="text-slate-700 font-medium">Проект в стадии проектирования</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;