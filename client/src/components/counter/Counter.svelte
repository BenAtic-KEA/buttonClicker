<script>
 import {personalCount, resetCount} from "../../store/stores.js"
 import toastr from 'toastr'
 export let loggedIn
 
 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

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
  

  function popup(){ 
Command: toastr["warning"]("Login to play!")
}

</script>
<div class="row">
  <div class="col d-flex justify-content-center">
    {#if loggedIn}
    <button class="btn btn-secondary d-flex justify-content-center" on:click={increment}>
      Click me!
    </button>
    {:else}
    <button class="btn btn-secondary d-flex justify-content-center" on:click={popup}>
      Log in to play!
    </button>
    {/if}
  </div>
</div>
