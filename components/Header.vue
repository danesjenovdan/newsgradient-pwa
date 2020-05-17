<template>
  <div class="ng-header">
    <div class="flex flex-justify--space-between">
      <div class="flex">
        <nuxt-link to="/" class="flex flex--1 mr8">
          <h1 hidden>NEWSGRADIENT</h1>
          <img src="@/assets/svg/logo-text.svg" class="" width="300" />
        </nuxt-link>
        <h2 class="">
          5 most reported events by Bosnian<br />
          press sorted by the partisan bias.
        </h2>
      </div>
      <div class="flex flex-align--center links-container flex-justify--space-evenly">
        <router-link
          :to="link.to"
          v-for="link in links"
          :key="link.to"
          :class="['link', { 'link--active': link.to === $route.path }]"
          >{{ link.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        { to: '/', title: 'Events' },
        { to: '/about', title: 'About' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ng-header {
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px -10px 20px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 6rem;
}

.logo-link {
  text-decoration: none;
  display: block;
}

h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  margin-left: 0.5rem;
}

.links-container {
  width: 20vw;
}

.link {
  color: #3f3942;
  text-decoration: none;
  font-size: 27px;
  font-weight: bold;

  &:hover {
    color: #ea4243;
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }

  &--active {
    color: #ea4243;
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }
}

#ng-header {
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px -10px 20px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 6rem;

  /*.flex-row {*/
  /*  display: flex;*/
  /*  align-items: center;*/

  /*  nav {*/
  /*    margin-left: auto;*/

  /*    ul {*/
  /*      list-style: none;*/
  /*      display: flex;*/
  /*      margin: 0;*/
  /*      padding: 0;*/
  /*      width: 100%;*/

  /*      li {*/
  /*        margin-right: 4rem;*/

  /*        &:last-child {*/
  /*          margin-right: 0;*/
  /*        }*/

  /*        a {*/
  /*          text-decoration: none;*/
  /*          color: inherit;*/
  /*          font-size: 27px;*/
  /*          font-weight: 400;*/
  /*          line-height: 1;*/

  /*          &:hover {*/
  /*            text-decoration: underline;*/
  /*          }*/

  /*          &.router-link-active {*/
  /*            text-decoration: underline;*/
  /*            color: #e00;*/
  /*          }*/
  /*        }*/
  /*      }*/
  /*    }*/
  /*  }*/
  /*}*/
}
</style>
