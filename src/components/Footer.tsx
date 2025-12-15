import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Onggi Sanjaya. {t.footer.rights}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
            {t.footer.builtWith} <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent fill-accent" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};
