<script setup lang="ts">
import type { SocialMediaConnection } from '@/components/SocialMedia.vue';
import SocialMedia from "@/components/SocialMedia.vue"


interface TeamMember {
    name: string;
    post?: string;
    description: string;
    image: string;
    connections?: SocialMediaConnection[]
}

const PEOPLE: TeamMember[] = [
    {
        name: "Shree Warang",
        post: "Founder & Director",
        description: "Being a movie buff, I adore every step of the production process, from writing the screenplay to producing the sound design to editing. But acting is the aspect of filmmaking that I adore and love the most!",
        image: "8a6f203d-84b5-43ab-9206-657b3dc7696a.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/shree_warang"
            }
        ]
    },
    {
        name: "Dhruv Tiwari",
        post: "Founder & Director",
        description: "Whether it's tapping my feet to some tunes or evoking laughter with my comic timing, I'm always up to the task. The important thing is that we never miss a beat.",
        image: "f83574f3-93ab-4313-9704-647768be8be8.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/dhruvtiwari_"
            }
        ]
    },
    // {
    //     name: "Rutuja Shelar",
    //     description: "I'm a film enthusiast wanting to get into the process of making reel life as real as I can. I'm a true believer of the fact that doing what you love is the only recipe for SUCCESS!",
    //     image: "4408a96f-48a7-4ea2-b8f0-f2bb96545d3e.jpg",
    //     connections: [
    //         {
    //             site: "Instagram",
    //             link: "https://instagram.com/rutujashelar"
    //         },
    //         {
    //             site: "LinkedIn",
    //             link: "https://linkedin.com/in/rutuja-shelar-3b46b027b"
    //         },
    //     ]
    // },
    {
        name: "Pratik Nerurkar",
        post: "Founder & Managing Director",
        description: "An engineer by degree and a film enthusiast at heart, I’ve grown up admiring all genres of commercial cinema. I'm here to spread laughs and entertain my audience while contributing positively to society.",
        image: "76b25983-806a-45b7-8ea3-9039ddc6f2f0.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/PlayPratz",
            },
            {
                site: "Twitter",
                link: "https://twitter.com/NotPlayPratz",
            },
            {
                site: "LinkedIn",
                link: "https://www.linkedin.com/in/pratik-nerurkar/",
            }
        ]
    }
];
</script>

<template>
    <div v-for="person in PEOPLE" :key="person.name" class="my-4 w-100">
        <!-- Desktop -->
        <div class="d-none d-md-flex">
            <img :src="`/people/${person.image}`" class="img-thumbnail team-member-image mx-4" />
            <div class="py-2">
                <h5 class="team-member-name">{{ person.name }}</h5>
                <span class="badge text-bg-success py-2 me-2">{{ person.post }}</span>
                <SocialMedia v-if="person.connections" :connections="person.connections" class="my-2" />
                <p>{{ person.description }}</p>
            </div>
        </div>
        <!-- Mobile -->
        <div class="d-md-none">
            <div class="d-flex mb-3">
                <img :src="`/people/${person.image}`" class="img-thumbnail team-member-image" />
                <div class="ms-3">
                    <h5 class="team-member-name my-2">{{ person.name + '\n' }}</h5>
                    <span class="badge text-bg-success py-2">{{ person.post }}</span>
                    <SocialMedia v-if="person.connections" :connections="person.connections" class="my-2" />
                </div>
            </div>
            <p>{{ person.description }}</p>
        </div>
        <hr class="w-50 mx-auto my-5">
    </div>
    <RouterLink to="/" class="text-decoration-none text-grey">
        <div class="elevated-button my-5 px-5 fit-content">
            <h5 class="text-uppercase m-0">Home</h5>
        </div>
    </RouterLink>
</template>

<!-- <div class="d-flex">
            <img :src="`/people/${person.image}`" class="img-thumbnail team-member-image" />
            <div class="py-2 ms-3">
                <h5 class="team-member-name">{{ person.name }}</h5>
                <div class="d-flex align-items-center mb-2">
                    <span class="badge text-bg-success py-2 me-2">{{ person.post }}</span>
                    <SocialMedia v-if="person.connections" :connections="person.connections" />
                </div>
            </div>
        </div>
        <p class="mt-2">{{ person.description }}</p>
     -->