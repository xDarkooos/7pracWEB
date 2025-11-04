
        const firstBlock = document.getElementById('firstBlock');
        const successBlock = document.getElementById('successBlock');
        const errorBlock = document.getElementById('errorBlock');

        const emailFirst = document.getElementById('emailFirst');
        const emailError = document.getElementById('emailError');
        const userEmail = document.getElementById('userEmail');

        const subscribeFirst = document.getElementById('subscribeFirst');
        const subscribeError = document.getElementById('subscribeError');
        const thanksBtn = document.getElementById('thanksBtn');

        
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        
        function hideAll() {
            firstBlock.classList.add('hidden');
            successBlock.classList.add('hidden');
            errorBlock.classList.add('hidden');
        }

        
        function showBlock(block) {
            hideAll();
            block.classList.remove('hidden');
        }

        
        function validateEmail(email) {
            return emailRegex.test(email);
        }

        
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

        
        thanksBtn.addEventListener('click', function() {
            
            emailFirst.value = '';
            showBlock(firstBlock);
        });

        
        emailFirst.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeFirst.click();
            }
        });

        
        emailError.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeError.click();
            }
        });
