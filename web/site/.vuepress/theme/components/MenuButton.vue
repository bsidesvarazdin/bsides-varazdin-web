<template>
  <button
    @click="toggle"
    :class="{ active: isActive, 'not-active': !isActive }"
    class="menu-toggle"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: "MenuButton",
  props: ["isActive"],
  methods: {
    toggle() {
      this.$emit("menu-toggle", !this.$props.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-toggle {
  position: fixed;
  bottom: -100px;
  left: 50%;
  z-index: 100;
  width: 100px;
  height: 100px;
  padding: 15px 35px;
  display: flex;
  flex-direction: column;
  background: $black-color;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: color 0.35s ease, background-color 0.35s ease;

  span {
    position: relative;
    display: block;
    width: 30px;
    height: 4px;
    border-radius: 3px;
    background: $foreground-color;
    transition: all 0.3s;

    + span {
      margin-top: 7px;
    }
  }

  &.active {
    background: $gray-dark-color;

    span {
      background-color: $primary-color;

      &:nth-child(1) {
        animation: ease 0.7s top forwards;
      }

      &:nth-child(2) {
        animation: ease 0.7s scaled forwards;
      }

      &:nth-child(3) {
        animation: ease 0.7s bottom forwards;
      }
    }
  }

  &.not-active {
    span {
      &:nth-child(1) {
        animation: ease 0.7s top-2 forwards;
      }

      &:nth-child(2) {
        animation: ease 0.7s scaled-2 forwards;
      }

      &:nth-child(3) {
        animation: ease 0.7s bottom-2 forwards;
      }
    }
  }

  @include lg {
    display: none;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }

    50% {
      top: 10px;
      transform: rotate(0);
    }

    100% {
      top: 10px;
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: 10px;
      transform: rotate(45deg);
    }

    50% {
      top: 10px;
      transform: rotate(0deg);
    }

    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }

    50% {
      bottom: 12px;
      transform: rotate(0);
    }

    100% {
      bottom: 12px;
      transform: rotate(135deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: 12px;
      transform: rotate(135deg);
    }

    50% {
      bottom: 12px;
      transform: rotate(0);
    }

    100% {
      bottom: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
}
</style>
