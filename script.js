function updatePreview() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = `<style>${document.getElementById('cssCode').value}</style>`;
    const jsCode = `<script>${document.getElementById('jsCode').value}<\/script>`;
    const previewFrame = document.getElementById('preview');
    previewFrame.contentDocument.open();
    previewFrame.contentDocument.write(htmlCode + cssCode + jsCode);
    previewFrame.contentDocument.close();
}

document.getElementById('htmlCode').addEventListener('keyup', updatePreview);
document.getElementById('cssCode').addEventListener('keyup', updatePreview);
document.getElementById('jsCode').addEventListener('keyup', updatePreview);