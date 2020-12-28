<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">MEVN stack</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#Navbar"
          aria-controls="Navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ml-auto" id="Navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active{
  color: aquamarine !important;
}
</style>