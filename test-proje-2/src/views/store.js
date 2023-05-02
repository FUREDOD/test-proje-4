import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // burada state'lerinizi tanımlayabilirsiniz
    };
  },
  mutations: {
    // burada state'lerinizi güncelleyen mutations'ları tanımlayabilirsiniz
  },
  actions: {
    // burada mutations'ları çağıran ve asenkron işlemleri gerçekleştiren actions'ları tanımlayabilirsiniz
  },
});

export default store;
