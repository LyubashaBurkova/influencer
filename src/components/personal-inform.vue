<template>
    <div>
        <img :src="imgSrc">
        <div class="info">
            <a :href="url" :title="fullName">@{{name}}</a>
            <span>Instagram</span>
        </div>
    </div>
</template>
<script>

export default ({
    props: {
        imgSrc: String,
        name: String,
        fullName: String,
        url: String
    }
})
</script>
<style scoped>
a {
    font-weight: bold;
    color: #000;
}

img {    
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0.5em 1em;
    display: inline-block;
}

.info {
    display:inline-block
}

.info span {
    display: block;
}
</style>
