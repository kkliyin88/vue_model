<template>
  <div  class='wrap' >
	 <section class='banner'>
		 <Carousel v-model="value1" loop autoplay>
		    <CarouselItem v-for='(item,index) in bannerArr' :key='index'>
		       <div class='banner-img'>
				   <img :src='item.pic' />
			   </div>
		    </CarouselItem>
		</Carousel>	
	 </section>
	  <section class='text' style='margin-top: 20px;'>
	 	<p class='content_text'>{{msg}}</p>
	 </section>
	 
	 
	<section class='content'>
		<ul >
			<li v-for='(item ,index) in contentArr'>
				<div class='text-box-top' >
					<p class='pointer text-box-top-title'>{{item.title_top}}</p>
					<section>
						<p  class='content_text' v-for= 'item2 in item.msg_top'> {{item2}}</p>
					</section>
				</div>
				<div class='pic-box'>
					<img :src='item.pic' class='pointer'/>
				</div>
				<div class='text-box-bottom'>
					<p class='pointer text-box-bottom-title'>{{item.title_bottom}}</p>
					<p class='content_text' v-for= 'item2 in item.msg_bottom'> {{item2}}</p>
				</div>
			</li>
		</ul> 
	 </section>
  </div>
</template>
<script>

    export default {
      name: 'about',
      components:{

      },
      data () {
        return {
			value1:0,
			// title:'标题',
			msg:'Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities',
			bannerArr:[
				{
					pic:'/static/image/about/1.png',
					link:'',
					msg:'图一介绍'
				},
				{
					pic:'/static/image/about/2.png',
					link:'',
					msg:'图二介绍'
				},
			],
			contentArr:[
				{   
					title_top:'About us',
					msg_top:['At Star-An, we focus on ZigBee lighting control solutions for commercial, industrial, education, healthcare, residential and other market segments. Additionally, Star-An continues to expand its solutions portfolio, including software and services, to supports the advancement of smart buildings and smart cities.'],
					pic:'/static/image/about/2-1.png',
					link:'',
					msg_bottom:['Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities. Our goal is to help our clients save energy, time and money by using the most advanced effective lighting solutions for the specific application.'],
				},
				{  
					title_top:'ZigBee advantages',
					title_bottom:'Star-An unique',
					msg_top:[
					'Wireless communication with 2.4GHz with low power consumption',
					'Able to achieve remote control of LED light by multi solutions',
					'Construction cost saving without wiring',
					'Easy to install and implement',
					'Easy to maintain',
					],
					pic:'/static/image/about/2-2.png',
					link:'',
					msg_bottom:[
						'Supports large number of 2,500 devices connection',
						'Communication distance between devices ranges from 15 to 100 meters',
						'Higher the level of your network security and privacy',
						'Additional value: Heat-map, energy measurement, failure alert, emergency light auto test',
					],
				},
				{  
					title_top:'Why choose us',
					title_bottom:'What you would get from us',
					msg_top:[
					'We deliver our faith and goals to our clients, energy saving to save the planet, and reduce your running cost through an easier and a cool way. Expanded value to our customer by providing superior lighting and controls solutions.',
					],
					pic:'/static/image/about/2-3.png',
					link:'',
					msg_bottom:[
						'A full proposal including',
						'Budget ',
						'Customized solution for your project',
						'How much you could save within a certain period',
						'Technique support during installation',
					],
				},
			]
        }
      },
      mounted(){

      },

      methods:{
      }
    }
</script>
<style scoped lang='less'>
	 @import "./index.less";
</style>
