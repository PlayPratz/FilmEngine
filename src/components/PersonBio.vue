<script setup lang="ts">
import type { SocialMediaConnection } from './SocialMedia.vue';
import SocialMedia from './SocialMedia.vue';

export interface TeamMember {
    name: string;
    post: Post;
    description: string;
    image: string;
    connections?: SocialMediaConnection[]
}

interface Post {
    title: string;
    category: "Founder" | "Advisor";
}

const props = defineProps<{person: TeamMember}>();
const person = props.person;

let badgeClassName = "badge py-2 me-2 ";
if(person.post.category==="Founder") {
    badgeClassName = badgeClassName + 'badge-founder';
} else {
    badgeClassName = badgeClassName + 'badge-advisor';
}
</script>

<template>
    <div class="d-flex flex-column flex-md-row">
            <img :src="`/people/${person.image}`" class="img-thumbnail team-member-image" />
            <div class="py-2 ms-md-3">
                <h5 class="team-member-name">{{ person.name }}</h5>
                <span :class="badgeClassName">{{ person.post?.title }}</span>
                <SocialMedia v-if="person.connections" :connections="person.connections" class="my-2" />
                <p class="my-0">{{ person.description }}</p>
            </div>
        </div>
</template>