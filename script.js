const btn = document.querySelector('#new-quote') ;
const quote = document.querySelector('.quote') ;
const person = document.querySelector('.person') ;

const quotes = [{
  quote: `"Life isn't about getting and having, it's about giving and being."`,
  person: `Kevin Kruse`
},
{
  quote: `"Whatever the mind of man can conceive and believe, it can achieve."`,
  person: `Napoleon Hill`
},
{
  quote: `"Strive not to be a success, but rather to be of value."`,
  person: `Albert Einstein`
},
{
  quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`,
  person: `Robert Frost`
},
{
  quote: `"I attribute my success to this: I never gave or took any excuse."`,
  person: `Florence Nightingale`
},
{
  quote: `"You miss 100% of the shots you don't take."`,
  person: `Wayne Gretzky`
},
{
  quote: `"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."`,
  person: `Michael Jordan`
},
{
  quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
  person: `Amelia Earhart`
},
{
  quote: `"Every strike brings me closer to the next home run."`,
  person: `Babe Ruth`
},
{
  quote: `"Definiteness of purpose is the starting point of all achievement."`,
  person: `W. Clement Stone`
},
{
  quote: `"We must balance conspicuous consumption with conscious capitalism."`,
  person: `Kevin Kruse`
},
{
  quote: `"Life is what happens to you while you're busy making other plans."`,
  person: `John Lennon`
},
{
  quote: `"We become what we think about."`,
  person: `Earl Nightingale`
},
{
  quote: `"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."`,
  person: `Mark Twain`
},
{
  quote: `"Life is 10% what happens to me and 90% of how I react to it."`,
  person: `Charles Swindoll`
},
{
  quote: `"The most common way people give up their power is by thinking they don't have any."`,
  person: `Alice Walker`
},
{
  quote: `"The mind is everything. What you think you become."`,
  person: `Buddha`
},
{
  quote: `"The best time to plant a tree was 20 years ago. The second best time is now."`,
  person: `Chinese Proverb`
},
{
  quote: `"An unexamined life is not worth living."`,
  person: `Socrates`
},
{
  quote: `"Eighty percent of success is showing up."`,
  person: `Woody Allen`
},
{
  quote: `"Your time is limited, so don't waste it living someone else's life."`,
  person: `Steve Jobs`
},
{
  quote: `"Winning isn't everything, but wanting to win is."`,
  person: `Vince Lombardi`
},
{
  quote: `"I am not a product of my circumstances. I am a product of my decisions."`,
  person: `Stephen Covey`
},
{
  quote: `"Every child is an artist. The problem is how to remain an artist once he grows up."`,
  person: `Pablo Picasso`
},
{
  quote: `"You can never cross the ocean until you have the courage to lose sight of the shore."`,
  person: `Christopher Columbus`
},
{
  quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
  person: `Maya Angelou`
},
{
  quote: `"Either you run the day, or the day runs you."`,
  person: `Jim Rohn`
},
{
  quote: `"Whether you think you can or you think you can't, you're right."`,
  person: `Henry Ford`
},
{
  quote: `"The two most important days in your life are the day you are born and the day you find out why."`,
  person: `Mark Twain`
},
{
  quote: `"Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it."`,
  person: `Johann Wolfgang von Goethe`
},
{
  quote: `"The best revenge is massive success."`,
  person: `Frank Sinatra`
}]

  btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * quotes.length) ;
    quote.innerText = quotes[random].quote ;
    person.innerText = quotes[random].person ;
  }) ;