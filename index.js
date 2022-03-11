const searchForm = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const galleryContainer = document.querySelector('.images-wrapper');
const loadBtn = document.querySelector('.load');
const camera = document.querySelector('.camera');

let count = 9;

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}

async function showData(data) {
    galleryContainer.innerHTML = '';
    data.results.map(item => {
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = item.urls.regular;
        img.alt = `image`;
        galleryContainer.append(img);
    });
}
const getImages = (count) => {
    let url = `https://api.unsplash.com/search/photos?query=spring&per_page=${count}&orientation=landscape&client_id=s_ZDppBQ7Wf0M0IZPSSkJgezFgxktOngeIT4ZG2JTvw`;
    getData(url);
};
getImages(count);
const getSearchValue = (count) => {
    if (searchForm.value !== '') {
        let newUrl = `https://api.unsplash.com/search/photos?query=${searchForm.value}&per_page=${count}&orientation=landscape&client_id=s_ZDppBQ7Wf0M0IZPSSkJgezFgxktOngeIT4ZG2JTvw`;
        getData(newUrl);
        loadBtn.style.display = 'block';
    } else {
        getImages(count);
        loadBtn.style.display = 'block';
    }
    
};
const getValueFromKeyboard = (e) => {
    if (searchForm.value !== '') {
        if (e.keyCode === 13) {
            let newUrl = `https://api.unsplash.com/search/photos?query=${searchForm.value}&per_page=${count - 1}&orientation=landscape&client_id=s_ZDppBQ7Wf0M0IZPSSkJgezFgxktOngeIT4ZG2JTvw`;
            getData(newUrl);
            loadBtn.style.display = 'block';
        }
    } else {
        getImages(count);
        loadBtn.style.display = 'block';
    }
};
const loadMore = () => {
    const img = document.querySelectorAll('.img');
    getImages(img.length + 9);
    getSearchValue(img.length + 9);
        getValueFromKeyboard(img.length + 9);
    if(img.length >= 27) {
        loadBtn.style.display = 'none';
    }
};

const reloadPage = () => {
    window.location.reload();
};


searchBtn.addEventListener('click', (e) => {
    getSearchValue(count - 1);
});
searchForm.addEventListener('keydown', getValueFromKeyboard);
loadBtn.addEventListener('click', loadMore);
camera.addEventListener('click', reloadPage);


console.log('На странице есть несколько фото и строка поиска +5\nВ футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\nПри загрузке приложения на странице отображаются полученные от API изображения +10\nЕсли в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10\nПри открытии приложения курсор находится в поле ввода +5\nЕсть placeholder +5\nАвтозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5\nПоисковый запрос можно отправить нажатием клавиши Enter +5\nПосле отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5\nВ поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5\nОчень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10(загрузка изображений по клику)');



