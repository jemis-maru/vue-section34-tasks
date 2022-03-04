<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in directives</h1>
                <p v-text="'This is normal text'"></p>
                <p v-html="'<strong>This is html text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <!-- Global custom directives -->
                <p v-highlight:background="'lightgreen'">Highlighted text</p>
                <p v-highlight="'lightgreen'">Highlighted text</p>
                <p v-highlight.delay="'lightgreen'">Highlighted text</p>
                <!-- Local custom directives -->
                <p v-local-highlight:background.delay="'lightblue'">Highlighted text</p>
                <p v-local-highlight="'lightblue'">Highlighted text</p>
                <!-- <p v-local-highlight.blink="'lightblue'">blink text</p> -->
                <!-- <p v-local-highlight:background.delay.blink="'lightblue'">Highlighted blink text</p> -->
                <p v-local-highlight:background.blink="{mainColor: 'lightblue', secondColor: 'lightpink', delayInterval: 500}">
                    Highlighted blink text
                </p>
                <p v-local-highlight:background.blink="{mainColor: 'lightblue', secondColor: 'lightpink', delayInterval: 1000}">
                    Highlighted blink text
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding){
                    let delay = 0;

                    if(binding.modifiers['delay']){
                        delay = 3000;
                    }

                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor;
                        let delayInterval = binding.value.delayInterval;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background'){
                                    el.style.backgroundColor = currentColor;
                                }
                                else{
                                    el.style.color = currentColor;
                                }
                            }, delayInterval);
                        }, delay);
                    }
                    else{
                        setTimeout(() => {
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value;
                            }
                            else{
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }
                }
            }
        },
    }
</script>

<style>

</style>
