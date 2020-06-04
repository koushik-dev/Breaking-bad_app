<template>
    <router-link :to="'/character/' + card.char_id" class="card flex flex-col items-center p-3 m-3 inline-block rounded-lg text-center no-underline text-white">
        <img :src="card.img" alt="image" class="card__img">
        <h2 class="m-2 text-2xl font-bold">{{card.name}}</h2>
        <p class="font-hairline">{{card.nickname}}</p>
    </router-link>
</template>
<script>
export default {
    props: ['card'],
    
}
</script>
<style scoped>
.card {
    background-color: #282547;
}
.card__img {
    height: 200px;
    width: 200px;
}
</style>