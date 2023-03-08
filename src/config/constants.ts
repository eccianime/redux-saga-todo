import { Category } from '../redux/todo/types';

export const CATEGORIES: Category[] = [
  { icon: 'md-briefcase', name: 'Trabalho', color: '#e11d48' },
  { icon: 'md-home', name: 'Lar', color: '#be123c' },
  { icon: 'md-basket', name: 'Compras', color: '#db2777' },
  { icon: 'md-school', name: 'Escola', color: '#be185d' },
  { icon: 'md-fitness', name: 'Exercício', color: '#c026d3' },
  { icon: 'md-medkit', name: 'Saúde', color: '#a21caf' },
  { icon: 'md-car', name: 'Carro', color: '#9333ea' },
  { icon: 'md-restaurant', name: 'Comida', color: '#7e22ce' },
  { icon: 'md-film', name: 'Cinema/TV', color: '#4f46e5' },
  { icon: 'md-bed', name: 'Descanso', color: '#4338ca' },
  { icon: 'md-book', name: 'Leitura', color: '#2563eb' },
  { icon: 'md-brush', name: 'Arte', color: '#1d4ed8' },
  { icon: 'md-chatbox', name: 'Comunicação', color: '#0284c7' },
  { icon: 'md-clipboard', name: 'Pendentes', color: '#0369a1' },
  { icon: 'md-time', name: 'Tempo', color: '#005db4' },
  { icon: 'md-compass', name: 'Viagem', color: '#004282' },
  { icon: 'md-cut', name: 'Conserto', color: '#0891b2' },
  { icon: 'md-desktop', name: 'Tecnología', color: '#0e7490' },
  { icon: 'md-eye', name: 'Vigilância', color: '#0d9488' },
  { icon: 'md-gift', name: 'Presentes', color: '#0f766e' },
  { icon: 'md-leaf', name: 'Natureza', color: '#059669' },
  { icon: 'md-musical-notes', name: 'Música', color: '#047857' },
  { icon: 'md-nutrition', name: 'Nutrição', color: '#16a34a' },
  { icon: 'md-paw', name: 'Pet', color: '#15803d' },
  { icon: 'md-people', name: 'Social', color: '#65a30d' },
  { icon: 'md-shirt', name: 'Roupa', color: '#4d7c0f' },
  { icon: 'md-star', name: 'Importante', color: '#ca8a04' },
  { icon: 'md-wallet', name: 'Dinheiro', color: '#a16207' },
  { icon: 'md-wine', name: 'Bebidas', color: '#d97706' },
];

export const TASK_STATUSES = ['Todas', 'Sem Concluir', 'Concluidas'];
export const TASK_CATEGORY_ZERO = { icon: '-', name: 'Todas' };
