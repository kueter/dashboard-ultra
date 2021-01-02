import Dexie from 'dexie';


interface UiState {
  id?: number,
  state: boolean
}

interface App{
  id?: number,
  name: string
}

interface Menu{
  id?: number,
  name: string,
  appId: number
}

interface Lien{
  id?: number,
  name: string,
  lienId: number
}

interface SbarColor {

}


interface NbarColor {

}


class LayoutDatabase extends Dexie {

  // Declare tables
  public uistates: Dexie.Table<UiState,number>;


  constructor() {
    super("ultra-dashboard");

    this.version(1).stores({
      uistates: "id,state",
    });
    // this.uistates.add({id: 1, state: false });
  }

}


export const layDb = new LayoutDatabase();
