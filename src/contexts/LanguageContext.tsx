import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'id';

interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    menu: string;
  };
  hero: {
    greeting: string;
    role: string;
    experience: string;
    description: string;
    sitesAndApps: string;
    contactMe: string;
    downloadCV: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    school: string;
    bootcamp: string;
    fullstack: string;
    favoritePart: string;
    coreStack: string;
    currentWork: string;
    company: string;
  };
  skills: {
    title: string;
    description: string;
    categories: {
      frontend: string;
      backend: string;
      versionControl: string;
      testing: string;
      performance: string;
      collaboration: string;
    };
  };
  experience: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
    viewDetail: string;
    visitProject: string;
    features: string;
    technologies: string;
  };
  contact: {
    title: string;
    description: string;
    contactInfo: string;
    sendMessage: string;
    email: string;
    phone: string;
    location: string;
    name: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendButton: string;
    toastTitle: string;
    toastDescription: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      greeting: 'Hello,',
      role: "I'm a",
      experience: 'with',
      description: 'I enjoy building',
      sitesAndApps: 'sites & apps',
      contactMe: 'Contact Me Here',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      paragraph1: 'After graduating from',
      paragraph2: 'with a focus on Software Engineering, I decided to pursue my passion for programming. I enrolled in a coding bootcamp at',
      paragraph3: 'and learned',
      school: 'SMK Bhakti Insani Bogor',
      bootcamp: 'Cronos Studio Indonesia',
      fullstack: 'full-stack web development',
      favoritePart: 'My favorite part of programming is the problem-solving aspect.',
      coreStack: 'I love the feeling of finally figuring out a solution to a complex problem. My core stack is',
      currentWork: "Currently, I'm working at",
      company: 'PT Bank Rakyat Indonesia (BRI)',
    },
    skills: {
      title: 'Skills & Tools',
      description: 'Technologies and tools I use to bring ideas to life.',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend & Database',
        versionControl: 'Version Control',
        testing: 'Testing',
        performance: 'Performance',
        collaboration: 'Collaboration',
      },
    },
    experience: {
      title: 'Experience & Education',
      description: 'My professional journey and educational background.',
    },
    projects: {
      title: 'My Projects',
      description: "Here are some of the projects I've worked on. Each project has helped me grow as a developer and solve real-world problems.",
      viewDetail: 'View Detail',
      visitProject: 'Visit Project',
      features: 'Features',
      technologies: 'Technologies',
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      contactInfo: 'Contact Information',
      sendMessage: 'Send a Message',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      sendButton: 'Send Message',
      toastTitle: 'Opening email client...',
      toastDescription: 'Your default email client should open shortly.',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with',
    },
  },
  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Proyek',
      contact: 'Kontak',
      menu: 'Menu',
    },
    hero: {
      greeting: 'Halo,',
      role: 'Saya seorang',
      experience: 'dengan',
      description: 'Saya senang membangun',
      sitesAndApps: 'situs & aplikasi',
      contactMe: 'Hubungi Saya',
      downloadCV: 'Unduh CV',
    },
    about: {
      title: 'Tentang Saya',
      paragraph1: 'Setelah lulus dari',
      paragraph2: 'dengan fokus pada Rekayasa Perangkat Lunak, saya memutuskan untuk mengejar passion saya dalam pemrograman. Saya mengikuti bootcamp coding di',
      paragraph3: 'dan mempelajari',
      school: 'SMK Bhakti Insani Bogor',
      bootcamp: 'Cronos Studio Indonesia',
      fullstack: 'pengembangan web full-stack',
      favoritePart: 'Bagian favorit saya dari pemrograman adalah aspek pemecahan masalah.',
      coreStack: 'Saya suka perasaan akhirnya menemukan solusi untuk masalah yang kompleks. Stack utama saya adalah',
      currentWork: 'Saat ini, saya bekerja di',
      company: 'PT Bank Rakyat Indonesia (BRI)',
    },
    skills: {
      title: 'Keahlian & Alat',
      description: 'Teknologi dan alat yang saya gunakan untuk mewujudkan ide.',
      categories: {
        frontend: 'Pengembangan Frontend',
        backend: 'Backend & Database',
        versionControl: 'Kontrol Versi',
        testing: 'Pengujian',
        performance: 'Performa',
        collaboration: 'Kolaborasi',
      },
    },
    experience: {
      title: 'Pengalaman & Pendidikan',
      description: 'Perjalanan profesional dan latar belakang pendidikan saya.',
    },
    projects: {
      title: 'Proyek Saya',
      description: 'Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap proyek telah membantu saya berkembang sebagai developer dan memecahkan masalah dunia nyata.',
      viewDetail: 'Lihat Detail',
      visitProject: 'Kunjungi Proyek',
      features: 'Fitur',
      technologies: 'Teknologi',
    },
    contact: {
      title: 'Hubungi Saya',
      description: 'Saya sedang mencari peluang baru. Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas!',
      contactInfo: 'Informasi Kontak',
      sendMessage: 'Kirim Pesan',
      email: 'Email',
      phone: 'Telepon',
      location: 'Lokasi',
      name: 'Nama',
      namePlaceholder: 'Nama Anda',
      emailPlaceholder: 'email@anda.com',
      message: 'Pesan',
      messagePlaceholder: 'Pesan Anda...',
      sendButton: 'Kirim Pesan',
      toastTitle: 'Membuka email client...',
      toastDescription: 'Email client default Anda akan segera terbuka.',
    },
    footer: {
      rights: 'Hak cipta dilindungi.',
      builtWith: 'Dibuat dengan',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
