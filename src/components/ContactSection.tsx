import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:onggisanjaya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: t.contact.toastTitle,
      description: t.contact.toastDescription,
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={cn(
            'font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {t.contact.title}
        </h2>
        <p
          className={cn(
            'text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 px-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {t.contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div
            className={cn(
              'space-y-4 sm:space-y-6 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
              <h3 className="font-display font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                {t.contact.contactInfo}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:onggisanjaya@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.email}</p>
                    <p className="font-medium text-sm sm:text-base truncate">onggisanjaya@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+6289531310890"
                  className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.phone}</p>
                    <p className="font-medium text-sm sm:text-base">+62 895 3131 0890</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t.contact.location}</p>
                    <p className="font-medium text-sm sm:text-base">Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              'bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}
          >
            <h3 className="font-display font-bold text-lg sm:text-xl mb-4 sm:mb-6">
              {t.contact.sendMessage}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-lg sm:rounded-xl gap-2 text-sm sm:text-base"
              >
                {t.contact.sendButton}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
