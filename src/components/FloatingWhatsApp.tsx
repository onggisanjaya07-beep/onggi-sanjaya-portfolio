import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = '6289531310890'; // Format internasional Indonesia
  const message = 'Halo, saya ingin bertanya tentang layanan Anda.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/30">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
