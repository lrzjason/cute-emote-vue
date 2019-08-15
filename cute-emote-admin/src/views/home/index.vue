<template>
  <el-container>
    <el-header>
      <el-row class="header-container" type="flex" justify="center">
        <el-col :span="4">
            <img :src="logo" class="header-logo">
            <h1 class="header-title">{{ title }} </h1>
        </el-col>
        <el-col :span="12">
          <el-menu
            background-color="#2b2f3a"
            menu-trigger="click"
            class="home-nav"
            mode="horizontal"
            @select="handleSelect"
            text-color="#d0d0d0"
            active-text-color="#fff"
          >
            <!-- <el-menu-item index="1">About</el-menu-item> -->
            <!-- <el-menu-item index="2">Donate</el-menu-item> -->
            <el-dropdown trigger="click">
              <el-menu-item index="3" class="pr-0">Emotes<i class="el-icon-arrow-down el-icon--right"></i></el-menu-item>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="submitEmotes">Submit New Emotes</el-dropdown-item>
                <el-dropdown-item command="submissions">My Submissions</el-dropdown-item>
                <el-dropdown-item command="library">Public Library</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown trigger="click">
              <el-menu-item index="4" class="pr-0">Channels<i class="el-icon-arrow-down el-icon--right"></i></el-menu-item>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="channels">Channels</el-dropdown-item>
                <el-dropdown-item command="channel" divided>{{uname}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown trigger="click">
              <el-menu-item index="5" class="pr-0">
                <div class="avatar-wrapper">
                  <img :src="avatar" class="user-avatar">
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
              </el-menu-item>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="submissions">My Submissions</el-dropdown-item>
                <el-dropdown-item command="channel" >My Channel</el-dropdown-item>
                <el-dropdown-item command="logout" divided>Log Out</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="10">
          <h1 class="cover-header">The Bilibili Enhancement Suite</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="10">
          <div class="cover-desc">
            <div>
              Get custom emotes and tons of new features
            </div>
            <div>
              you'll never want to go without.
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="mt-20">
        <el-col :span="20">
          <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="mt-20">
        <el-col :span="3">
          <el-button type="success" icon="el-icon-download">Donwload for Google Chrome</el-button>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      logo: require('@/assets/cute-emote-v1.png'),
      title: 'Cute Emote',
      avatar: 'https://i2.hdslb.com/bfs/face/0aade4165a439fcd1b835e29c3b1b8bedfed9747.jpg@100w_100h.webp',
      uname: 'Ashes小志'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.cover-desc{
  text-align: center;
  font-size: 25px;
}
.cover-header{
  font-size: 40px;
  text-align: center;
}
.mt-20{
  margin-top: 20px;
}
.pr-0{
  padding-right: 0px;
}
.el-header{
  padding: 0px;
}
.header-container {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #2b2f3a;
  // text-align: center;
  overflow: hidden;
  & .header-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 12px;
  }
  & .header-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 60px;
      font-size: 32px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
  }
  & .home-nav{
    float: right;
  }
  .avatar-wrapper {
    // margin-top: 10px;
    position: relative;
    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      }
  }
}
</style>
