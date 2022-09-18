<template>
<div class="all">
  <nav>
  <router-link to="/form">form</router-link>
  </nav>
  <div class="views">
  <router-view/>
  </div>
</div>
</template>
<style scoped>
.all{
  width:100%;
  height: 100%;
  background-color:black;
  position:absolute;
  color: white;
  font-size: 1.3em;
  font-family: sans-serif;
  letter-spacing: 2px ;
  margin:0px;

}

nav{
  color:white;
  text-decoration: none;
  height: 50px;
}
.views{
 display: block;
background-color: blue;
position:relative;
position:absolute;
width:100%;
height: 100%;
}

</style>