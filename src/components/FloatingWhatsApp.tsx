const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="white"
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 32l6.826-2.182A15.912 15.912 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.596c-.39 1.1-1.932 2.014-3.168 2.28-.848.18-1.954.324-5.68-1.22-4.768-1.976-7.836-6.824-8.072-7.14-.226-.316-1.9-2.53-1.9-4.828s1.202-3.428 1.628-3.898c.39-.43.924-.606 1.236-.606.15 0 .286.008.408.014.426.018.64.044.92.712.35.836 1.204 2.934 1.308 3.15.106.216.212.5.072.794-.13.302-.244.436-.46.684-.216.248-.42.44-.636.708-.198.236-.42.488-.18.932.24.438 1.068 1.762 2.294 2.854 1.578 1.406 2.908 1.84 3.32 2.044.31.154.682.132.932-.126.318-.328.71-.87 1.11-1.404.284-.38.644-.428.984-.288.346.132 2.188 1.032 2.564 1.22.376.188.628.28.722.44.092.16.092.932-.298 2.032z"/>
  </svg>
);

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
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40">
        <WhatsAppIcon />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
