import React from 'react';

// PNG иконки для каждой категории услуг (оригинальные изображения)
export const InjectionIcon = ({ className }: { className?: string }) => (
  <img src="/injes.png" alt="Инъекционные методики" data-icon className={className} style={{ filter: 'hue-rotate(20deg) saturate(1.5)' }} />
);

export const BotoxIcon = ({ className }: { className?: string }) => (
  <img src="/botox.png" alt="Ботокс" data-icon className={className} style={{ filter: 'hue-rotate(210deg) saturate(1.5)' }} />
);

export const ContourIcon = ({ className }: { className?: string }) => (
  <img src="/kontur.png" alt="Контурная пластика" data-icon className={className} style={{ filter: 'hue-rotate(330deg) saturate(1.5)' }} />
);

export const LipIcon = ({ className }: { className?: string }) => (
  <img src="/lips.png" alt="Увеличение губ" data-icon className={className} style={{ filter: 'hue-rotate(300deg) saturate(1.5)' }} />
);

export const ThreadIcon = ({ className }: { className?: string }) => (
  <img src="/niti.png" alt="Нитевые методики" data-icon className={className} style={{ filter: 'hue-rotate(120deg) saturate(1.5)' }} />
);

export const MesotherapyIcon = ({ className }: { className?: string }) => (
  <img src="/mezo.png" alt="Мезотерапия" data-icon className={className} style={{ filter: 'hue-rotate(180deg) saturate(1.5)' }} />
);

export const ComplexIcon = ({ className }: { className?: string }) => (
  <img src="/complex.png" alt="Комплексные процедуры" data-icon className={className} style={{ filter: 'hue-rotate(45deg) saturate(1.5)' }} />
);

export const ConsultationIcon = ({ className }: { className?: string }) => (
  <img src="/consult2.png" alt="Консультации" data-icon className={className} style={{ filter: 'hue-rotate(0deg) saturate(1.5)' }} />
);

export const EducationIcon = ({ className }: { className?: string }) => (
  <img src="/obych.png" alt="Обучение" data-icon className={className} style={{ filter: 'hue-rotate(45deg) saturate(1.5)' }} />
);

export const AllServicesIcon = ({ className }: { className?: string }) => (
  <img src="/uslugi.png" alt="Все услуги" data-icon className={className} style={{ filter: 'hue-rotate(0deg) saturate(1.5)' }} />
);

export const GlazIcon = ({ className }: { className?: string }) => (
  <img src="/glaz.png" alt="Эстетика лица" data-icon className={className} style={{ filter: 'hue-rotate(260deg) saturate(1.5)' }} />
);

export const SlimIcon = ({ className }: { className?: string }) => (
  <img src="/slim.png" alt="Slim & Wellness" data-icon className={className} style={{ filter: 'hue-rotate(0deg) saturate(1.5)' }} />
);








