const speakers = [{
  speaker: 'Vitalik Buterin',
  job: 'Co-founder of Ethereum',
  info: 'Buterin became involved with cryptocurrency early in its inception, co-founding Bitcoin Magazine in 2011. In 2014, Buterin launched Ethereum with other developers.',
  img: 'img/speaker/vitalik.png',
  alt: 'Vitalik Buterin',
  order: '1',
},
{
  speaker: 'Changpeng Zhao',
  job: 'Founder and CEO of Binance',
  info: `Changpeng Zhao, is a Chinese-Canadian business executive. Zhao is the founder and CEO of Binance, the world's largest cryptocurrency exchange by trading volume.`,
  img: 'img/speaker/cz.png',
  alt: 'Changpeng Zhao',
  order: '2',
},
{
  speaker: 'Anatoly Yakovenko',
  job: 'Co-founder @ Solana',
  info: 'Anatoly is the creator of Solana. He led development of operating systems at Qualcomm, distributed systems at Mesosphere, and compression at Dropbox.',
  img: 'img/speaker/anatoly.png',
  alt: 'Anatoly Yakovenko',
  order: '3',
},
{
  speaker: 'Barry Silbert',
  job: 'Founder & CEO, Digital Currency Group',
  info: 'Barry Silbert is the Founder and CEO of Digital Currency Group. DCG is a global enterprise that builds, supports, and invests in companies all over the world.',
  img: 'img/speaker/barry.png',
  alt: 'Barry Silbert',
  order: '4',
},
{
  speaker: 'Micheal Saylor',
  job: 'Co-founded and lead of MicroStrategy',
  info: 'American entrepreneur and business executive, who co-founded and leads MicroStrategy, a company which provides business intelligence, mobile software, and cloud-based services. ',
  img: 'img/speaker/michael.png',
  alt: 'Micheal Saylor',
  order: '5',
},
{
  speaker: 'Aleksander Larsen',
  job: 'Co-Founder and COO @ Sky Mavi',
  info: 'Aleksander has worked in the NFT industry since late 2017, focusing on blockchain games and player-owned economies.',
  img: 'img/speaker/aleksander.png',
  alt: 'Aleksander Larsen',
  order: '6',
}];

const speakersSection = document.getElementById('sp-items-container');

speakers.forEach(element => {
  let div = document.createElement('div');
  div.classList.add('sp-box', 'd-flex', `order-${element.order}`);
  div.innerHTML = `<div class="sp-box-photo"><img src="${element.img}" alt="${element.alt}"></div>
  <div class="sp-box-info d-flex">
    <p class="sp-box-info-title">${element.speaker}</p>
    <p class="sp-box-info-job">${element.job}</p>
    <hr class="divisor">
    <p class="sp-box-info-extra">${element.info}</p>
  </div>`

  speakersSection.appendChild(div);

});

const moreBtn = document.getElementById('sp-button');
const boxes = document.querySelectorAll('.sp-box');

moreBtn.addEventListener('click', (event) => {
  boxes.forEach(element => {
    element.classList.toggle('sp-on');
  });
})
