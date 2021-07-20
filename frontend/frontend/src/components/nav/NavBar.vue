<template>
    <div>
        <div class="flex-1 flex flex-col">
		<nav class="px-4 flex justify-between bg-white h-16 border-b-2">

			<!-- top bar left -->
			<ul class="flex items-center">
				<!-- add button -->
				<li class="">
					<router-link :to="{name:'home'}"><mdi:home class="text-5xl"/></router-link>
					
				</li>
			</ul>

			<ul class="flex items-center">
				<!-- add button -->
				<li>
					<router-link :to="{name:'home'}" class="text-3xl pl-8 lg:pl-0 text-gray-700">
					<span class="font-bold px-5">4xsta Ink</span></router-link>
				</li>
			</ul>


			<!-- to bar right  -->
			<ul class="flex items-center mr-5">

				<li class="pr-6">
					<router-link :to="{name:'teachers'}"
					class="text-lg font-bold"
					>
						Teachers
					</router-link>
				</li>
				<li class="pr-6">
			 	<router-link :to="{name:'students'}"
					class="text-lg font-bold"
					>
						Students
					</router-link>
				</li>

			</ul>

		</nav>
	</div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.router-link-active{
	color:green;
	border-bottom: 5px solid green;
	background-color: rgba(0, 128, 0, 0.123);
	border-radius: 10px;
	padding: 5px;
}
router-link{
	border: 2px solid green;
	background-color: rgba(0, 128, 0, 0.123);
	border-radius: 10px;
	padding: 5px;
}
</style>