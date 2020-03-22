let net;
const classifier = knnClassifier.create();



async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
  // document.getElementById("demo").innerHTML = result[0].className;
  text = "<ul>";
  result.forEach(resFunction);
  text += "</ul>";
  document.getElementById("demo").innerHTML = text;
  function resFunction(value) {
    text += "<li>className : " + value.className + " probability: " + value.probability + "</li>";
  }
}

app();