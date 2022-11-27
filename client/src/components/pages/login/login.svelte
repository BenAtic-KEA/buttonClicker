<script>
    import { useNavigate } from "svelte-navigator";
    import toastr from "toastr";

    const navigate = useNavigate();

    toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };
    let username;
    let password;
    let result;

    export let loggedIn;
    //TODO fetch post login
    async function login() {
        const res = await fetch("/api/login", {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (res.ok) {
            if (!loggedIn) {
                loggedIn = !loggedIn;
            }
            const json = await res.json();
            result = JSON.stringify(json.data.message);

            Command: toastr["success"](result);
            navigate("/game");
        } else {
            
            if(res.status === 429){
                const json = await res.json();
                result = JSON.stringify(json.data.message);
                Command: toastr["warning"](result);
            }else{
                const json = await res.json();
                result = JSON.stringify(json.data.message);
                Command: toastr["warning"](result);
            }
        }
    }
</script>

<div class="col">
    <div class="row">
        <div class="col d-flex justify-content-center">
            <h1 class="color-changing-15">Login</h1>
        </div>
    </div>

    <div class="row">
        <div class="col d-flex justify-content-center">
            <form class="form-border">
                <div class="form-group m-2">
                    <label class="color-changing-15" for="username"
                        >Username</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        bind:value={username}
                        placeholder="username"
                    />
                </div>
                <div class="form-group m-2">
                    <label class="color-changing-15" for="password"
                        >password</label
                    >
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        bind:value={password}
                        placeholder="Password"
                    />
                </div>
                <div class="d-flex justify-content-between">
                    <button
                        type="button"
                        on:click={login}
                        class="btn btn-primary m-2">Login</button
                    >
                </div>
            </form>
        </div>
    </div>
</div>
