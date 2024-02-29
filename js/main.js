document.addEventListener('DOMContentLoaded', function(){
    
    const headerMenu = document.querySelector('.header-top-menu');
    const toggleMenu = document.querySelector('.nav-icon');
    const bodyEl = document.body;


    toggleMenu.addEventListener('click', function(){
        if(this.classList.contains('nav-icon--active')){
            this.classList.remove('nav-icon--active');
            headerMenu.classList.remove('header-top-menu--active');
            bodyEl.classList.remove('lock');
            
        }
        else{
            this.classList.add('nav-icon--active');
            headerMenu.classList.add('header-top-menu--active');
            bodyEl.classList.add('lock');
        }
    });

    headerMenu.addEventListener('click', function () {
        this.classList.remove('header-top-menu--active');
        this.classList.remove('nav-icon--active');
        document.body.classList.remove('lock');
        
    });
});

/* Or alternative variant see below */

// document.querySelector('.nav-icon').addEventListener('click', function () {
//     this.classList.toggle('nav-icon--active');
//     document.querySelector('.header-top-menu').classList.toggle('header-top-menu--active');
//     document.body.classList.add('lock');
// });

// document.querySelector('.header-top-menu').addEventListener('click', function () {
//     this.classList.remove('nav-icon--active');
//     this.classList.remove('header-top-menu--active');
//     document.body.classList.remove('lock');
// });

$(document).ready(function() {
    
    let containerEl = document.querySelector('#mix-cards');
    let mixer = mixitup(containerEl);

})

/* script for placeholder - focus or not focus */

const formItems = document.querySelectorAll('.form-item__form-field');

for(let item of formItems){
    const thisParent = item.closest('.form-item');
    const thisPlaceholder = thisParent.querySelector('.form-item__placeholder');
    /* if input in focus */
    console.log(123);
    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('active');
    });

    /* if input Not in focus */ 
    item.addEventListener('blur', function(){

        if(item.value.length > 0){
            thisPlaceholder.classList.add('active');
        }
        else{
            thisPlaceholder.classList.remove('active');
        }
    })

}


// /* script for contactForm */

$(document).ready(function () {


    //FORM VALIDATE
	$('.contact-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			
			message: {
				required: 'Поле не должно быть пустым'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	});

// // 	//*************************************************** */
// // 	// Функция AJAX запроса на сервер

	function ajaxFormSubmit() {

		let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепочку срабатывания остальных функций
		return false;
	}
});

// /* // - script for contactForm */

