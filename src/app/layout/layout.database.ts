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

interface events {
  id?: number,
  name: string,
  date: string,
  color: string,
  description: string
}

interface personnes {
  id?: number,
  name: string,
  datenaiss: string,
  job: string,
  grade: string
}


class LayoutDatabase extends Dexie {

  // Declare tables
  public uistates: Dexie.Table<UiState,number>;
  public sbarcolor: Dexie.Table<SbarColor,number>;
  public nbarcolor: Dexie.Table<NbarColor,number>;
  public


  constructor() {
    super("ultra-dashboard");

    this.version(1).stores({
      uistates: "id,state",
    });
    // this.uistates.add({id: 1, state: false });
  }

}


export const layDb = new LayoutDatabase();
