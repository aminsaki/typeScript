import {useToast} from "vue-toastification";
import {UnwrapRef} from "vue";
import {RefValue} from "vue/macros";

class HelloWorld {
    constructor() {
        this.reuslt()
    }
    get(id: RefValue<number | undefined>) {
        const test = {
            id: id,
            name: "rez",
            last_name: "res"
        }

        return test;
    }

    reuslt() {
        const test = {
            name: "rez",
            last_name: "res"
        }

        return test;
    }
}

export default HelloWorld;
