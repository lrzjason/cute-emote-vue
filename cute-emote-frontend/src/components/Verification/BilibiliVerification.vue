<template>
  <span>
    <el-button type="primary" @click="onVerify">{{btnLabel}}</el-button>
  </span>
</template>

<script>
export default {
  data () {
    return {
      openIframe: false,
      link: '',
      btnLabel: 'Connect to Bilibili',
      bilibiliLink: 'https://passport.bilibili.com/login?gourl=https://space.bilibili.com'
    }
  },
  methods: {
    onVerify () {
      this.openIframe = true
      this.link = this.bilibiliLink
      let verifyIframe = null
      let waitIframeInterval = setInterval(() => {
        verifyIframe = document.querySelector('#verifyIframe')
        if (verifyIframe) {
          let iframeDoc = verifyIframe.contentWindow.document
          let unameEl = iframeDoc.querySelector('#h-name')
          let channelLink = iframeDoc.querySelector('#i-live-link')
          if (unameEl) {
            clearInterval(waitIframeInterval)
            console.log('iframe', verifyIframe)
            console.log('unameEl', unameEl)
            console.log('channelLink', channelLink)
          }
        }
      }, 10)
    }
  }
}
</script>

<style>

</style>
