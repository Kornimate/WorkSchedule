import * as XLSX from "xlsx";
import DataContainer from "../models/DataContainer";
import { saveAs } from "file-saver";
import { GetCurrentMonthData, AddSummaryRow } from "../services/TimeService";
import { GetOffsetDateTime } from "../services/TimeService";
import "../styles/Download.css";

const Download = ({ offsetInMonths, offsetInWeeks, isWeeks} ) => {

    function DownloadReport(e){
        const date = isWeeks ? GetOffsetDateTime(offsetInWeeks, isWeeks) : GetOffsetDateTime(offsetInMonths, isWeeks)
        const data = AddSummaryRow(GetCurrentMonthData(DataContainer, offsetInMonths));
        const worksheet = XLSX.utils.json_to_sheet(data);
        
        const columnWidths = [
            { wch: 10 }, 
            { wch: 10 }, 
            { wch: 10 },
            { wch: 10 }, 
            { wch: Math.max("comment".length + 2, ...data.map((row) => row.comment.length + 2)) }, 
        ];

        worksheet["!cols"] = columnWidths;

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Work Schedule');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const fileBlob = new Blob([excelBuffer], {type: 'application/octet-stream'});
        saveAs(fileBlob, `Kornidesz_Mate_${date.getFullYear()}_${("0" + (date.getMonth() + 1)).slice(-2)}_Monthly_Report.xlsx`);
    }

    return (
        <button onClick={DownloadReport}>
            <h3>Monthly Report</h3>
        </button>
    )
}

export default Download;