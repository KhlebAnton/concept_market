document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.nav-list__item');

    dropdownItems.forEach(item => {
        if (item.querySelector('.dropdown-menu')) {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            const closeDropdownMenu = dropdownMenu.querySelector('.dropdown-menu__close');

            closeDropdownMenu.addEventListener('click', () => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                setTimeout(() => {
                    dropdownMenu.style.display = 'none';
                }, 300);

                setTimeout(() => {
                    dropdownMenu.style.opacity = '';
                    dropdownMenu.style.visibility = '';
                    dropdownMenu.style.display = '';
                }, 400);
            });
        }
    });

    const btnMenu = document.querySelector('.header__btn_menu');
    const menuModalMobile = document.querySelector('.modal_menu');

    btnMenu.addEventListener('click', () => {
        toggleMenu()
    });

    function toggleMenu() {
        menuModalMobile.classList.toggle('visible');
        document.body.classList.toggle('no-scroll');
        document.documentElement.classList.toggle('no-scroll');
        btnMenu.classList.toggle('close')
    }

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuModalMobile.querySelector('.modal_menu__content').contains(event.target);
        const isClickOnButton = btnMenu.contains(event.target);


        if (menuModalMobile.classList.contains('visible') && !isClickInsideMenu && !isClickOnButton) {
            toggleMenu();
        }
    });
    // Получаем все элементы с выпадающим списком
    const dropdownItemsMenu = document.querySelectorAll('.modal_menu__item_dropdown');

    // Добавляем обработчик клика для каждого элемента
    dropdownItemsMenu.forEach((item) => {
        const link = item.querySelector('.modal_menu__link');

        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            // Закрываем все открытые выпадающие списки
            dropdownItemsMenu.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Открываем/закрываем текущий выпадающий список
            item.classList.toggle('active');
        });


    });

    // Закрываем выпадающий список при клике вне его области
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.modal_menu__item')) {
            dropdownItemsMenu.forEach((item) => {
                item.classList.remove('active');
            });
        }
    });

    const btnsSearch = document.querySelectorAll('.header__btn_search');
    const dropdownSearch = document.querySelector('.dropdown-menu_search');
    const backdropdownMenu = dropdownSearch.querySelector('.menu_search__back');

    const inputSearch = document.querySelector('.menu_search__input');
    const closeBtnSearch = dropdownSearch.querySelector('.close_btn');

    
    closeBtnSearch.addEventListener('click',hideSearchMenu);
    backdropdownMenu.addEventListener('click',hideSearchMenu);

    function showSearchMenu() {
       
        dropdownSearch.style.opacity = '1';
        dropdownSearch.style.visibility = 'visible';

    }
    function hideSearchMenu() {
       
            dropdownSearch.style.opacity = '0';
            dropdownSearch.style.visibility = 'hidden';
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
    }
   
   
    btnsSearch.forEach(btn => {
        if (btn.classList.contains('mobile-hidden')) {
            btn.addEventListener('click', () => {
               
                showSearchMenu()
            });

        } else {
            btn.addEventListener('click', () => {
                document.body.classList.add('no-scroll');
                document.documentElement.classList.add('no-scroll');
                showSearchMenu()
            });

        }
       

    });

   


});