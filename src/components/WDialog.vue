<template>
    <v-dialog
        :changeParam="changeParam"
        scrollable
        :persistent="!fullscreen && hasCloseBtn"
        :max-width="widthMax"
        :fullscreen="fullscreen"
        :hide-overlay="fullscreen"
        v-resize="changeSize"
        v-model="showTrans"
        @click:outside="clickClose(true)"
        @keydown="keyDown"
    >

        <v-card v-if="show">

            <v-toolbar
                max-height="64"
                :color="headerBackgroundColor"
            >

                <div style="margin-right:10px;">
                    <v-icon :color="headerIconColor" >
                        <template v-if="!icon">{{mdiCheckerboard}}</template>
                        <template v-else>{{icon}}</template>
                    </v-icon>
                </div>

                <v-toolbar-title>
                    <span :style="`color:${useHeaderTextColor}`">{{title}}</span>
                </v-toolbar-title>

                <slot name="headerLeft"></slot>

                <v-spacer></v-spacer>

                <slot name="headerRight"></slot>

                <template v-for="(btn,kbtn) in headerBtns">

                    <WButtonCircle
                        style="margin-left:5px;"
                        :key="kbtn"
                        :icon="btn.icon"
                        :shadow="false"
                        :iconColor="headerIconColor"
                        :tooltip="btn.tooltip"
                        @click="clickBtns(btn.evName)"
                    ></WButtonCircle>

                </template>

                <template v-if="hasSaveBtn">
                    <WButtonCircle
                        style="margin-left:5px;"
                        :icon="mdiCheckCircle"
                        :shadow="false"
                        :iconColor="headerIconColor"
                        :tooltip="saveBtnTooltip"
                        @click="clickSave()"
                    ></WButtonCircle>
                </template>

                <template v-if="hasCloseBtn">
                    <WButtonCircle
                        style="margin-left:5px;"
                        :icon="mdiClose"
                        :shadow="false"
                        :iconColor="headerIconColor"
                        :tooltip="closeBtnTooltip"
                        @click="clickClose(false)"
                    ></WButtonCircle>
                </template>

            </v-toolbar>

            <v-card-text ref="scrollZone" :style="`line-height:inherit; font-size:inherit; font-weight:inherit; letter-spacing:inherit; padding:0px; background-color:${useContentBackgroundColor};`">
                <slot name="content"></slot>
            </v-card-text>

        </v-card>

    </v-dialog>
</template>

<script>
import { mdiCheckCircle, mdiClose, mdiCheckerboard } from '@mdi/js'
import get from 'lodash/get'
import color2hex from '../js/vuetifyColor.mjs'
import WButtonCircle from './WButtonCircle.vue'

/**
 * @vue-prop {Boolean} [show=false] 輸入是否顯示，預設false
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [title=''] 輸入彈窗標題字串，預設''
 * @vue-prop {String} [headerIconColor='white'] 輸入彈窗標題列圖標顏色字串，預設'white'
 * @vue-prop {String} [headerTextColor='white'] 輸入彈窗標題列文字顏色字串，預設'white'
 * @vue-prop {String} [headerBackgroundColor='light-blue darken-3'] 輸入彈窗標題列背景顏色字串，預設'light-blue darken-3'
 * @vue-prop {Array} [headerBtns=[]] 輸入彈窗標題列自訂按鈕陣列，預設[]，各元素為物件，需有'icon'欄位值為字串、'tooltip'欄位值為字串、'evName'欄位值為字串，其中按鈕被click時會觸發彈窗的clickBtns事件(監聽@clickBtns)，裡面會提供evName供辨識觸發按鈕之用
 * @vue-prop {Boolean} [hasSaveBtn=true] 輸入是否顯示儲存按鈕，預設true
 * @vue-prop {String} [saveBtnTooltip='儲存'] 輸入儲存按鈕的提示文字字串，預設'儲存'
 * @vue-prop {Boolean} [hasCloseBtn=true] 輸入是否顯示關閉按鈕，預設true
 * @vue-prop {String} [closeBtnTooltip='關閉'] 輸入關閉按鈕的提示文字字串，預設'關閉'
 * @vue-prop {Number} [widthMax=1000] 輸入彈窗最大寬度，單位為px，預設1000，當裝置寬度小於彈窗最大寬度，則彈窗改為全螢幕顯示，若給予widthMax<=0則代表全螢幕
 * @vue-prop {String} [contentBackgroundColor='transparent'] 輸入內容背景顏色字串，預設'transparent'
 */
export default {
    components: {
        WButtonCircle,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        headerIconColor: {
            type: String,
            default: 'white',
        },
        headerTextColor: {
            type: String,
            default: 'white',
        },
        headerBackgroundColor: {
            type: String,
            default: 'light-blue darken-3',
        },
        headerBtns: {
            type: Array,
            default: () => [],
        },
        hasSaveBtn: {
            type: Boolean,
            default: true,
        },
        saveBtnTooltip: {
            type: String,
            default: '儲存',
        },
        hasCloseBtn: {
            type: Boolean,
            default: true,
        },
        closeBtnTooltip: {
            type: String,
            default: '關閉',
        },
        widthMax: {
            type: Number,
            default: 1000,
        },
        contentBackgroundColor: {
            type: String,
            default: 'transparent',
        },
    },
    data: function() {
        return {
            mdiCheckCircle,
            mdiClose,
            mdiCheckerboard,
            showTrans: null,
            fullscreen: false,
        }
    },
    mounted: function() {
    },
    watch: {

        show: function(value) {
            //console.log('watch show', value)

            let vo = this

            //當show改為true時自動捲至頂部
            if (!vo.showTrans && value) {
                setTimeout(() => {
                    vo.$refs.scrollZone.scrollTop = 0
                }, 1)
            }

        },

    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //showTrans
            vo.showTrans = vo.show

            return ''
        },

        useHeaderTextColor: function () {
            //console.log('computed useHeaderTextColor')

            let vo = this

            return color2hex(vo.headerTextColor)
        },

        useContentBackgroundColor: function () {
            //console.log('computed useContentBackgroundColor')

            let vo = this

            return color2hex(vo.contentBackgroundColor)
        },

    },
    methods: {

        getContentHeight: function() {
            //console.log('methods getContentHeight')

            let vo = this

            //get
            let h = get(vo, '$refs.scrollZone.clientHeight', 0)

            return h
        },

        changeSize: function() {
            //console.log('methods changeSize')

            let vo = this

            if (vo.widthMax <= 0) {
                vo.fullscreen = true
            }
            else {
                if (vo.widthMax > window.innerWidth) {
                    vo.fullscreen = true
                }
                else {
                    vo.fullscreen = false
                }
            }

        },

        clickBtns: function(evName) {
            //console.log('methods clickBtns', evName)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('click-btns', evName)

            }, 1)

        },

        clickSave: function() {
            //console.log('methods clickSave')

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('click-save')

            }, 1)

        },

        clickClose: function(outside) {
            //console.log('methods clickClose', outside)

            let vo = this

            //check
            if (vo.hasCloseBtn && outside) {
                return
            }

            //hide
            vo.showTrans = false

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('update:show', vo.showTrans)

                //emit
                vo.$emit('click-close')

            }, 1)

        },

        keyDown: function(e) {
            //console.log('methods keyDown', e)

            let vo = this

            //check, vuetify於dialog為fullscreen狀態時有問題, 第1次按esc不會關閉, 但第2次之後按esc會關閉, 待vuetify修復
            // if (e.code === 'Escape') {

            //     //hide
            //     vo.showTrans = false

            // }

        },

    },
}
</script>

<style scoped>
</style>
