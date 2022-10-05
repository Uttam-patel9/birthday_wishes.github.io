var display = document.querySelector('.counter > h2');
var edtProfile = document.querySelector('#edt_profile');
var btnWish = document.querySelector('#btn_wish');
var thanks = document.querySelector('.message');
var count = document.querySelector('.count');
var countDownDate = new Date("May 27, 2019 10:00:00").getTime();
var footer = document.querySelector('footer');
var quotes = [
    'Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.',
    'How lucky we are to have something that makes saying goodbye so hard.',
    'What we call the beginning is often the end. And to make an end is to make a beginning. The end is where we start from.',
    'There are no goodbyes for us. Wherever you are, you will always be in our heart.',
    'You all have been our friends. That in itself is a tremendous thing.',
    'If you’re brave enough to say goodbye, life will reward you with a new hello.',
    'This is not a goodbye, my dear friends, this is a thank you',
    'The two hardest things to say in life are hello for the first time and goodbye for the last.',
    'Don’t cry because it’s over, smile because it happened.',
    'Man’s feelings are always purest and most glowing in the hour of meeting and of farewell.',
    'Great is the art of beginning, but greater is the art of ending.',
    'Don’t be dismayed at goodbyes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.',
    'It’s time to say goodbye, but I think goodbyes are sad and I’d much rather say hello. Hello to a new adventure.',
    'Only in the agony of parting do we look into the depths of love.',
    'So long as the memory of certain beloved friends lives in our heart, We shall say that life is good.',
    'The pain of parting is nothing to the joy of meeting again.',
    'Goodbyes are not forever, Goodbyes are not the end. They simply mean We’ll miss you, Until we meet again.'
];
var pp = document.querySelector('#pp');
var quote = document.querySelector('.quote');
var close = document.querySelector('.close-btn');


function generateQuote(){
    pp.classList.toggle('hide');
    var i = Math.floor(Math.random() * quotes.length);
    var q = quotes[i];
    quote.textContent = q;
    pp.classList.toggle('popup');
}

btnWish.addEventListener('click', (e) => {
    generateQuote();
});

close.addEventListener('click', function(){
    pp.classList.toggle('hide');
    pp.classList.toggle('popup');
})
var x = setInterval(() => {
    
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours < 10){
        hours = '0' + hours;
    }

    display.innerHTML = days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's';

    if (distance < 0) {
        clearInterval(x);
        thanks.innerHTML = '<h4 class="thanks">Farewell has begun!</h4>';
        display.innerHTML = '27th May';
    }
}, 1000);