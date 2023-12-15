document.addEventListener('DOMContentLoaded', function () {
    // Function to load Word document
    function loadWordDocument() {
        const wordDocumentUrl = 'path/to/your/word/document.docx';

        // Open the document in a new tab/window
        window.open(wordDocumentUrl, '_blank');

        console.log('Loading Word document...');
    }

    // Function to load Excel sheet
    function loadExcelSheet() {
        const excelDocumentUrl = 'path/to/your/excel/document.xls';

        // Open the document in a new tab/window
        window.open(excelDocumentUrl, '_blank');

        console.log('Loading Excel document...');
    }

    // Call functions to load documents when needed
    loadWordDocument();
    loadExcelSheet();
});
