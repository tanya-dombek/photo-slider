let currentIndex = 0;

const img = document.querySelector('.img');
const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');
const cost = document.querySelector('.cost');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const rectangles = document.querySelectorAll('.rec');
const tabs = document.querySelectorAll('.tab');

const setData = (index) => {
    city.innerText = data[index].city;
    area.innerText = data[index].area;
    time.innerText = data[index].time;
    cost.innerText = data[index].cost;
    img.src = data[index].img;
}

const setSlider = (direction) => {
    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? data.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex === data.length - 1) ? 0 : currentIndex + 1;
    }
    updateRectanglesAndTabs()
    setData(currentIndex);
}

const updateRectanglesAndTabs = () => {
    rectangles.forEach((rectangle, index) => {
        rectangle.src = (index === currentIndex) ? './img/Rectangle-white.svg' : './img/Rectangle-grey.svg';
    });
    tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === currentIndex);
    });
}

prev.addEventListener('click', () => {
    setSlider('prev');
  })
next.addEventListener('click', () => {
    setSlider('next');
})

rectangles.forEach((rectangle, index) => {
    rectangle.addEventListener('click', () => {
        currentIndex = index;
        updateRectanglesAndTabs();
        setData(index);
    })
});

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        currentIndex = index;
        updateRectanglesAndTabs();
        setData(index);
    })
});

const data = [
    {
        id: 1,
        img: './img/image1.png',
        city: 'Rostov-on-Don\nLCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
    },
    {
        id: 2,
        img: './img/image2.png',
        city: 'Sochi\nThieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
    },
    {
        id: 2,
        img: './img/image3.png',
        city: 'Rostov-on-Don\nPatriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
    }
];