import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(gsap)

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    }
    return {
        provide: {
            gsap: gsap,
            ScrollTrigger
        }
    }
})