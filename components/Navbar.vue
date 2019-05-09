<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link class="navbar-brand" to="/">Vue-Nuxt-Knockout</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <nuxt-link tag="li" active-class="active" class="nav-item" to="/apply-now">
          <a class="nav-link" href="#">Apply now</a>
        </nuxt-link>
        <nuxt-link tag="li" active-class="active" class="nav-item" to="/application-status">
          <a class="nav-link" href="#">Application status</a>
        </nuxt-link>
        <nuxt-link tag="li" active-class="active" class="nav-item" to="/my-forms">
          <a class="nav-link" href="#">My forms</a>
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>
