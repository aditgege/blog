<template>
  <div class="navbar clearfix">
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
    <div class="navbar__profile">
      <nuxt-link
        to="/">
        <img
          src="/images/profile-rounded.png"
          alt="@aditgege"
          class="__img">
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss" scoped>
.navbar{
  display: flex;
  margin:0 0 0 auto;
  &__item{
    display: flex;
    list-style: none;
    margin: auto 0 auto auto ;
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
  &__profile{
    margin: auto 0 auto 20px ;
    // background: var(--textLink);
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
    align-content: center;
    align-items: center;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    img{
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
