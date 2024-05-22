<template>
    <div>
        <img :src="url" class="avatar-img"
            :style="{width: size + 'px',height: size + 'px',}">
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Number,
        }
    }
}
</script>

<style scoped>
.avatar-img{
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}
</style>