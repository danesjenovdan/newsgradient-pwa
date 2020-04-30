<template>
  <div id="ng-header">
    <div class="container">
      <div class="flex-row">
        <router-link to="/" class="logo-link">
          <h1>NEWSGRADIENT</h1>
        </router-link>
        <h2>
          5 most reported events by Bosnian<br />
          press sorted by the partisan bias.
        </h2>
        <nav>
          <ul>
            <li><router-link exact to="/">Events</router-link></li>
            <li><router-link exact to="/about">About</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#ng-header {
  background-color: #fff;
  position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0px -10px 20px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 0;

  .flex-row {
    display: flex;
    align-items: center;

    .logo-link {
      text-decoration: none;
      display: block;

      h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 700;
        color: transparent;
        background-image: url('../assets/logo-text.svg');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 10em 100%;
        letter-spacing: 0.175em;
      }
    }

    h2 {
      margin: 0;
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;
      line-height: 1.2;
      margin-left: 0.5rem;
    }

    nav {
      margin-left: auto;

      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;

        li {
          margin-right: 4rem;

          &:last-child {
            margin-right: 0;
          }

          a {
            text-decoration: none;
            color: inherit;
            font-size: 1.65rem;
            font-weight: 900;
            line-height: 1;

            &:hover {
              text-decoration: underline;
            }

            &.router-link-active {
              text-decoration: underline;
              color: #e00;
            }
          }
        }
      }
    }
  }
}
</style>
