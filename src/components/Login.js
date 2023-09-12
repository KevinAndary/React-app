<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <style>
        /* Add custom CSS styles to adjust the width of the input fields */
        .custom-input {
            width: 100%; /* Adjust the width to fill the container */
            max-width: 300px; /* Set a maximum width to prevent excessive stretching on larger screens */
            margin: 0 auto; /* Center the input fields horizontally */
        }
    </style>
    <!-- Include Bootstrap CSS (you may need to adjust the path) -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container my-3 py-3">
        <h1 class="text-center">Login</h1>
        <hr>
        <div class="row my-4">
            <div class="col-md-8 mx-auto">
                <form>
                    <div class="form-group">
                        <label for="Email">Email address</label>
                        <input
                            type="email"
                            class="form-control custom-input" <!-- Add custom-input class -->
                            id="Email"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input
                            type="password"
                            class="form-control custom-input" <!-- Add custom-input class -->
                            id="Password"
                            placeholder="Password"
                        />
                    </div>
                    <div class="my-3">
                        <p>New Here? <a href="/signup" class="text-decoration-underline text-info">Signup</a> </p>
                    </div>
                    <div class="text-center">
                        <button class="my-2 btn btn-dark" type="submit" disabled>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
