import {
    computed
} from 'vue';

export function myDemo(message) { 
    const demo = computed (() => { 
        return '+++abc+++' + message.value;
    });
    return demo;
}