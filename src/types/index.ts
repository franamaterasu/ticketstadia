export type Profile = {
  id: number;
  imagen: string;
  nombre: string;
  ciudad: string;
  telefono: string;
  email: string;
};

export type Fest = {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  destacado: boolean;
};

export type Data = { [key: string]: any };
