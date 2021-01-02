import Dexie from 'dexie';

interface UiState {
  id?: number,
  state: boolean
}


interface SbarColor {
  id?: number,
  color: string
}


interface NbarColor {
  id?: number,
  color: string
}

interface Events {
  id?: number,
  name: string,
  date: string,
  color: string,
  description: string
}

interface Personnes {
  id?: number,
  name: string,
  datenaiss: string,
  email: string,
  job: string,
  grade: string
}

interface Charts {
  id?: number,
  label: string,
  value: number
}

interface Colors {
  id?: number,
  value: string
}


class LayoutDatabase extends Dexie {

  // Declare tables
  public uistates: Dexie.Table<UiState,number>;
  public sbarcolors: Dexie.Table<SbarColor,number>;
  public nbarcolors: Dexie.Table<NbarColor,number>;
  public events: Dexie.Table<Events,number>;
  public personnes: Dexie.Table<Personnes,number>;
  public charts: Dexie.Table<Charts,number>;
  public colors: Dexie.Table<Colors,number>;


  constructor() {
    super("ultra-dashboard");

    this.version(1).stores({
      uistates: "id,state",
      sbarcolors: "id,color",
      nbarcolors: "id,color",
      events: "++id,name,date,color,description",
      personnes: "++id,name,datenaiss,email,job,grade",
      colors: "++id,value",
      charts: "++id,label,value"
    });
  }

}


export const layDb = new LayoutDatabase();
