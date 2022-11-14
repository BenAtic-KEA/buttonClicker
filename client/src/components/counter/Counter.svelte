<script>
 import {personalCount, resetCount} from "../../store/stores.js"


  let count = 0
  let reset;
  const increment = () => {
    resetCount.subscribe(value => reset = value)
    if(reset === true){
      count = 0
      resetCount.set(false)
    }else{
      count += 1
      personalCount.set(count)
    }
  }

</script>

<div class="row">
  <div class="col d-flex justify-content-center">
    <button class="btn btn-secondary d-flex justify-content-center" on:click={increment}>
      Click me!
    </button>
  </div>
</div>
