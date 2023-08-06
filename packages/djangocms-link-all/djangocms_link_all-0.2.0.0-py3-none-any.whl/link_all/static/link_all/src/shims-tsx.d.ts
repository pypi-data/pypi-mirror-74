import Vue, {VNode} from 'vue';


export interface LinkAllInstance {
    pk: number
    label: string
    url: string
    isShowUrlInSelect: boolean
}

export type ContentTypeVerboseName = string;

export type PrimaryKeyStr = string;


declare global {
    interface Window {
        LINK_ALL_INSTANCES: Map<PrimaryKeyStr, Map<PrimaryKeyStr, LinkAllInstance>>
        LINK_ALL_CONTENT_TYPES_NAMES: Map<PrimaryKeyStr, ContentTypeVerboseName>
    }
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {
        }

        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {
        }

        interface IntrinsicElements {
            [elem: string]: any
        }
    }
}
