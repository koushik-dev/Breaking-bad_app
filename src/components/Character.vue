<template>
    <div class="p-10 grid grid-cols-2 justify-center gap-4" v-show="chars">
        <img :src="charData.img" alt="profile image" class="row-span-3" style="justify-self:center">
        <aside class="font-medium bg-black p-4 rounded-lg mb-3">
            <p class="font-semibold text-4xl my-2 text-center text-white">{{charData.name}}</p>
            <p class="flex justify-between">Birthday <span class="font-semibold text-base text-yellow-400">{{charData.birthday}}</span></p>
            <p class="flex justify-between">Nickname <span class="font-semibold text-base text-yellow-400">{{charData.nickname}}</span></p>
            <p class="flex justify-between">Current Status <span class="font-semibold text-base text-yellow-400">{{charData.status}}</span></p>
            <p class="flex justify-between">Current Status <span class="font-semibold text-base text-yellow-400">{{occupation}}</span></p>
        </aside>
        <aside class="font-medium bg-black p-4 rounded-lg mb-3">
            <p class="border-b-2font-light text-base">Quote(s) by the character</p>
            <p class="text-2xl leading-8" v-for="(q, index) in quotesData" :key="q.quote_id">
                {{index + 1 +". "}}{{q.quote}}
            </p>
        </aside>
        <aside class="p-4 bg-black">
            Killings
            <p class="text-red-700 font-semibold text-xl leading-8" v-for="(d, index) in deathData" :key="d.death_id">
                {{index + 1 +". "}}{{d.death + " - " + d.cause}}
            </p>
        </aside>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props: ['id'],
    data() {
        return {
            charData: {},
            deathData: [],
            quotesData: {}
        }
    },
    computed: {
        chars: function() {
            return Object.keys(this.charData).length
        },
        occupation: function() {
            if (this.charData.occupation)
                return this.charData.occupation.join(', ')
            else
                return ''
        }
    },
    mounted() {
        const chars = 'https://breakingbadapi.com/api/characters',
            deaths = 'https://breakingbadapi.com/api/deaths',
            quotes = 'https://breakingbadapi.com/api/quotes';
        axios
        .all([
            axios.get(chars),
            axios.get(deaths),
            axios.get(quotes)
        ])
        .then(axios.spread(({ data: chars }, { data: deaths }, { data:quotes }) => {
            this.charData = chars.filter(c => c.char_id === +this.id)[0]
            this.deathData = deaths.filter(d => ((d.responsible.indexOf(this.charData.name) > -1) || (d.responsible.indexOf(this.charData.nickname) > -1)))
            this.quotesData = quotes.filter(q => ((q.author === this.charData.name) || (q.author.indexOf(this.charData.nickname) > -1)))
        }))
    }
}
</script>