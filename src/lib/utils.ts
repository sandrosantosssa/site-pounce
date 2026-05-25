import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Configurações centrais do site. Edite aqui para trocar dados. */
export const SITE = {
  brand: 'Pounce',
  slogan: 'Transformando resíduos em valor',

  // 👉 DATA DE LANÇAMENTO do site (UTC-3 = Brasil)
  // Formato ISO. Quando o relógio passar dessa data, o countdown encerra.
  launchDate: '2026-05-30T10:00:00-03:00',

  // Contato (do material da Pounce)
  whatsapp: '5541991096003',
  whatsappLabel: '(41) 99109-6003',
  email: 'comercial@pounce.com.br',
  website: 'www.pounce.com.br',

  // Vídeo de fundo da landing (tela cheia, loop, mudo)
  launchVideo: '/03_final_com_musica.mp4' as string,
};
