<template>
    <div>


        <div class="head1">w-dropfiles</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    @get-files="function(files){WDropfiles.msg1='get number of files = ' + files.length}"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg1}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'backgroundColor & backgroundColorDropIn & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :backgroundColor="'rgba(240,230,255,0.3)'"
                    :backgroundColorDropIn="'rgba(240,230,255,0.9)'"
                    :backgroundColorHover="'rgba(240,230,255,0.6)'"
                    @get-files="function(files){WDropfiles.msg2='get number of files = ' + files.length}"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg2}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :borderRadius="30"
                    @get-files="function(files){WDropfiles.msg3='get number of files = ' + files.length}"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg3}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'borderWidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :borderWidth="5"
                    @get-files="function(files){WDropfiles.msg4='get number of files = ' + files.length}"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg4}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'borderColor & borderColorDropIn & borderColorHover & backgroundColorDropIn & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :borderColor="'orange lighten-4'"
                    :borderColorDropIn="'orange lighten-2'"
                    :borderColorHover="'orange lighten-4'"
                    :backgroundColorDropIn="'orange lighten-4'"
                    :backgroundColorHover="'orange lighten-5'"
                    @get-files="function(files){WDropfiles.msg5='get number of files = ' + files.length}"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg5}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'styleTransition'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :styleTransition="'all 0.1s ease'"
                    @get-files="function(files){WDropfiles.msg6='get number of files = ' + files.length}"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg6}}</div>
                    </div>
                </w-dropfiles>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WDropfiles from './components/WDropfiles.vue'

export default {
    components: {
        demolink,
        WDropfiles,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        return {
            'WDropfiles': {
                'msg1': '',
                'msg2': '',
                'msg3': '',
                'msg4': '',
                'msg5': '',
                'msg6': '',
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
