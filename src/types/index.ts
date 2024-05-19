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
  ciudad: string;
  fecha: string;
  destacado: boolean;
};

// Type Generico que se utiliza en useFetch para tipar la data que extraemos de cualquier API
export type Data = { [key: string]: any };

// Redux toolkit type states
export type EventsState = {
  events: Fest[];
};

export type CartState = {
  cart: Fest[];
  isSelectedEvent: boolean;
  selectedEvent: Fest;
};

export type FriendsState = {
  friends: Profile[];
};
