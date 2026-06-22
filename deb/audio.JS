const traecke = [
    {src: "../Musical-d/1.mp3", title: "Клей"},
    {src: "../Musical-d/2.mp3", title: "Празник пустоты "},
    {src: "../Musical-d/3.mp3", title: "Серый город"},
    {src: "../Musical-d/4.mp3", this: "Разломаный хоровод"},
    {src: "../Musical-d/5.mp3", title: "Празник гнили"},
    {src: "../Musical-d/6.mp3", title: "Дебилизм"},
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