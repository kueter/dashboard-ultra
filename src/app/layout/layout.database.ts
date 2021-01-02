import Dexie from 'dexie';


interface UiState {
  id?: number,
  state: boolean
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
