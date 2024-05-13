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

// Type Generico que se utiliza en useFetch para tipar la data que extraemos de cualquier API
export type Data = { [key: string]: any };
