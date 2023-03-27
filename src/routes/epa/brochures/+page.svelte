<script>
	import BrochureBackground from '../../../components/epa/BrochureBackground.svelte';
	import BrochureOutline from '../../../components/epa/BrochureOutline.svelte';
	//TODO: import patterns from each brochure
	//      see https://s3.amazonaws.com/standardsmanualimages/EPA/prodGallery/epa_page_42-2000.jpg
	const brochures = [
		{
			color: 'epa-yellow',
			title: 'Noise Around Our Homes',
			shortTitle: 'Noise',
			month: 'January',
			year: '1977'
		},
		{
			color: 'epa-orange',
			title: 'Environmental Law',
			shortTitle: 'Toxic Substances',
			month: 'January',
			year: '1977'
		},
		{
			color: 'epa-red',
			title: 'Man-Made Radiation',
			shortTitle: 'Radiation',
			month: 'January',
			year: '1977'
		},
		{
			color: 'epa-purple',
			title: 'Upgrading Existing Wastewater Treatment Facilities',
			shortTitle: 'Technology Transfer',
			month: 'January',
			year: '1977'
		},
		{
			color: 'epa-blue',
			title: 'Smog, Health and You',
			shortTitle: 'Air',
			month: 'January',
			year: '1977'
		},
		{
			color: 'epa-teal',
			title: 'Making Your Wastewater Treatmeent Plant Work',
			shortTitle: 'Water',
			month: 'January',
			year: '1977'
		},

		{
			color: 'epa-light-green',
			title: 'Land Application of Sewage Effluents and Sludges',
			shortTitle: 'Research and Developement',
			description: 'Selected Abstracts',
			month: 'January',
			year: '1977'
		},

		{
			color: 'epa-dark-green',
			title: 'What You Should Know About the Pesticide Law',
			shortTitle: 'Pesticides',
			month: 'January',
			year: '1977'
		},

		{
			color: 'epa-brown',
			title: "Everybody's Business",
			shortTitle: 'Solid Waste',
			description: 'The Resource Conservation and Recovery Act',
			month: 'January',
			year: '1977'
		}
	];
</script>

<div class="py-2 px-2">
	<h2 class="my-2 w-[4in] text-xl font-semibold text-epa-red">Grid C</h2>
	<h2 class="my-2 w-[4in] text-xl font-semibold text-epa-red">4" x 9"</h2>
	<div class="flex overflow-x-scroll py-2">
		{#each brochures as brochure}
			<div class="mr-5 inline w-[4in]">
				<h2 class="my-2 w-[4in] text-xl font-semibold text-epa-red">{brochure.shortTitle}</h2>
				<div class="my-4">
					<BrochureOutline
						color={brochure.color}
						title={brochure.title}
						shortTitle={brochure.shortTitle}
						description={brochure.description}
						month={brochure.month}
						year={brochure.year}
					/>
				</div>
				<div class="my-4">
					<BrochureBackground
						color={brochure.color}
						title={brochure.title}
						shortTitle={brochure.shortTitle}
						description={brochure.description}
						month={brochure.month}
						year={brochure.year}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
