import { Category } from '../redux/todo/types';

export const CATEGORIES: Category[] = [
  { icon: 'md-briefcase', name: 'Trabajo', color: '#e11d48' },
  { icon: 'md-home', name: 'Hogar', color: '#be123c' },
  { icon: 'md-basket', name: 'Compras', color: '#db2777' },
  { icon: 'md-school', name: 'Escuela', color: '#be185d' },
  { icon: 'md-fitness', name: 'Ejercicio', color: '#c026d3' },
  { icon: 'md-medkit', name: 'Salud', color: '#a21caf' },
  { icon: 'md-car', name: 'Carro', color: '#9333ea' },
  { icon: 'md-restaurant', name: 'Comida', color: '#7e22ce' },
  { icon: 'md-film', name: 'Cine/TV', color: '#4f46e5' },
  { icon: 'md-bed', name: 'Descanso', color: '#4338ca' },
  { icon: 'md-book', name: 'Lectura', color: '#2563eb' },
  { icon: 'md-brush', name: 'Arte', color: '#1d4ed8' },
  { icon: 'md-chatbox', name: 'Comunicación', color: '#0284c7' },
  { icon: 'md-clipboard', name: 'Pendientes', color: '#0369a1' },
  { icon: 'md-time', name: 'Tiempo', color: '#005db4' },
  { icon: 'md-compass', name: 'Exploración', color: '#004282' },
  { icon: 'md-cut', name: 'Arreglo', color: '#0891b2' },
  { icon: 'md-desktop', name: 'Tecnología', color: '#0e7490' },
  { icon: 'md-eye', name: 'Vigilancia', color: '#0d9488' },
  { icon: 'md-gift', name: 'Regalos', color: '#0f766e' },
  { icon: 'md-leaf', name: 'Naturaleza', color: '#059669' },
  { icon: 'md-musical-notes', name: 'Música', color: '#047857' },
  { icon: 'md-nutrition', name: 'Nutrición', color: '#16a34a' },
  { icon: 'md-paw', name: 'Mascotas', color: '#15803d' },
  { icon: 'md-people', name: 'Social', color: '#65a30d' },
  { icon: 'md-shirt', name: 'Ropa', color: '#4d7c0f' },
  { icon: 'md-star', name: 'Importante', color: '#ca8a04' },
  { icon: 'md-wallet', name: 'Dinero', color: '#a16207' },
  { icon: 'md-wine', name: 'Bebidas', color: '#d97706' },
];

export const TASK_STATUSES = ['Todas', 'Sin Concluir', 'Concluidas'];
export const TASK_CATEGORY_ZERO = { icon: '-', name: 'Todas' };
