<template>
    <div>{{ message }}</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            message: ''
        };
    },
    mounted() {
        fetch(`${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_STAGE}/hello`)
            .then(resp => resp.json())
            .then(json => {
                this.message = json.message;
            })
            .catch(err => {
                this.message = 'ERROR';
                console.error(err);
            });
    }
};
</script>
