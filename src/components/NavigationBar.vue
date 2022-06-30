<template>
  <nav :class="'navbar'">
    <div class="app-logo">
      <router-link to="/" class="app-logo__link"></router-link>
    </div>
    <el-menu
      :router="true"
      mode="horizontal"
      :background-color="BACKGROUND_COLOR"
      :text-color="'#2fa'"
      :active-text-color="'#fff200'"
      :collapse-transition="false"
    >
      <el-menu-item :route="{ name: 'books' }" index="books">
        <span>Books</span>
      </el-menu-item>
      <el-menu-item :route="{ name: 'addBook' }" index="addBook">
        <span>New book</span>
      </el-menu-item>
      <el-menu-item :route="{ name: 'authors' }" index="authors">
        <span>Authors</span>
      </el-menu-item>
      <el-menu-item :route="{ name: 'addAuthor' }" index="addAuthor">
        <span>New author</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script setup>
const BACKGROUND_COLOR = "#007077";
</script>

<style lang="scss" scoped>
@import "@/element-variables.scss";
.header-nav {
  li {
    margin-right: 20px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}

.navbar {
  position: relative;
  display: grid;
  grid-template-columns: 135px auto 70px;
  color: #fff;

  .btn-logout {
    color: #fff;
  }

  .btn-settings {
    background: none;
    border-radius: 0;
    border: none;
    padding: 8px 10px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: rgb(1, 49, 97);
      border: none;
    }
  }
}

.el-menu--horizontal {
  margin-left: 25px;
  > .el-menu-item {
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    a {
      text-decoration: none;
    }
    span {
      padding: 3px 5px;
    }
  }

  .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
}

.wline-dropdown {
  .el-dropdown-menu__item {
    a {
      text-decoration: none;
      display: block;
    }
  }
}

.app-logo {
  height: 42px;
  position: relative;
  overflow: hidden;
  background: none;

  &__link {
    display: block;
    background-image: url("@/assets/images/logo.png");
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position-y: center;
  }
}
</style>
