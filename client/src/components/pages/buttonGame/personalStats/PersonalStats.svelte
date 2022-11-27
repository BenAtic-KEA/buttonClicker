<script>
import { personalCount, resetCount } from '../../../../store/stores.js'
import toastr from 'toastr';

let personalCountValue;
let totalClicks = 0;
    personalCount.subscribe(value => {
        personalCountValue = value;
    });



// Fetch get stored clicks
async function getTotalClicks(){
    const countRes = await fetch('/api/getTotalClicks')
        if(countRes.ok){
            const countResult = await countRes.json()
            let totalCount = countResult.data.totalCount
            totalClicks = totalCount
        } else {
            totalClicks = totalClicks
        }
    return totalClicks
}

getTotalClicks();
//Fetch post personal count clicks
async function saveClicks(){
    let clicks = personalCountValue
    //const response = fetch()
    const res = await fetch('/api/saveClicks', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                clicks
            })
        })
        if(res.ok){
            const result = await res.json()
            Command: toastr["success"](result.data.message)
            personalCount.set(0);
            resetCount.set(true);
        } else {
            const json = await res.json()
            Command: toastr["warning"](`
                ${json.data.message}`)
        }
        const countRes = await fetch('/api/getTotalClicks')
        if(countRes.ok){
            const countResult = await countRes.json()
            let totalCount = countResult.data.totalCount
            totalClicks = totalCount
        } else {
            totalClicks = totalClicks
        }
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