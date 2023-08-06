import {LinkAllInstance} from '@/shims-tsx';
import {PrimaryKeyStr} from '@/shims-tsx';
import {Provide} from 'vue-property-decorator';
import {Vue, Component} from 'vue-property-decorator';


@Component
export default class LinkAllComponent extends Vue {
    @Provide() djangoTypeInput: HTMLInputElement = document.querySelector('#id_link_type');
    @Provide() djangoInstanceInput: HTMLInputElement = document.querySelector('#id_link_instance_pk');
    @Provide() djangoUrlInput: HTMLInputElement = document.querySelector('#id_link_url');

    @Provide() linkType: PrimaryKeyStr = '';
    @Provide() instance: PrimaryKeyStr = '';
    @Provide() url: string = '';

    LINK_TYPE_URL_PK: PrimaryKeyStr = '0';

    mounted() {
        if (this.djangoTypeInput.value) {
            this.linkType = this.djangoTypeInput.value;
        } else {
            const linkTypeDefault = this.LINK_TYPE_URL_PK;
            this.linkType = linkTypeDefault;
        }
        if (this.djangoInstanceInput.value) {
            this.instance = this.djangoInstanceInput.value;
        }
        if (this.djangoUrlInput.value) {
            this.url = this.djangoUrlInput.value;
        }

        window.LINK_ALL_CONTENT_TYPES_NAMES[this.LINK_TYPE_URL_PK] = 'Url';

        this.$forceUpdate();
    }

    selectLinkType(linkTypePk: string) {
        this.djangoTypeInput.value = linkTypePk;
        this.selectFirstAvailableInstance(linkTypePk);
    }
    
    setUrl(url: string) {
        this.djangoUrlInput.value = url;
        this.instance = null;
        this.djangoInstanceInput.value = null;
    }
    
    private selectFirstAvailableInstance(linkTypePk: string) {
        const instances: Map<PrimaryKeyStr, LinkAllInstance> = window.LINK_ALL_INSTANCES[linkTypePk];
        for (const instancePk in instances) {
            this.instance = instancePk;
            this.djangoInstanceInput.value = instancePk;
            return;
        }
    }
}
