let currentDocument;

function loadFile() {
  const fileInput = document.getElementById('fileInput');
  const editor = document.getElementById('editor');

  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      editor.innerHTML = e.target.result;
      currentDocument = file.name;
    };
    reader.readAsText(file);
  } else {
    alert('Please select a file.');
  }
}

function saveFile() {
  const editor = document.getElementById('editor');

  if (currentDocument) {
    const content = editor.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = currentDocument;
    link.click();
  } else {
    alert('No document loaded.');
  }
}
