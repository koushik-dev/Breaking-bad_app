<template>
    <div class="grid auto-fit">
        <Card v-for="card in cards" :key="card.char_id" :card="card"></Card>
    </div>
</template>
<script>
import axios from "axios";
import Card from "./Card";
export default {
    components: {
        Card
    },
    data(){
    return {
        cards: []
    }
    },
    mounted() {
    axios
        .get('https://breakingbadapi.com/api/characters')
        .then(({ data }) => this.cards = data)
    }
}
</script>