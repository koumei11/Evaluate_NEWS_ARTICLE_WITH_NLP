const render = function(data) {
    var polarity = document.getElementById("polarity");
    var subj = document.getElementById("subjectivity");
    var text = document.getElementById("text");
    var polarity_c = document.getElementById("polarity_confidence");
    var subj_c = document.getElementById("subjectivity_confidence");

    polarity.textContent = data.polarity;
    subj.textContent = data.subjectivity;
    text.textContent = data.text;
    polarity_c.textContent = data.polarity_confidence;
    subj_c.textContent = data.subjectivity_confidence;
}

module.exports = render;