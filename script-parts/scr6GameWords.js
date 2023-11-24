//gameWords
let field   = document.querySelector('#field');
    let message = document.querySelector('#message');
    let variantsAnswersBlock = document.querySelector('#variantsAnswers');
    let variantsAnswers = document.querySelector('#variantsAnswers span');
    let variantsAnswersButton = document.querySelector('#showAnswers');
    let usedCities = document.querySelector('#usedCities');
    message.innerHTML = 'Введіть назву українського міста в поле вище та натисніть Enter<br>';
    let cities = [];
    let suitableCities = [];
    let variantsAnswersCities = [];
    let allCities = ["Авдіївка","Алмазна","Алупка","Алушта","Алчевськ","Амвросіївка","Ананьїв","Андрушівка","Антрацит","Апостолове","Армянськ","Арциз","Балаклія","Балта","Бар","Баранівка","Барвінкове","Батурин","Бахмач","Бахмут","Бахчисарай","Баштанка","Белз","Бердичів","Бердянськ","Берегове","Бережани","Березань","Березівка","Березне","Берестечко","Берислав","Бершадь","Бібрка","Біла Церква","Білгород-Дністровський","Білицьке","Білогірськ","Білозерське","Білопілля","Біляївка","Благовіщенське","Бобринець","Бобровиця","Богодухів","Богуслав","Боково-Хрустальне","Болград","Болехів","Борзна","Борислав","Бориспіль","Борщів","Боярка","Бровари","Броди","Брянка","Бунге","Буринь","Бурштин","Буськ","Буча","Бучач","Валки","Вараш","Василівка","Васильків","Ватутіне","Вашківці","Великі Мости","Верхівцеве","Верхньодніпровськ","Вижниця","Вилкове","Винники","Виноградів","Вишгород","Вишневе","Вільногірськ","Вільнянськ","Вінниця","Вовчанськ","Вознесенівка","Вознесенськ","Волноваха","Володимир","Волочиськ","Ворожба","Вуглегірськ","Вугледар","Гадяч","Гайворон","Гайсин","Галич","Генічеськ","Герца","Гірник","Гірське","Глиняни","Глобине","Глухів","Гнівань","Гола Пристань","Голубівка","Горішні Плавні","Горлівка","Городенка","Городище","Городня","Городок","Городок","Горохів","Гребінка","Гуляйполе","Дебальцеве","Деражня","Дергачі","Джанкой","Дніпро","Дніпрорудне","Добромиль","Добропілля","Довжанськ","Докучаєвськ","Долина","Долинська","Донецьк","Дрогобич","Дружба","Дружківка","Дубляни","Дубно","Дубровиця","Дунаївці","Енергодар","Євпаторія","Єнакієве","Жашків","Жданівка","Жидачів","Житомир","Жмеринка","Жовква","Жовті Води","Заводське","Залізне","Заліщики","Запоріжжя","Заставна","Збараж","Зборів","Звенигородка","Звягель","Здолбунів","Зеленодольськ","Зимогір'я","Зіньків","Зміїв","Знам'янка","Золоте","Золотоноша","Золочів","Зоринськ","Зугрес","Івано-Франківськ","Ізмаїл","Ізюм","Ізяслав","Іллінці","Іловайськ","Інкерман","Ірміно","Ірпінь","Іршава","Ічня","Кагарлик","Кадіївка","Калинівка","Калуш","Кальміуське","Камінь-Каширський","Кам'янець-Подільський","Кам'янка","Кам'янка-Бузька","Кам'янка-Дніпровська","Кам'янське","Канів","Карлівка","Каховка","Керч","Київ","Кипуче","Ківерці","Кілія","Кіцмань","Кобеляки","Ковель","Кодима","Козятин","Коломия","Комарно","Конотоп","Копичинці","Корець","Коростень","Коростишів","Корсунь-Шевченківський","Корюківка","Косів","Костопіль","Костянтинівка","Краматорськ","Красилів","Красногорівка","Красноград","Красноперекопськ","Кременець","Кременчук","Кремінна","Кривий Ріг","Кролевець","Кропивницький","Куп'янськ","Курахове","Ладижин","Ланівці","Лебедин","Лиман","Липовець","Лисичанськ","Лозова","Лохвиця","Лубни","Луганськ","Лутугине","Луцьк","Львів","Любомль","Люботин","Макіївка","Мала Виска","Малин","Марганець","Маріуполь","Мар'їнка","Мелітополь","Мена","Мерефа","Миколаїв","Миколаїв","Миколаївка","Миргород","Мирноград","Миронівка","Міусинськ","Могилів-Подільський","Молодогвардійськ","Молочанськ","Монастириська","Монастирище","Моршин","Моспине","Мостиська","Мукачево","Надвірна","Немирів","Нетішин","Ніжин","Нікополь","Нова Каховка","Нова Одеса","Новгород-Сіверський","Новий Буг","Новий Калинів","Новий Розділ","Новоазовськ","Нововолинськ","Новогродівка","Новодністровськ","Новодружеськ","Новомиргород","Новомосковськ","Новоселиця","Новоукраїнка","Новояворівськ","Носівка","Обухів","Овруч","Одеса","Олевськ","Олександрівськ","Олександрія","Олешки","Оріхів","Остер","Острог","Охтирка","Очаків","Павлоград","Первомайськ","Первомайськ","Первомайський","Перевальськ","Перемишляни","Перечин","Перещепине","Переяслав","Першотравенськ","Петрово-Красносілля","Пирятин","Південне","Підгайці","Підгородне","Погребище","Подільськ","Покров","Покровськ","Пологи","Полонне","Полтава","Помічна","Попасна","Почаїв","Привілля","Прилуки","Приморськ","Прип'ять","Пустомити","Путивль","П'ятихатки","Рава-Руська","Радехів","Радивилів","Радомишль","Рахів","Рені","Решетилівка","Ржищів","Рівне","Ровеньки","Рогатин","Родинське","Рожище","Роздільна","Ромни","Рубіжне","Рудки","Саки","Самбір","Сарни","Свалява","Сватове","Світловодськ","Світлодарськ","Святогірськ","Севастополь","Селидове","Семенівка","Середина-Буда","Сєвєродонецьк","Синельникове","Сіверськ","Сімферополь","Скадовськ","Скалат","Сквира","Сколе","Славута","Славутич","Слов'янськ","Сміла","Снігурівка","Сніжне","Сновськ","Снятин","Сокаль","Сокиряни","Соледар","Сорокине","Соснівка","Старий Крим","Старий Самбір","Старобільськ","Старокостянтинів","Стебник","Сторожинець","Стрий","Судак","Судова Вишня","Суми","Суходільськ","Таврійськ","Тальне","Тараща","Татарбунари","Теплодар","Теребовля","Тернівка","Тернопіль","Тетіїв","Тисмениця","Тлумач","Токмак","Торецьк","Тростянець","Трускавець","Тульчин","Турка","Тячів","Угнів","Ужгород","Узин","Українка","Українськ","Умань","Устилуг","Фастів","Феодосія","Харків","Харцизьк","Херсон","Хирів","Хмельницький","Хмільник","Ходорів","Хорол","Хоростків","Хотин","Хрестівка","Христинівка","Хрустальний","Хуст","Часів Яр","Червоноград","Черкаси","Чернівці","Чернігів","Чигирин","Чистякове","Чоп","Чорнобиль","Чорноморськ","Чортків","Чугуїв","Чуднів","Шаргород","Шахтарськ","Шепетівка","Шостка","Шпола","Шумськ","Щастя","Щолкіне","Южне","Южноукраїнськ","Яворів","Яготин","Ялта","Ямпіль","Яремче","Ясинувата"];
    let allCitiesToUpperCase = [];
    for(let city of allCities) {
      allCitiesToUpperCase.push(city.toUpperCase()); 
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
  
    let flag = false;
    let timer1Words;
    let timer2Words;

    field.addEventListener('keypress', function(event) {
      if(event.key == 'Enter') {
      
      usedCities.textContent = 'Названі міста: ';
      usedCities.style.display = 'none';
      variantsAnswersButton.style.display = 'none';
      variantsAnswersBlock.style.display = 'none';
      clearTimeout(timer1Words);
      timer2Words = setTimeout(function() {
        variantsAnswersButton.style.display = 'block';
        }, 7000)
      let inputValue = field.value.toUpperCase();
      
      if(allCitiesToUpperCase.indexOf(inputValue) == -1) {
        flag = false;
        message.innerHTML += '<b>Не знайдено українське місто з такою назвою.</b><br>';
      } else {
        cities.push(inputValue);
        flag = true;
      }

      if(cities.length == 0) {
        variantsAnswers.textContent = 'КИЇВ'; 
        }

      if(cities.indexOf(inputValue) != -1 && cities.indexOf(inputValue) != cities.length - 1) {
            message.innerHTML += `<b>Місто ${inputValue} вже називалось раніше.</b><br>`;
            cities.pop();
            usedCities.style.display = 'block';
            for(let i = 0; i < cities.length; i++) {
              usedCities.textContent += (' ' + cities[i] + ' ');
            }
            flag = false;
      }

      if(cities.indexOf(inputValue) == cities.length - 1 && cities.length > 1) {
        let firstLetterGamer = inputValue[0];
        let previousWordGamer = cities[cities.indexOf(inputValue) - 1];
        let lastLetterGamer = previousWordGamer[previousWordGamer.length - 1];
          if(lastLetterGamer == 'Ь' || lastLetterGamer == 'И' || lastLetterGamer == 'Й') {
            lastLetterGamer = previousWordGamer[previousWordGamer.length - 2];
          }

        if(firstLetterGamer != lastLetterGamer) {
            message.innerHTML += `<b>Перша літера міста ${inputValue} не співпадає з останньою літерою міста ${previousWordGamer}.</b><br>`;
            cities.pop();
            flag = false;
          }
      }
  
        
        let previousWord = cities[cities.length - 1];
        let lastLetter = previousWord[previousWord.length - 1];
        if(lastLetter == 'Ь' || lastLetter == 'И' || lastLetter == 'Й') {
            message.innerHTML = `Українських міст, що починаються на ${previousWord[previousWord.length - 1]} не існує, тому перша літера міста має бути - ${previousWord[previousWord.length - 2]}`;
            lastLetter = previousWord[previousWord.length - 2];
          }


        if(flag == true) {

        for(let city of allCitiesToUpperCase) {
          let firstLetter = city[0];
          if(cities.indexOf(city) == -1 && lastLetter == firstLetter) {
            suitableCities.push(city);
          }
        }
        shuffle(suitableCities);
        field.value = suitableCities[0];
        if(field.value == 'undefined') {
            message.innerHTML = `Варіанти міст на літеру '${lastLetter}' закінчились. Можна почати гру спочатку.`;
            field.value = '';
            cities = [];
          }
        message.innerHTML = `Введіть назву українського міста на літеру '<b>${suitableCities[0][suitableCities[0].length - 1]}</b>' та натисніть Enter.<br>`;
        cities.push(suitableCities[0]);
        suitableCities.length = 0;
        variantsAnswersCities = [];
        variantsAnswers.textContent = '';
        inputValue = field.value;
        
        clearTimeout(timer2Words);
        timer1Words = setTimeout(function() {
        variantsAnswersButton.style.display = 'block';
        }, 10000)


        for(let city of allCitiesToUpperCase) {
          let firstLetter = city[0];
          let lastLetter = inputValue[inputValue.length - 1];
          if(lastLetter == 'Ь' || lastLetter == 'И' || lastLetter == 'Й') {
            lastLetter = inputValue[inputValue.length - 2];
            message.innerHTML = `Українських міст, що починаються на ${inputValue[inputValue.length - 1]} не існує, тому перша літера міста має бути - ${inputValue[inputValue.length - 2]}`;
          }
          if(cities.indexOf(city) == -1 && lastLetter == firstLetter) {
            variantsAnswersCities.push(city);
            variantsAnswers.textContent += (city + ', ');  
          }
          
        }

        if(variantsAnswersCities.length == 0) {
                message.innerHTML = `Варіанти міст на останню літеру міста закінчились. Можна почати гру спочатку.`;
                cities = [];
            } 

        field.addEventListener('click', () => field.value = '');

      }

      }

    });
    variantsAnswersButton.addEventListener('click', function() {
      variantsAnswersBlock.style.display = 'block';
    })