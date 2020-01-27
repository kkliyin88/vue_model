<template>
    <div class="main_wrap">
		<section class='header'>
			<!-- <p>123</p>
			<p>123</p>
			<p>123</p>
			<p>123</p>
			<p>123</p> -->
			<Header> </Header>
		</section>
	  <section class='content'>
		<transition name="fade" mode="out-in" appear>
		  <keep-alive >
			<div >
				<router-view></router-view>
			</div>
		 </keep-alive>
		</transition>
	  </section>
	  <!-- <section class='footer' >
		 <Footer></Footer> 
	  </section> -->
    </div>
</template>
<script>
  import Header from '@/components/head/index';
  import Footer from '@/components/footer/index';
    export default {
      name: 'Home',
      components:{
        Header,Footer
      },
      data () {
        return {
        }
      },
      mounted(){
      },
      computed:{

      },
      methods:{
      }
    }
</script>
<style less='lange' scoped>
	.main_wrap{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: hidden;
		height: 100vh;
	}
	.header{
		width: 100%;
		height: 100px;
		border: 1px solid green;
	}
   .fade-enter,.fade-leave-to{
	  opacity:  0;/*透明度*/
	  transition: all 2s ease;
	}
	.content{
		padding-bottom: 300px;
		padding-top: 200px;
		padding-left: 8%;
		padding-right: 8%;
		background: #f5f5f5;
		overflow-y: scroll;
		flex: 1;
	}
</style>
