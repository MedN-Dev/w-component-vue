<template>
    <div style="display:flex; align-items:center;">

        <w-timeday-core
            :pickColor="pickColor"
            :editable="editable"
            :value="dayStart"
            @update:focused="(v)=>{focused_start=v;changeFocused()}"
            @input="function(v){$emit('update:dayStart', v)}"
        ></w-timeday-core>

        <div
            :style="[{'display':'inline-block','padding-left':'5px','padding-right':'9px'}]"
        >{{dayBetween}}</div>

        <w-timeday-core
            :pickColor="pickColor"
            :editable="editable"
            :value="dayEnd"
            @update:focused="(v)=>{focused_end=v;changeFocused()}"
            @input="function(v){$emit('update:dayEnd', v)}"
        ></w-timeday-core>

    </div>
</template>

<script>
import WTimedayCore from './WTimedayCore.vue'

/**
 * @vue-prop {String} [dayStart=''] 輸入起始日期字串，預設''
 * @vue-prop {String} [dayEnd=''] 輸入結束日期字串，預設''
 * @vue-prop {String} [dayBetween='至'] 輸入兩日期連接文字字串，預設'至'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WTimedayCore,
    },
    props: {
        dayStart: {
            type: String,
            default: '',
        },
        dayEnd: {
            type: String,
            default: '',
        },
        dayBetween: {
            type: String,
            default: '至'
        },
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            focused_start: false,
            focused_end: false,
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {

        changeFocused: function() {
            //console.log('methods changeFocused')

            let vo = this

            //focused
            let focused = vo.focused_start || vo.focused_end

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('update:focused', focused)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
