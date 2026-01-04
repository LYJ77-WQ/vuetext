<template>
    <div class="lunbotu">
        <h3 class="name">轮播图</h3>
        <swiper :modules="modules" :slides-per-view="1" :space-between="0" effect="fade"
            :fade-effect="{ crossFade: true }" navigation :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }" loop @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(value, index) in slides" :key="index">
                <img :src="value.image" :alt="value.title" />
                <div class="slide-caption">{{ value.title }}</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade];

const slides = [
    { title: "Slide 1", image: "https://picsum.photos/400/300?random=1" },
    { title: "Slide 2", image: "https://picsum.photos/400/300?random=2" },
    { title: "Slide 3", image: "https://picsum.photos/400/300?random=3" },
    { title: "Slide 4", image: "https://picsum.photos/400/300?random=4" },
    { title: "Slide 5", image: "https://picsum.photos/400/300?random=5" },
    { title: "Slide 6", image: "https://picsum.photos/400/300?random=6" },
];

const onSwiper = (swiper) => {
    console.log(swiper);
};

const onSlideChange = () => {
    console.log("slide change");
};
</script>