<script>
export default {
  data() {
    return {
      categories: ["Donna", "Uomo", "Bambino"],
      logo: "/boolean-logo.png",
      icons: [['fas', 'user'], ['far', 'heart'], ['fas', 'bag-shopping']],
    };
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <ul>
          <li v-for="category in categories">
            <a href="#">{{ category }}</a>
          </li>
          <li class="logo"><img :src="logo" alt=""></li>
          <font-awesome-icon class="icons" v-for="icon in icons" :icon="icon" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;

/* header */
.header {
  width: 100%;
  background-color: $navbar-color;
}

/* nav  */
.navbar {
  display: flex;
  padding: 20px;

  ul {
    display: flex;
    gap: 10px;
    width: 100%;
  }
}

/* logo  */
.logo {
  flex-grow: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100px;
  }
}

.icons {
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
}
</style>
