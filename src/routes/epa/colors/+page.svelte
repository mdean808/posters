<script>
	import EpaLogo from '../../../components/epa/EPALogo.svelte';
</script>

<div class="mx-auto w-full py-5 px-8">
	<div class="mb-4 grid grid-cols-3 gap-x-4">
		<div class="text-2xl">
			<p>
				Nine individual colors have been designated for the present nine EPA program groups. The
				colors are derived from common associations appropriate to the name or activity of each
				program. Below is a list of the programs and the colors designated.
			</p>
			<p class="indent-5">
				Color swatches in the Reproduction Section of this manual and printed on uncoated paper. If
				coated paper is to be used, the printer should be requested to make adjustments to the ink
				formulations to maintain good color matches.
			</p>
		</div>
		<div class="text-2xl">
			<p class="indent-5">
				For those rare occasions when 4-color process printing is specified, program color swatches
				should be supplied to the printer for matching, accounting for paper selection, printing
				process, and other variables which may affect the color.
			</p>
			<p class="indent-5">
				The individual colors are to be used for the reproduction of the Agency Identifier and other
				typography or as a solid color background.
			</p>
		</div>
		<div class="text-2xl">
			<p class="indent-5">
				The reproduction of the Agency Identifier in of the of the program colors is only
				permissible when the publication relates to a particular program and is clearly identified
				as such. For all general and national publications which are not program oriented, the EPA
				logotype reproduces in the standard EPA Blue, EPA Green, or black.
			</p>
		</div>
	</div>
	<div class="mb-16 grid h-32 grid-cols-3 gap-x-4 gap-y-8 text-2xl font-semibold text-epa-red">
		<div class="grid grid-cols-3">
			<div class="align-end flex items-end"><p>Category</p></div>
			<div class="align-end flex items-end"><p>Color</p></div>
			<div class="align-end flex items-end">
				<p>Pantone Color <br />Matching System <br />Equivalent</p>
			</div>
		</div>
		<div class="bg-epa-yellow opacity-0" />
		<EpaLogo className="opacity-0 ml-2 text-epa-yellow" />
	</div>
	<div class="text-2xl font-semibold text-epa-red">
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Noise</p>
				<p>Noise Yellow</p>
				<p>PMS 130</p>
			</div>
			<div class="bg-epa-yellow" />
			<EpaLogo className="ml-2 text-epa-yellow" />
		</div>
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Toxic<br />Substances</p>
				<p>Toxic Red</p>
				<p>PMS 165</p>
			</div>
			<div class="bg-epa-orange" />
			<EpaLogo className="ml-2 text-epa-orange" />
		</div>
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Radiation</p>
				<p>Radiation Red</p>
				<p>PMS Super<br />Warm Red</p>
			</div>
			<div class="bg-epa-red" />
			<EpaLogo className="ml-2 text-epa-red" />
		</div>
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Technology <br />Transfer</p>
				<p>Technology <br />Purple</p>
				<p>PMS 527</p>
			</div>
			<div class="bg-epa-purple" />
			<EpaLogo className="ml-2 text-epa-purple" />
		</div>
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Air</p>
				<p>EPA Blue/<br />Air Blue</p>
				<p>PMS 300</p>
			</div>
			<div class="bg-epa-blue" />
			<EpaLogo className="ml-2 text-epa-blue" />
		</div>
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Water</p>
				<p>Water Blue</p>
				<p>PMS 321</p>
			</div>
			<div class="bg-epa-teal" />
			<EpaLogo className="ml-2 text-epa-teal" />
		</div>
		<!-- NEW COLOR -->
		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Research & Development</p>
				<p>EPA Green/<br />R&D Green</p>
				<p>PMS 369</p>
			</div>
			<div class="bg-epa-light-green" />
			<EpaLogo className="ml-2 text-epa-light-green" />
		</div>
		<!-- NEW COLOR -->
		<div class="my-2 grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Pesticides</p>
				<p>Pesticides Green</p>
				<p>PMS 392</p>
			</div>
			<div class="bg-epa-dark-green" />
			<EpaLogo className="ml-2 text-epa-dark-green" />
		</div>
		<!-- NEW COLOR -->
		<div class="my-2 grid grid-cols-3 gap-x-4 gap-y-8">
			<div class="grid grid-cols-3">
				<p>Solid Waste</p>
				<p>Solid Waste <br />Brown</p>
				<p>PMS 167</p>
			</div>
			<div class="bg-epa-brown" />
			<EpaLogo className="ml-2 text-epa-brown" />
		</div>
	</div>
</div>
