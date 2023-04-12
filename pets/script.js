const cards = [
    {
      name: 'Jennifer',
      img: '../../assets/images/pets-jennifer.jpg',
      type: 'Dog',
      breed: 'Labrador',
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: '2 months',
      inoculations: ['none'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Sophia',
      img: '../../assets/images/pets-sophia.jpg',
      type: 'Dog',
      breed: 'Shih tzu',
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: '1 month',
      inoculations: ['parvovirus'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Woody',
      img: '../../assets/images/pets-woody.jpg',
      type: 'Dog',
      breed: 'Golden Retriever',
      description:
        'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
      age: '3 years 6 months',
      inoculations: ['adenovirus', 'distemper'],
      diseases: ['right back leg mobility reduced'],
      parasites: ['none'],
    },
    {
      name: 'Scarlett',
      img: '../../assets/images/pets-scarlet.jpg',
      type: 'Dog',
      breed: 'Jack Russell Terrier',
      description:
        'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
      age: '3 months',
      inoculations: ['parainfluenza'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Katrine',
      img: '../../assets/images/pets-katrine.jpg',
      type: 'Cat',
      breed: 'British Shorthair',
      description:
        'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
      age: '6 months',
      inoculations: ['panleukopenia'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Timmy',
      img: '../../assets/images/pets-timmy.jpg',
      type: 'Cat',
      breed: 'British Shorthair',
      description:
        'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
      age: '2 years 3 months',
      inoculations: ['calicivirus', 'viral rhinotracheitis'],
      diseases: ['kidney stones'],
      parasites: ['none'],
    },
    {
      name: 'Freddie',
      img: '../../assets/images/pets-freddie.jpg',
      type: 'Cat',
      breed: 'British Shorthair',
      description:
        'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
      age: '2 months',
      inoculations: ['rabies'],
      diseases: ['none'],
      parasites: ['none'],
    },
    {
      name: 'Charly',
      img: '../../assets/images/pets-charly.jpg',
      type: 'Dog',
      breed: 'Jack Russell Terrier',
      description:
        'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
      age: '8 years',
      inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
      diseases: ['deafness', 'blindness'],
      parasites: ['lice', 'fleas'],
    },
  ];
  
  const generateRandomPets = () => {
    const generateRandom = () => {
      return Math.round(Math.random() * 7);
    };
    const randomNums = [];
    const randomPets = [];
  
    while (randomNums.length < 8) {
      let randomNum = generateRandom();
      if (randomNums.includes(randomNum)) {
        continue;
      }
  
      randomNums.push(randomNum);
      randomPets.push(cards[randomNum]);
    }
    return randomPets;
  };
  
  const generatePetsArray = () => {
    const petsArray = [];
    for (let i = 0; i < 8; i++) {
      petsArray.push(generateRandomPets());
    }
    return petsArray;
  };
  
  const randomPets = generatePetsArray();
  
  const hamburger = document.querySelector('.burger');
  const headerContainer = document.querySelector('.header');
  const firstLogo = document.querySelector('.logo:first-child');
  const balckOut = document.querySelector('.blackout');
  const allboby = document.querySelector('body');
  const allCards = document.querySelector('.allcards');
  const modalWindow = document.querySelector('.modal-window');
  const modalContainer = document.querySelector('.modal-container');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  let index = 0;
  const btnPaginationRight = document.querySelector('.right');
  const btnPaginationLeft = document.querySelector('.left');
  const btnPaginationEnd = document.querySelector('.end');
  const btnPaginationStart = document.querySelector('.start');
  const pageNum = document.querySelector('.number');
  const navContacts = document.querySelector('.nav-contacts');
  
  function closeMenu() {
    headerContainer.classList.remove('activenavmenu');
    firstLogo.classList.remove('hiddenlogo');
    allboby.classList.remove('activeblockScroll');
    balckOut.classList.remove('activeBlackOut');
  }
  
  navContacts.addEventListener('click', closeMenu);
  
  function toggleMenu() {
    headerContainer.classList.toggle('activenavmenu');
    firstLogo.classList.toggle('hiddenlogo');
    balckOut.classList.toggle('activeBlackOut');
    allboby.classList.toggle('activeblockScroll');
  }
  
  hamburger.addEventListener('click', toggleMenu);
  
  btnPaginationRight.addEventListener('click', stepRight);
  
  function stepRight() {
    if (index === 7) {
      return;
    }
    index = index + 1;
    allCards.innerHTML = '';
    addCardsToDOM(index);
    pageNum.innerHTML = '';
    let pageNumber = index + 1;
    pageNum.innerHTML = pageNumber;
  
    if (pageNumber === 8) {
      btnPaginationRight.classList.remove('active');
      btnPaginationRight.classList.add('inactive');
      btnPaginationEnd.classList.remove('active');
      btnPaginationEnd.classList.add('inactive');
    }
  
    if (pageNumber > 1) {
      btnPaginationLeft.classList.remove('inactive');
      btnPaginationLeft.classList.add('active');
      btnPaginationStart.classList.remove('inactive');
      btnPaginationStart.classList.add('active');
    }
  }
  
  function stepLeft() {
    if (index === 0) {
      return;
    }
    index = index - 1;
    allCards.innerHTML = '';
    addCardsToDOM(index);
    pageNum.innerHTML = '';
    let pageNumber = index + 1;
    pageNum.innerHTML = pageNumber;
  
    if (pageNumber === 1) {
      btnPaginationLeft.classList.remove('active');
      btnPaginationLeft.classList.add('inactive');
      btnPaginationStart.classList.remove('active');
      btnPaginationStart.classList.add('inactive');
    }
    if (pageNumber < 8) {
      btnPaginationRight.classList.remove('inactive');
      btnPaginationRight.classList.add('active');
      btnPaginationEnd.classList.remove('inactive');
      btnPaginationEnd.classList.add('active');
    }
  }
  
  btnPaginationLeft.addEventListener('click', stepLeft);
  
  function openEndPage() {
    index = 7;
    allCards.innerHTML = '';
    addCardsToDOM(index[8]);
    pageNum.innerHTML = '';
    let pageNumber = 8;
    pageNum.innerHTML = pageNumber;
  
    if (pageNumber === 8) {
      btnPaginationEnd.classList.remove('active');
      btnPaginationEnd.classList.add('inactive');
      btnPaginationRight.classList.remove('active');
      btnPaginationRight.classList.add('inactive');
      btnPaginationLeft.classList.add('active');
      btnPaginationLeft.classList.remove('inactive');
      btnPaginationStart.classList.add('active');
      btnPaginationStart.classList.remove('inactive');
    }
  }
  
  
  btnPaginationEnd.addEventListener('click', openEndPage);
  
  function openStartPage() {
    index = 0;
    allCards.innerHTML = '';
    addCardsToDOM(index[0]);
    pageNum.innerHTML = '';
    let pageNumber = 1;
    pageNum.innerHTML = pageNumber;
  
    if (pageNumber === 1) {
      btnPaginationStart.classList.remove('active');
      btnPaginationStart.classList.add('inactive');
      btnPaginationLeft.classList.remove('active');
      btnPaginationLeft.classList.add('inactive');
      btnPaginationEnd.classList.remove('inactive');
      btnPaginationEnd.classList.add('active');
      btnPaginationRight.classList.remove('inactive');
      btnPaginationRight.classList.add('active');
    }
  }
  
  btnPaginationStart.addEventListener('click', openStartPage);
  
  function openPopUp() {
    modalWindow.classList.add('open');
  }
  const createPopup = (event) => {
    const pet =
      randomPets[index][
        event.target.closest('.cards').getAttribute('data-index')
      ];
    const petDetail = document.createElement('div');
    petDetail.className = 'details';
    petDetail.innerHTML = `
        <img
        class="pet-img"
        src="${pet.img}"
        alt="pet-img"
        />
        <div class="alldetail-content">
          <div class="detail-content">
           <p class="petname">${pet.name}</p>
           <p class="type-breed">${pet.type + ' - ' + pet.breed}</p>
            <p class="description">${pet.description}</p>
            <ul class="detail-info">
              <li class="age"><b>Age:</b> ${pet.age}</li>
              <li class="inoculations"><b>Inoculations:</b> ${
                pet.inoculations
              }</li>
              <li class="diseases"><b>Diseases:</b> ${pet.diseases}</li>
              <li class="parasites"><b>Parasites:</b> ${pet.parasites}</li>
            </ul>
          </div>
        </div>
        `;
  
    modalContainer.append(petDetail);
  
    openPopUp();
  };
  
  let randoms = [];
  const addCardsToDOM = (index = 0) => {
    console.log('index', index);
    randomPets[index].forEach((pet, i) => {
      const card = document.createElement('div');
      card.className = 'cards';
      card.innerHTML = `
      <div class="card" id="card${index}">
        <img
          class="pets-img"
          src="${pet.img}"
          alt="pets"
        />
        <p class="pet-name">${pet.name}</p>
      </div>`;
  
      const learnMoreBtn = document.createElement('button');
      learnMoreBtn.innerHTML = 'Learn more';
      learnMoreBtn.className = 'button-sec';
      card.setAttribute('data-index', i);
      card.append(learnMoreBtn);
      allCards.append(card);
  
      // learnMoreBtn.addEventListener('click', createPopup);
      // learnMoreBtn.addEventListener('click', blockScroll);
      card.addEventListener('click', createPopup);
      card.addEventListener('click', blockScroll);
    });
  };
  addCardsToDOM();
  
  modalCloseBtn.addEventListener('click', modalWindowClose);
  
  function blockScroll() {
    allboby.classList.add('activeblockScroll');
  }
  
  function modalWindowClose() {
    modalWindow.classList.remove('open');
    modalContainer.lastElementChild.remove();
    allboby.classList.remove('activeblockScroll');
  }
  
  const moveLeft = () => {
    allCards.innerHTML = '';
    addCardsToDOM();
  };
  
  const moveRight = () => {
    allCards.innerHTML = '';
    addCardsToDOM();
  };
  
  // btnLeft.addEventListener('click', moveLeft);
  // btnRight.addEventListener('click', moveRight);
  