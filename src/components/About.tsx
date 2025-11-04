const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-900">
            О проекте
          </h2>
          <p className="text-lg text-slate-600 mb-6 text-center leading-relaxed">
            Bull Gateway — это современный API Gateway, созданный для упрощения управления микросервисной архитектурой. 
            Мы предоставляем мощные инструменты для маршрутизации, балансировки нагрузки и защиты ваших API.
          </p>
          <p className="text-lg text-slate-600 text-center leading-relaxed">
            Наше решение подходит как для малых проектов, так и для крупных enterprise-систем, 
            обеспечивая надежность, производительность и простоту использования.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;