<script>
import { personalCount, resetCount } from '../../../../store/stores.js'

let personalCountValue;
let totalClicks;
    personalCount.subscribe(value => {
        personalCountValue = value;
    });



// Fetch get stored clicks
async function getTotalClicks(){
    //totalClicks = await fetch()
    totalClicks = 20
    return totalClicks
}

getTotalClicks();
//Fetch post personal count clicks
async function saveClicks(){
    let countToSave = personalCountValue
    //const response = fetch()
    totalClicks = totalClicks + personalCountValue;
    personalCount.set(0);
    resetCount.set(true);
    return console.log(`All ${countToSave} clicks is saved to your total score!`)
}

</script>
<div class="row">
    <div class="col d-flex justify-content-center">
        <h5 class="color-changing-15">Your click count: {personalCountValue}</h5>
    </div>
</div>
<div class="row">
    <div class="col d-flex justify-content-center">
        <h5 class="color-changing-15">Total account clicks: {totalClicks}</h5>
    </div>
</div>
<div class="row">
    <div class="col d-flex justify-content-center">
        <button on:click={saveClicks} class="btn btn-success">Save your Clicks</button>
    </div>
</div>