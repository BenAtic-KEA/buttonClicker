<script>


    // fetch post sign-up

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
                        placeholder="Verify password"
                    />
                </div>
                
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary m-2"
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