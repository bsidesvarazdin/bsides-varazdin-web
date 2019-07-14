<template>
  <header :class="{ hidden: !isActive }" class="sidebar">
    <div class="menu">
      <router-link :to="$localePath" class="logo">
        <Logo />
      </router-link>
      <nav class="internal">
        <ul v-if="items.length">
          <li v-for="(item, i) in items" :key="i" @click="toggle">
            <a
              v-if="item.type === 'external'"
              :href="item.to"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.title }}
            </a>
            <router-link v-else :to="item.to">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@theme/components/Logo";

export default {
  name: "Sidebar",
  components: {
    Logo,
  },
  props: ["items", "isActive"],
  methods: {
    toggle() {
      this.$emit("menu-toggle", !this.$props.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background: $background-color;
  box-shadow: 0px -8px 12px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px -8px 12px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -8px 12px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.35s ease-in-out;

  &.hidden {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    transform: translateY(100%);
  }

  .menu {
    margin-bottom: 6rem;

    .logo {
      display: none;
    }

    .internal {
      ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
          position: relative;
          overflow: hidden;

          a {
            display: block;
            position: relative;
            padding: 2rem 0;
            color: $foreground-color;
            font-size: 1.8rem;
            font-weight: 700;
            text-align: center;
            transition: color 0.35s ease, background-color 0.35s ease;

            &.router-link-exact-active,
            &:hover {
              background: $gray-dark-color;
              color: $primary-color;
            }
          }
        }
      }
    }
  }

  @include lg {
    top: 0;
    right: auto;
    width: $sidebar-width;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;

    &.hidden {
      transform: none;
      transition: none;
    }

    .menu {
      margin: auto 0;

      .logo {
        display: inline;
        margin: 2.1rem 0 7rem 0;
      }
    }
  }
}
</style>
