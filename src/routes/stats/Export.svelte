<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import type { VoteData } from "$lib/firebase";

	import * as FileSaver from "file-saver";
	import * as XLSX from "xlsx";

	export let data: VoteData[];

	const fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	// Desired file extesion
	const fileExtension = ".xlsx";

	export const exportToSpreadsheet = <TData extends any[]>(data: TData, fileName: string) => {
		//Create a new Work Sheet using the data stored in an Array of Arrays.
		const workSheet = XLSX.utils.json_to_sheet(data);
		// Generate a Work Book containing the above sheet.
		const workBook = {
			Sheets: { data: workSheet, cols: [] },
			SheetNames: ["data"]
		};
		// Exporting the file with the desired name and extension.
		const excelBuffer = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
		const fileData = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(fileData, fileName + fileExtension);
	};

	const exportToExcel = () => {
		console.log(data);
		exportToSpreadsheet(data, "test");
	};
</script>

<Button variant="secondary" on:click={exportToExcel}>Export to Excel</Button>
