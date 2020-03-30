// function for detecting dom content
document.addEventListener('DOMContentLoaded', () => {
    console.log('working ... ');

    // variable references for canvas and webGL
    var canvas = document.getElementById('shapes');
    var webgl = canvas.getContext('webgl');

    // detecting if webGl not supported or has experimental on old browser
    if(!webgl) {
        console.log('WebGL not supported, falling back on experimental webGL');
        webgl = canvas.getContext('exoerimental-webgl');
    }
    if (!webgl) {
        alert('Your browser does not support WebGL');
    }

    // TODO
    webgl.clearColor(0.75, 0.85, 0.8, 1.0);
    webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
});

// for point reading
document.getElementById('point-file').addEventListener('Change', getFile);

function getFile(event) {
    const input = event.target;
    if ('files' in input && input.files.length > 0) {
        placeFileContent(document.getElementById('textarea1'), input.files[0]);
    }
}

function placeFileContent(target, file) {
    readFileContent(file).then(content => {
        target.value = content;
    }).catch(err => console.log(err));
}

function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
    });
}