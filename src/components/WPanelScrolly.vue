<template>
    <div ref="sp">
        <WPanelScrollyCore
            ref="wsp"
            :viewHeightMax="viewHeight"
            :contentHeight="contentHeight"
            :scrollDelta="scrollDelta"
            :barColor="barColor"
            :barBackgroundColor="barBackgroundColor"
            :barWidth="barWidth"
            :barHeightMin="barHeightMin"
            :ratio="ratio"
            @change="scrollItems"
        >
            <div ref="cp" :style="`position:absolute; top:${top}px; width:100%; box-sizing:border-box;`">
                <slot></slot>
            </div>
        </WPanelScrollyCore>
    </div>
</template>

<script>
import get from 'lodash/get'
import WPanelScrollyCore from './WPanelScrollyCore.vue'

/**
 * @vue-prop {Number} [scrollDelta=100] 輸入一次捲動高度，單位為px，預設100
 * @vue-prop {String} [barColor='rgba(0,0,0,0.2)'] 輸入捲軸內區塊顏色字串，預設'rgba(0,0,0,0.2)'
 * @vue-prop {String} [barBackgroundColor='transparent'] 輸入捲軸背景顏色字串，預設'transparent'
 * @vue-prop {Number} [barWidth=8] 輸入捲軸區寬度，單位為px，預設8
 * @vue-prop {Number} [barHeightMin=50] 輸入捲軸內區塊最小高度，單位為px，預設50
 * @vue-prop {Number} [ratio=0] 輸入目前捲動比例數字，預設0
 */
export default {
    components: {
        WPanelScrollyCore,
    },
    props: {
        scrollDelta: {
            type: Number,
            default: 100,
        },
        barColor: {
            type: String,
            default: 'rgba(0,0,0,0.2)',
        },
        barBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        barWidth: {
            type: Number,
            default: 8,
        },
        barHeightMin: {
            type: Number,
            default: 50,
        },
        ratio: {
            type: Number,
            default: 0,
        },
    },
    data: function() {
        return {
            timer: null,
            top: 0, //內容區top px
            viewHeight: 0, //外框區高度px
            viewHeightTemp: 0, //外框區上次偵測高度px
            contentHeight: 0, //內容區高度px
            contentHeightTemp: 0, //內容區上次偵測高度px
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //detect size
        vo.timer = setInterval(() => {

            vo.viewHeightTemp = get(vo, '$refs.sp.clientHeight', 0)
            if (vo.viewHeight !== vo.viewHeightTemp) {

                //save
                vo.viewHeight = vo.viewHeightTemp

                //triggerEvent, 目前不需防抖
                vo.triggerEvent('changeViewHeight')

            }

            vo.contentHeightTemp = get(vo, '$refs.cp.clientHeight', 0)
            if (vo.contentHeight !== vo.contentHeightTemp) {

                //bTrigger, 需於contentHeight被變更前計算
                let bTrigger = Math.abs(vo.contentHeight - vo.contentHeightTemp) > 1 //防抖, 當差值大於1px才triggerEvent

                //save
                vo.contentHeight = vo.contentHeightTemp

                //triggerEvent, 得放在變更contentHeight之後, 因WPanelScrollyCore會需要由新的contentHeight來triggerEvent
                if (bTrigger) {
                    vo.triggerEvent('changeContentHeight')
                }

            }

        }, 100)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clearInterval
        clearInterval(vo.timer)

    },
    computed: {
    },
    methods: {

        scrollItems: async function(e) {
            //console.log('methods scrollItems', e)

            let vo = this

            //save
            vo.top = -e.t

            //emitEvent
            vo.emitEvent('scroll', e)
            vo.emitEvent('update:ratio', e.r)

        },

        emitEvent: function(name, value) {
            //console.log('methods emitEvent', name, value)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit(name, value)

            }, 1)

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //t
            let t = get(vo, '$refs.wsp.triggerEvent', null)
            if (t) {
                t(from)
            }

        },

    },
}
</script>

<style scoped>
</style>

