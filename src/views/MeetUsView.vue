<script setup lang="ts">
import type { TeamMember } from '@/components/PersonBio.vue';
import PersonBio from '@/components/PersonBio.vue';

const FOUNDERS: TeamMember[] = [
    {
        name: "Shree Warang",
        post: {
            title: "Founder & Director",
            category: "Founder"
        },
        description: "Being a movie buff, I adore every step of the production process, from writing the screenplay to producing the sound design to editing. But acting is the aspect of filmmaking that I adore and love the most!",
        image: "8a6f203d-84b5-43ab-9206-657b3dc7696a.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/shree_warang",
            },
            {
                site: "LinkedIn",
                link: "https://www.linkedin.com/in/shree-warang-920483146",
            }
        ]
    },
    {
        name: "Dhruv Tiwari",
        post: {
            title: "Founder & Director",
            category: "Founder"
        },
        description: "Whether it's tapping my feet to some tunes or evoking laughter with my comic timing, I'm always up to the task. The important thing is that we never miss a beat.",
        image: "f83574f3-93ab-4313-9704-647768be8be8.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/dhruvtiwari_"
            }
        ]
    },
    {
        name: "Pratik Nerurkar",
        post: {
            title: "Founder & Managing Director",
            category: "Founder"
        },
        description: "An engineer by degree and a film enthusiast at heart, I’ve grown up admiring all genres of commercial cinema. I'm here to spread laughs and entertain my audience while contributing positively to society.",
        image: "76b25983-806a-45b7-8ea3-9039ddc6f2f0.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/PlayPratz",
            },
            {
                site: "LinkedIn",
                link: "https://www.linkedin.com/in/pratik-nerurkar/",
            },
            {
                site: "Twitter",
                link: "https://twitter.com/NotPlayPratz",
            },
        ]
    }
];

const ADVISORS: TeamMember[] = [
    {
        name: "Rutuja Shelar",
        post: {
            title: "Friendly Advisor",
            category: "Advisor",
        },
        description: "I'm a film enthusiast wanting to get into the process of making reel life as real as I can. I'm a true believer of the fact that doing what you love is the only recipe for SUCCESS!",
        image: "4408a96f-48a7-4ea2-b8f0-f2bb96545d3e.jpg",
        connections: [
            {
                site: "Instagram",
                link: "https://instagram.com/rutujashelar"
            },
            {
                site: "LinkedIn",
                link: "https://linkedin.com/in/rutuja-shelar-3b46b027b"
            },
        ]
    },
]
</script>

<template>
    <h4 class="team-member-header px-4 py-2 mb-4 rounded badge-founder">Founders</h4>
    <div v-for="person in FOUNDERS" :key="person.name">
        <PersonBio :person="person" />
        <hr class="my-4"/>
    </div>
    <h4 class="team-member-name px-4 py-2 mb-4 rounded badge-advisor">Advisors</h4>
    <div v-for="person in ADVISORS" :key="person.name">
        <PersonBio :person="person" />
    </div>
    <RouterLink to="/" class="text-decoration-none text-grey">
        <div class="elevated-button my-5 px-5 fit-content">
            <h5 class="text-uppercase m-0">Home</h5>
        </div>
    </RouterLink>
</template>