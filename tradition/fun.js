const traecke = [
    {src: "trd/1.mp3", title: "Бабки"},
    {src: "trd/2.mp3", title: "Зашибись"},
    {src: "trd/3.mp3", title: "Мясо дорожает"},
    {src: "trd/4.mp3", title: "Неновижу блядей"},
    {src: "trd/5.mp3", title: "Против хохлов пусть идут нахуй"},
    {src: "trd/6.mp3", title: "Попса херня"},
    {src: "trd/7.mp3", title: "Против"},
    {src: "trd/8.mp3", title: "Разбежались"},
    {src: "trd/9.mp3", title: "Увы"},
    {src: "trd/10.mp3", title: "Хохлы"},
    {src: "trd/11.mp3", title: "Хуета"},
];
let cur = 0;

const audio = document.getElementById("audio");
function load(index) {
    audio.src = traecke[index].src;
    document.getElementById("audio");
};
load(cur);
document.querySelector(".bt").addEventListener('click', function() {
    cur = (cur - 1 + traecke.length) & traecke.length;
    load(cur);
    let name  = traecke[cur].title;
    const el = document.querySelector(".sd");
    el.textContent = name;
    audio.play();
});
document.querySelector(".bt1").addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        let name  = traecke[cur].title;
        const el = document.querySelector(".sd");
        el.textContent = name;
    } else {
        audio.pause();
    }
});
document.querySelector(".bt2").addEventListener('click', function() {
    cur = (cur + 1) % traecke.length;
    load(cur)
    let name  = traecke[cur].title;
    const el = document.querySelector(".sd");
    el.textContent = name;
    audio.play();
});