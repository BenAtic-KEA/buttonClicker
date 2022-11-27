<script>
import toastr from 'toastr';
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

let username
let email
let password
let verifyPassword
let result
    // fetch post sign-up
    async function signUp(){

        const res = await fetch('http://localhost:8090/api/sign-up', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        if(res.ok){
            const json = await res.json()
            result = JSON.stringify(json)
            Command: toastr["success"](result)
        }else {
            const json = await res.json()
            let errorText = ''
            let existsError = JSON.stringify(json.error.exists)
            let usernameError = JSON.stringify(json.error.username)
            let passwordError = JSON.stringify(json.error.password)
            let emailError = JSON.stringify(json.error.email)
            console.log(existsError)
            if(existsError){
                errorText += existsError + '\n'
            }
            if(usernameError){
                errorText += usernameError + '\n'
            }
            if(passwordError){
                errorText += passwordError + '\n'
            }
            if (emailError){
                errorText += emailError + '\n'
            }
            Command: toastr["warning"](`
                ${errorText}
            `)
        }
    }
    

</script>

<div class="col">
    <div class="row">
        <div class="col d-flex justify-content-center">
            <h1 class="color-changing-15">Sign up</h1>
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
                    <small id="usernameHelpInline" class="help-line-color ">
                        Must be min. 6 characters long
                      </small>
                </div>
                <div class="form-group m-2">
                    <label class="color-changing-15" for="email"
                        >Email</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="email"
                        bind:value={email}
                        placeholder="Email"
                    />
                    <small id="emailHelpInline" class="help-line-color ">
                        
                      </small>
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
                    <small id="passwordHelpInline" class="help-line-color ">
                        Must be min. 8 characters long, contain atleast 1 symbol, upper and lower case
                      </small>
                </div>
                <div class="form-group m-2">
                    <label class="color-changing-15" for="verify-password">Verify password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="verify-password"
                        bind:value={verifyPassword}
                        placeholder="Verify password"
                    />
                </div>
                
                <div class="d-flex justify-content-end">
                    <button type="button" on:click={signUp} class="btn btn-primary m-2"
                        >Create account</button>
                </div>
            </form>
        </div>
    </div>
</div>

<style>

    .help-line-color{
        color: aqua;
        opacity: 40%;
    }

</style>