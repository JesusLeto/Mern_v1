import {instance} from "./store";

declare module "vue/types/vue" {
    interface Vue {
        $vclStore: typeof instance
    }
}