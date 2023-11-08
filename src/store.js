import {reactive} from "vue";
import Json from '../db.json';
export const store = reactive({
    items: Json
})