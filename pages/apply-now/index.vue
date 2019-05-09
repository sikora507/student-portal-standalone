<template>
    <div id="knockoutContext">
        <apply-now />
    </div>
</template>

<script>
export default{
    mounted(){
        eval('require')(['knockout'], function(ko){
            ko.applyBindings({}, document.getElementById('knockoutContext'));
        });
    }
}
</script>