<script>
	import Counter from '../../counter/Counter.svelte';
    import PersonalStats from "./personalStats/PersonalStats.svelte";
    
    export let loggedIn
    

</script>

<div class="row">
    <PersonalStats/>
</div>

<div class="row mt-3">
    <Counter bind:loggedIn></Counter>
</div>

