<template>
 <section class='head'>
   <div class='left'>
	   <section style='height: 31px;width: 113px;margin-top: 40px;'>
		    <img src='/static/image/head/logo.png' />
	   </section>
   </div>
    <div class='right'>
       <div style='height: 58px;'></div>
       <div style='height: 42px;'>
          <ul class='menu-ul'>
          <li v-for='item in menu' :key='item.path'>
            <router-link :to='item.path'>
				<span >{{item.meta.title}}</span>
			</router-link>
           </li>
         </ul>
       </div>
   </div>
 </section>
</template>
<script>
  import {menu} from '@/router'
    export default {
        name: 'Head',
        data () {
            return {
                menu:menu,
            }
        },
		mounted(){
			this.menu=this.menu.filter((item,i)=>{
				return item.flag 
			})	
		},
		methods(){
			
		}
    }
</script>
<style scoped lang='less'>
.head{
  background: #FFF;
  padding: 0 5%;
  display: flex;
  height: 100%;
  z-index: 10000;
  .left{
    width: 280px;
	display: flex;
	justify-content: center;
	flex-direction: row;
    img{
     height: 70px;
      width: 200px;
    }
  }
  .right{
    height: 100%;
    flex:1;
    ul{
      display: flex;
      height: 42px;
      li{
		border-radius: 2px;
        color: #555;
        font-size: 13px;
        a{
          color: #555;
          font-size: 13px;
		  display: inline-block;
          text-transform: uppercase;
           height: 42px;
          line-height: 42px;
        }
		span{
			  padding: 0 15px;
			   display: inline-block;
			   height: 30px;
			   line-height: 30px;
			   border-right: 1px solid #DDD;
		}
		span:hover{
			border-right:none;
		}
      }
    }
    li:last-child{
      border: none;
    }
    li:hover{
      background: #555;
      a{
        color: #FFF;
      }
    }
  }
}
</style>
