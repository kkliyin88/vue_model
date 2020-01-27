<template>
	<section class='foot'>
		 
		<ul class='foot-ul'>
			<li class='foot-ul-li'>
				<br />
			   <p v-for='item in address' style='color:#FFF;'>{{item}}</p>
			</li>
		</ul>
	</section>
</template>
<script>

    export default {
        name: 'Footer',
        data () {
            return {
              address:[
				'@2019 Copyright Star-An Limited. All rights reserved.',
				'Office Address:',
				'B906, Nanfang Building',
				 'Luofang Rd., Luohu Dist.,',
				 'Shenzhen, China, 518000.',
				 'Tel: +86 755 82683776',
				 'Email: info@star-an.com'
              ]
            }
        },
		mounted(){
			
		},
		methods(){
			
		}
    }
</script>
<style scoped lang='less'>
	.foot{
		height: 180px;
		width: 100%;
		background-color: #444;
		padding: 0 10%;
	}	
	.foot-ul{
		display: flex;
	}
	.foot-ul-li{
		display: inline-block;
		width: 300px;
		/* border:1px solid green; */
		height: 180px;
		line-height: 20px;
		
	}
	.foot-ul-li p{
		font-size: 8px;
	}
</style>
