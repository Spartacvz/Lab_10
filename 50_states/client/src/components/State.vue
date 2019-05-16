<template>
    <div class="state-summary p-2 rounded">

        <span class="m-2">{{ stateName }}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox"
            v-model="stateVisited" v-on:change="$emit('isVisited', stateName, stateVisited)">
        </p>

        <P>
            <router-link :to="{name: 'detail', params: { state: stateName} }">
                <img class="map-icon" src="@/assets/map_header.jpg">
            </router-link>
        </P>

    </div>
</template>

<script>
    export default {
        name: "State",
        props: {
            state: Object
        },
        data() {
            return {
                stateName: this.state.name,
                stateVisited: this.state.visited,
                stateGeography: this.stateGeography
            }
        }
    }
</script>

<style scoped>
    .state-summary {
        height: 8em;
        width: 10em;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }
    .map-icon {
        width: 2em;
        height: 2em;
    }
</style>