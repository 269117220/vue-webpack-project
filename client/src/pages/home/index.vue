<template>
    <div>
        <a href="#/bar">{{msg}}</a>
    </div>
</template>

<style>

</style>

<script>
export default {
    data: function() {
        return {
            msg: 'home~'
        }
    },
    created: function() {
        this.getDate();
    },
    methods: {
        getDate: function() {
            fetch('/api/news').then(res => {
                return res.json();
            }).then(res => {
                this.msg = res.msg;
            });
        },
    }
}
</script>