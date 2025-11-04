  // Отримання всіх необхідних елементів
        const firstBlock = document.getElementById('firstBlock');
        const successBlock = document.getElementById('successBlock');
        const errorBlock = document.getElementById('errorBlock');

        const emailFirst = document.getElementById('emailFirst');
        const emailError = document.getElementById('emailError');
        const userEmail = document.getElementById('userEmail');

        const subscribeFirst = document.getElementById('subscribeFirst');
        const subscribeError = document.getElementById('subscribeError');
        const thanksBtn = document.getElementById('thanksBtn');

        // Регулярний вираз для валідації email
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        // Функція для приховування всіх блоків
        function hideAll() {
            firstBlock.classList.add('hidden');
            successBlock.classList.add('hidden');
            errorBlock.classList.add('hidden');
        }

        // Функція для показу конкретного блоку
        function showBlock(block) {
            hideAll();
            block.classList.remove('hidden');
        }

        // Функція валідації email
        function validateEmail(email) {
            return emailRegex.test(email);
        }

        // Обробник для кнопки Subscribe в першому блоці
        subscribeFirst.addEventListener('click', function() {
            const email = emailFirst.value.trim();
            
            if (!email || !validateEmail(email)) {
                // Показуємо блок з помилкою
                emailError.value = email;
                showBlock(errorBlock);
            } else {
                // Показуємо success блок
                userEmail.textContent = email;
                showBlock(successBlock);
            }
        });

        // Обробник для кнопки Subscribe в блоці помилки
        subscribeError.addEventListener('click', function() {
            const email = emailError.value.trim();
            
            if (!email || !validateEmail(email)) {
                // Залишаємось на блоці помилки
                return;
            } else {
                // Показуємо success блок
                userEmail.textContent = email;
                showBlock(successBlock);
            }
        });

        // Обробник для кнопки Thanks
        thanksBtn.addEventListener('click', function() {
            // Повертаємось до першого блоку
            emailFirst.value = '';
            showBlock(firstBlock);
        });

        // Обробка Enter для першого input
        emailFirst.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeFirst.click();
            }
        });

        // Обробка Enter для input в блоці помилки
        emailError.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeError.click();
            }
        });