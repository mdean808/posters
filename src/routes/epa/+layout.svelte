<script lang="ts">
	import { page } from '$app/stores';

	let printMode = false;

	const getName = (url: URL) => {
		if (url.pathname.includes('color')) {
			return 'Program Colors';
		}
	};
</script>

{#if !printMode}
	<div class="border-b border-black py-3 px-16">
		<a href="/epa" class="text-blue-500">
			<svg
				class="w-56"
				xmlns="http://www.w3.org/2000/svg"
				xml:space="preserve"
				viewBox="-179 380.3 100.6 30.9"
			>
				<path
					fill="currentColor"
					d="M-154 392.1c-1.2 4.3-5 7.3-9.5 7.4-4.5-.1-8.3-3.1-9.5-7.4 0 0 2.2 2.3 0 0 .6.7 1.5 1 2.4 1s1.8-.3 2.4-1c.6.7 1.5 1 2.4 1s1.8-.3 2.4-1c.6.7 1.5 1 2.4 1s1.8-.3 2.4-1c.6.7 1.5 1 2.4 1s1.6-.3 2.2-1m.1-2.2c0-5.3-4.3-9.6-9.6-9.6s-9.6 4.3-9.6 9.6h8.6c-1.1-.4-1.8-1.4-1.8-2.6 0-1.5 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.1-.7 2.2-1.7 2.6h8.5m-9 21.3c.2-8.2 6.6-15.3 14.8-15.6 0 8.3-6.5 15.1-14.8 15.6m-1.2 0c-.2-8.2-6.6-15.3-14.9-15.6.1 8.3 6.6 15.1 14.9 15.6m38.3-30.2h-19.5v29.5h19.5v-4.6h-13.4V398h13.4v-4.7h-13.4v-7.8h13.4V381m7.3 12.3h6c2 0 3.4-1.9 3.4-3.9.1-2-1.4-3.6-3.3-3.8h-5.6v24.9h-6.3V381h13.8c4.5 0 7.8 3.9 7.8 8.4s-3.3 8.6-7.8 8.6h-8v-4.7m9.5 17.2h6.6l2.9-7.8h12l-1.8-4.9h-8.5l4.2-11.2 8.7 23.9h6.5L-90.1 381h-7.5l-11.4 29.5"
				/>
			</svg>
		</a>
		<div class="mt-4 text-xl text-blue-500 underline">
			<a href="/epa/brochures">brochures</a>
			<br />
			<a href="/epa/colors">program colors</a>
		</div>
		<button class="absolute right-4 top-2 hover:underline" on:click={() => (printMode = true)}
			>print</button
		>
	</div>
{:else}
	<div class="group border-b border-black py-3 px-8">
		<a href="/epa" class="text-blue-500">
			<svg
				class="w-56"
				xmlns="http://www.w3.org/2000/svg"
				xml:space="preserve"
				viewBox="-179 380.3 100.6 30.9"
			>
				<path
					fill="currentColor"
					d="M-154 392.1c-1.2 4.3-5 7.3-9.5 7.4-4.5-.1-8.3-3.1-9.5-7.4 0 0 2.2 2.3 0 0 .6.7 1.5 1 2.4 1s1.8-.3 2.4-1c.6.7 1.5 1 2.4 1s1.8-.3 2.4-1c.6.7 1.5 1 2.4 1s1.8-.3 2.4-1c.6.7 1.5 1 2.4 1s1.6-.3 2.2-1m.1-2.2c0-5.3-4.3-9.6-9.6-9.6s-9.6 4.3-9.6 9.6h8.6c-1.1-.4-1.8-1.4-1.8-2.6 0-1.5 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.1-.7 2.2-1.7 2.6h8.5m-9 21.3c.2-8.2 6.6-15.3 14.8-15.6 0 8.3-6.5 15.1-14.8 15.6m-1.2 0c-.2-8.2-6.6-15.3-14.9-15.6.1 8.3 6.6 15.1 14.9 15.6m38.3-30.2h-19.5v29.5h19.5v-4.6h-13.4V398h13.4v-4.7h-13.4v-7.8h13.4V381m7.3 12.3h6c2 0 3.4-1.9 3.4-3.9.1-2-1.4-3.6-3.3-3.8h-5.6v24.9h-6.3V381h13.8c4.5 0 7.8 3.9 7.8 8.4s-3.3 8.6-7.8 8.6h-8v-4.7m9.5 17.2h6.6l2.9-7.8h12l-1.8-4.9h-8.5l4.2-11.2 8.7 23.9h6.5L-90.1 381h-7.5l-11.4 29.5"
				/>
			</svg>
		</a>
		<h1 class="w-full bg-white pt-4 text-4xl">{getName($page.url)}</h1>
		<button
			class="absolute right-4 top-2 opacity-0 hover:underline group-hover:opacity-100"
			on:click={() => (printMode = false)}>cancel</button
		>
	</div>
{/if}
<div class="overflow-x-scroll bg-[#f9f2e5]">
	<slot />
</div>
