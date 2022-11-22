<script>
  import { Router, Link, Route } from "svelte-navigator";
    import Frontpage from "./components/pages/frontpage/Frontpage.svelte";
    import Game from "./components/pages/buttonGame/Game.svelte";
    import Leaderboard from "./components/pages/leaderboard/Leaderboard.svelte";
    import Login from "./components/pages/login/login.svelte";
    import Signup from "./components/pages/signUp/signup.svelte";
    import { onMount } from "svelte"

    let loggedIn = false

    function logout(){
      loggedIn = !loggedIn
    }
function getSession(){
       return fetch("http://localhost:8090/api/currentUser")
        .then(res => res.json())
  }

    onMount(async ()=> {
      const result = await getSession();
      if(result.isAuthenticated){
        loggedIn = true
      }
    })
  
    
  </script>
  
  <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid d-flex justify-content-center">
              <a class="navbar-brand" href="/">LOGO</a>
              <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                  <li class="nav-item m-2">
                    <Link to="/" class="color-changing-15">Home</Link>
                  </li>
                  <li class="nav-item m-2">
                    <Link to="/game" class="color-changing-15">Game</Link>
                  </li>
                  <li class="nav-item m-2">
                    <Link to="/leaderboard" class="color-changing-15">Leaderboard</Link>
                  </li>
                      {#if loggedIn}
                      <li class="nav-item m-2">
                        <Link to="/logout" on:click={logout} class="color-changing-15">Logout</Link>  
                      </li>
                      {:else}
                      <li class="nav-item m-2">
                        <Link to="/login" class="color-changing-15">Login</Link>
                      </li>
                      <li class="nav-item m-2">
                        <Link to="/sign-up" class="color-changing-15">Sign up</Link>
                      </li>
                      {/if}
            </div>
          </div>
        </nav>
      <div class="row">
            <Route path="/"><Frontpage /></Route>
            <Route path="/game"><Game bind:loggedIn/></Route>
            <Route path="/leaderboard"><Leaderboard /></Route>
            <Route path="/login"><Login bind:loggedIn /></Route>
            <Route path="/sign-up"><Signup /></Route>
        </div>
    </Router>