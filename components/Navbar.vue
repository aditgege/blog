<template>
  <div class="navbar clearfix">
    <div class="navbar__profile">
      <nuxt-link
        to="/">
        <img
          src="/images/profile-rounded.png"
          alt="@aditgege"
          class="__img">
      </nuxt-link>
    </div>
    <ul class="navbar__item">
      <li>
        <nuxt-link
          to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/post">
          Post
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/post">
          Portfolio
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss" scoped>
.navbar{
  background-color: var(--textTitle);
  display: flex;
  margin:0 0 0 auto;
  &__profile{
    margin: auto 20px;
    img{
      height: 50px;

    }
  }
  &__item{
    right: 0;
    display: flex;
    list-style: none;
    li{
      font-weight: bold;
      margin: 0 5px;
      padding: 10px;
      // width: 100px;
      text-align: center;
       a:hover{
        text-decoration: none;
      }
    }
  }
}
</style>
