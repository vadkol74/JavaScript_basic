var date = new Date();
var time = date.getHours();
if(time < 13) // сравниваем время с число 13
    alert('Доброе утро!'); // если время меньше 13
else
    alert('Добрый вечер!'); // если время равно 13 и больше
