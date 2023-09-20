function cal(){
    var w = parseInt(document.getElementById("w").value);
    var hf = parseInt(document.getElementById("hf").value);
    var hi = parseInt(document.getElementById("hi").value);
    hf = (hf * 12);
    hf = (hf + hi);
    hf = ((hf) * 0.0254);
    var bmi = ((w) / (hf * hf));
    document.getElementById("result").value = bmi;
}
