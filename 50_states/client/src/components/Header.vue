<template>
    <!-- Write template here -->
    <div class="header">

        <div class="jumbotron">
            <h1 class="display-4" id="title">Have you visited every state?</h1>
        </div>

    </div>
</template>

<script>
    // Create and export component here
    export default {
        name: "Header"
    }
</script>

<style scoped>
    /* Write any styles for this component here*/
    .jumbotron {
        background-image: url("../assets/map_header.jpg");
        background-position: center;
        background-size: cover;
    }
    #title {
        font-weight: 500;
        color: antiquewhite;
    }
</style>