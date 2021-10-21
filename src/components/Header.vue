<template>
  <header>
			<div class="container">
				<nav class="navbar navbar-expand-lg">
					<a href="#" class="navbar-brand">
						<img src="@/assets/logo.png">
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					<span class="navbar-toggler-icon"></span>
					<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
							<a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
							</li>
							<li class="nav-item">
							<a class="nav-link" href="#"><router-link to="/feature">Features</router-link></a>
							</li>
							<li class="nav-item">
							<a class="nav-link" href="#"><router-link to="/pricing">Pricing</router-link></a>
							</li>
							<li class="nav-item">
							<a class="nav-link active" href="#"><router-link to="/about">FAQ/ABOUT</router-link></a>
							</li>
							<li class="nav-item">
							<a class="nav-link" href="#"><router-link to="/result">Result</router-link></a>
							</li>
							<li class="nav-item">
							<a class="nav-link btn button btn1" href="#">S'INSCRIRE</a>
							</li>
							<li class="nav-item">
							<a class="nav-link btn button btn2" href="#">SE CONNECTER</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>



