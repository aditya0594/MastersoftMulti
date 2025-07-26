const XLSX = require('xlsx');
const fs = require('fs');

function getLastColumnCellValue(filePath, sheetName, row) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  const range = XLSX.utils.decode_range(sheet['!ref']);
  let lastColumnIndex = -1;

  for (let c = range.s.c; c <= range.e.c; c++) {
    const cellAddress = XLSX.utils.encode_cell({ r: row - 1, c });
    if (sheet[cellAddress]) {
      lastColumnIndex = c;
    }
  }

  if (lastColumnIndex === -1) return null;

  const lastCellAddress = XLSX.utils.encode_cell({ r: row - 1, c: lastColumnIndex });
  const cell = sheet[lastCellAddress];

  return cell ? cell.v : null;
}

function writeDataToLastRow(filePath, sheetName, value) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  const range = XLSX.utils.decode_range(sheet['!ref']);
  const lastRowIndex = range.e.r;
  const lastColumnIndex = range.e.c;

  const targetCellAddress = XLSX.utils.encode_cell({ r: lastRowIndex + 1, c: lastColumnIndex });
  sheet[targetCellAddress] = { t: 's', v: value };

  sheet['!ref'] = XLSX.utils.encode_range({
    s: range.s,
    e: { r: lastRowIndex + 1, c: lastColumnIndex }
  });

  XLSX.writeFile(workbook, filePath);
}

module.exports = {
  getLastColumnCellValue,
  writeDataToLastRow
};
