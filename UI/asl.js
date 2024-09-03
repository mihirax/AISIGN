const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const output = document.getElementById('output');

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;

        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
    } catch (err) {
        console.error('Error accessing camera:', err);
    }
}

async function loadModel() {
    try {
        const model = await tf.loadLayersModel('/Users/memih/Downloads/tfjs_target_dir/model.json');
        return model;
    } catch (err) {
        console.error('Error loading model:', err);
    }
}

async function detectSignLanguage(model) {
    try {
        await setupCamera();
        video.play();

        async function detect() {
            const predictions = tf.tidy(() => {
                const videoFrame = tf.browser.fromPixels(video).resizeNearestNeighbor([224, 224]).expandDims(0).toFloat().div(tf.scalar(255));
                return model.predict(videoFrame);
            });

            const predictedIndex = predictions.argMax(1).dataSync()[0];
            const predictedLabel = labelDict[predictedIndex];

            output.innerText = `Detected sign: ${predictedLabel}`;

            requestAnimationFrame(detect);
        }

        detect();
    } catch (err) {
        console.error('Error in sign language detection:', err);
    }
}

loadModel().then(model => detectSignLanguage(model));
