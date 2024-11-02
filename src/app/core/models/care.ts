export interface Care {
    id?: number;
    plantaId: number;
    tipoCuidado: 'Riego' | 'Fertilización' | 'Poda';
    fechaCuidado: Date;
    notas?: string;
  }
  