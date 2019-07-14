<template>
  <transition appear name="fade">
    <div class="theme">
      <Sidebar
        :items="sidebarItems"
        :isActive="sidebar.isActive"
        @menu-toggle="toggleSidebar"
      />
      <MenuButton :isActive="sidebar.isActive" @menu-toggle="toggleSidebar" />
      <div class="content">
        <Logo />
        <transition name="fade">
          <Content />
        </transition>
        <Footer />
      </div>
    </div>
  </transition>
</template>

<script>
import Sidebar from "@theme/components/Sidebar";
import MenuButton from "@theme/components/MenuButton";
import Logo from "@theme/components/Logo";
import Footer from "@theme/components/Footer";

export default {
  components: {
    Sidebar,
    MenuButton,
    Logo,
    Footer,
  },
  data() {
    return {
      sidebar: {
        isActive: false,
      },
    };
  },
  computed: {
    sidebarItems() {
      let items = [];

      for (const page of this.$site.pages) {
        items.push({
          order: page.frontmatter.order,
          title: page.frontmatter.title,
          to: page.path || page.regularPath,
          type: page.frontmatter.type || "internal",
        });
      }

      return items.sort((a, b) => {
        return a.order > b.order ? 1 : -1;
      });
    },
  },
  methods: {
    toggleSidebar(isActive) {
      this.sidebar.isActive = isActive;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/reset";
@import "../styles/style";
</style>

<style lang="scss" scoped>
.theme {
  .content {
    padding: 0 2rem;
  }

  @include lg {
    .logo {
      display: none;
    }

    .content {
      max-width: 1200px;
      margin-left: $sidebar-width;
      padding: 0 6rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
