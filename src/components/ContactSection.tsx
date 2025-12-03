import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
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
      title: 'Opening email client...',
      description: 'Your default email client should open shortly.',
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h3 className="font-display font-bold text-xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:onggisanjaya@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">onggisanjaya@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+6289531310890"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+62 895 3131 0890</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h3 className="font-display font-bold text-xl mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
