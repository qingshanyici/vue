<template>
  <div>
    <ul>
      <li>
        <router-link to="/film" tag="li" active-class="myactive">
          film
        </router-link>
      </li>
      <li>
        <router-link to="/cinema" tag="li" active-class="myactive"
          >cinema</router-link
        >
      </li>
      <li>
        <router-link to="/center" tag="li" active-class="myactive"
          >center</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style  scoped>
.myactive {
  color: red;
}
</style>