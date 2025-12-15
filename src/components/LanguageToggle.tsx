import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const LanguageToggle = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
      className={cn(
        'flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium',
        className
      )}
      aria-label={`Switch to ${language === 'en' ? 'Indonesian' : 'English'}`}
    >
      <span className={cn('transition-opacity', language === 'en' ? 'opacity-100' : 'opacity-50')}>
        EN
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={cn('transition-opacity', language === 'id' ? 'opacity-100' : 'opacity-50')}>
        ID
      </span>
    </button>
  );
};
