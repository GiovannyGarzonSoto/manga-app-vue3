import { createStore } from 'vuex'
// import auth from '../modules/auth/store'
import manga from '../modules/manga/store/'

const store = createStore({
    modules: {
        // auth,
        manga
    }
})

export default store