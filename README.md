## Web приложение - одностаничный сайт

### Стек
- Python, Django, CSS, HTML, JavaScript

### Примененные дополнения
- Slick Slider
- django-admin-sortable2
- django-filer

### Запуск
- Создайте виртуальную среду `python3.9 -m venv venv`
- Активируйте сред `source venv/bin/activate`
- Установите зависимости `pip install --no-cache-dir -r requirements.txt`
- Создайте файл `.env` с данными для проекта в корне проекта
```text
DB_NAME=...
DB_PASS=...
DB_USER=...
DB_HOST=...
DB_PORT=...
SECRET_KEY="..."
```
- Выполните комманды по миграции моделей в БД
```shell
python manage.py makemigrations
python manage.py migrate
```
- Создайте пользователя с правами superuser `python manage.py createsuperuser`

### Endpoints
- Перейдите на страницу `http://127.0.0.1:8000/` - вы попадете на главную страницу
- Перейдите на ссылку указанную внизу страницы - `Админ панель`, либо введите в строке браузера `http://127.0.0.1:8000/admin/`

### Недоработанные функции
- При нажатии на изображение оно не открывается на полный экран
- Не доработана мобильная версия
- Не успел починить django-filer


