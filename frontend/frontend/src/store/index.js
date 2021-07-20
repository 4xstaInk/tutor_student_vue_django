import { createStore } from "vuex";

import { students } from "./module/students";

export default createStore({
    modules: {
        students
    }
})