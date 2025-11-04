import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/10f21cfe-ce6d-4e44-a330-d9a436d897cf.jpg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/dcb315c7-025d-47aa-bd4d-ec8fbe4f2d7b/files/32bf72e6-9eec-4092-8b7f-332326330ee4.jpg"
                alt="Ant Gateway Logo"
                className="w-24 h-24 rounded-2xl shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AntGW</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              Современное решение для управления API и микросервисами
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Icon name="Pencil" size={20} className="text-blue-300" />
              <span className="text-blue-200 font-medium">Проект в стадии проектирования</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Основные возможности
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Zap" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Высокая производительность</h3>
              <p className="text-slate-600">
                Обработка тысяч запросов в секунду с минимальной задержкой
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Безопасность</h3>
              <p className="text-slate-600">
                Встроенная защита от атак, шифрование данных и аутентификация
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Settings" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Гибкая настройка</h3>
              <p className="text-slate-600">
                Легкая конфигурация под любые требования вашего проекта
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Icon name="BarChart3" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Мониторинг</h3>
              <p className="text-slate-600">
                Детальная аналитика и логирование всех операций в реальном времени
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Network" size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Масштабируемость</h3>
              <p className="text-slate-600">
                Легко масштабируется от стартапа до enterprise-решения
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Code" size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">API первого класса</h3>
              <p className="text-slate-600">
                Интуитивный REST API и подробная документация для разработчиков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
              Дорожная карта проекта
            </h2>
            <div className="space-y-8">
              {/* Q1 2025 */}
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Q1 2025</span>
                    <h3 className="text-2xl font-bold text-slate-900">Фаза проектирования</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Разработка архитектуры системы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Определение основных компонентов и модулей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Выбор технологического стека</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Q2 2025 */}
              <div className="relative pl-8 border-l-4 border-slate-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-slate-300 rounded-full"></div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">Q2 2025</span>
                    <h3 className="text-2xl font-bold text-slate-900">Разработка MVP</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Реализация базовой маршрутизации запросов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Внедрение системы аутентификации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Базовое логирование и мониторинг</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Q3 2025 */}
              <div className="relative pl-8 border-l-4 border-slate-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-slate-300 rounded-full"></div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">Q3 2025</span>
                    <h3 className="text-2xl font-bold text-slate-900">Расширение функционала</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Балансировка нагрузки между сервисами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Rate limiting и защита от DDoS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Кэширование запросов</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Q4 2025 */}
              <div className="relative pl-8 border-l-4 border-slate-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-slate-300 rounded-full"></div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">Q4 2025</span>
                    <h3 className="text-2xl font-bold text-slate-900">Релиз v1.0</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Полная документация API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Панель администрирования</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={20} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>Публичный релиз и поддержка сообщества</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Ant Gateway. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;