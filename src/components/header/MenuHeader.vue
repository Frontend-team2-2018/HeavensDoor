<template>
  <header>
    <b-button id='menubtn' class="btn-menu" variant="outline-info" @click="openMenu">
      <!-- <i class="material-icons">menu</i> -->
      <span>MENU</span>
    </b-button>
    <div id="menu-sidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeMenu()">&times;</a>
      <router-link to="/app/toilet" v-on:click.native="closeMenu()">トイレ状況確認</router-link>
      <router-link to="/app/toilet-bot" v-on:click.native="closeMenu()">チャットボット</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "menu-header",
    data() {
      return {
        parentId: "",
        deptName: "",
        contactName: "",
        companyName: "",
        contactPersonName: ""
      };
    },
    created: function () {
      
    },
    methods: {
      openMenu: function () {
        document.getElementById("menu-sidenav").style.width = "280px";
        setTimeout(function () {
          $("#menu-sidenav a").css("display", "block");
        }, 200);
      },
      closeMenu: function () {
        document.getElementById("menu-sidenav").style.width = "0";
        setTimeout(function () {
          $("#menu-sidenav a").css("display", "none");
        }, 100);
      }
    }
  };

</script>

<style scoped>
  .btn-menu::before{
    display: inline-block;
    font-family: 'Material Icons';
    font-size: 1rem;
    content: "\E5D2";
    background-size:contain;
  }

  header {
    background-color: white;
    height: 60px;
    box-sizing: border-box;
  }

  .text-logo {
    display: inline-block;
    vertical-align: middle;
    border-style: none;
    position: relative;
    top: 26px;
    right: -20px;
    font-size: 25px;
    color: white;
  }

  .meta {
    color: #7e95c5;
    width: 200px;
    display: block;
    margin: -5px 0 0 225px;
    font-weight: 700;
    font-size: 0.3rem;
  }

  #menubtn {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 1.1rem;
  }

  #companybtn {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  #companybtn button {
    font-size: 1.1rem;
    min-width: 200px;
  }

  #companybtn .dropdown-menu {
    width: 100%;
    font-size: 1.1rem;
  }

  #companybtn .dropdown-menu a {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .sidenav {
    height: 100%;
    /* 100% Full-height */
    width: 0;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 600;
    /* Stay on top */
    top: 0;
    left: 0;
    background-color: rgba(30, 30, 30, 0.9);
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /* 0.5 second transition effect to slide in the sidenav */
    text-align: left;
  }
  /* The navigation menu links */

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1.4rem;
    color: white;
    display: none;
    transition: 0.5s;
  }
  /* When you mouse over the navigation links, change their color */

  .sidenav a:hover,
  .offcanvas a:focus {
    color: #f1f1f1;
  }
  /* Position and style the close button (top right corner) */

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 3rem;
    margin-left: 50px;
  }

</style>