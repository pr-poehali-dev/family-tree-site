import Icon from '@/components/ui/icon';

interface FeatureCardProps {
  iconName: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
}

const FeatureCard = ({ iconName, iconColor, bgColor, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className={`${bgColor} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon name={iconName} size={32} className={iconColor} />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">{title}</h3>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
