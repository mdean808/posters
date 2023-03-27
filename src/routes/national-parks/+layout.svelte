<script>
	import NPSLogo from '../../assets/NPSLogo.png';
</script>

<div class="border-b border-black py-4 px-2">
	<div class="text-xl text-blue-500 underline">
		<a href="/national-parks">
			<img src={NPSLogo} class="w-32" alt="National Park Service Logo" />
		</a>
		<div class="mt-4 text-xl text-blue-500 underline">
			<a href="/national-parks/signs">signs</a>
		</div>
	</div>
</div>
<div class="bg-[#f9f2e5]">
	<slot />
</div>
