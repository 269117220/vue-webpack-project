<template>
    <div>
        {{JSON.stringify(list)}}
    </div>
</template>

<style>

</style>

<script>
export default {
    data: function() {
        return {
            list: []
        }
    },
    created: function() {
        this.getDate();
    },
    methods: {
        getDate: function() {
            fetch('/api/interest').then(res => {
                return res.json();
            }).then(res => {
                this.list = res.list;
            });
        },
    }
}
</script>