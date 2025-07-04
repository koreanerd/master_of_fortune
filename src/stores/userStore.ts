import { UserFortuneData } from "@/types/fortune_table";
import { makeAutoObservable } from "mobx";

class UserStore {
  userFortuneData: UserFortuneData | null = null;
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserFortuneData(userFortuneData: UserFortuneData) {
    this.userFortuneData = userFortuneData;
    this.isLoading = false;
    this.hasError = false;
  }

  setError(error: boolean) {
    this.hasError = error;
    this.isLoading = false;
  }
}

const userStore = new UserStore();
export default userStore;
