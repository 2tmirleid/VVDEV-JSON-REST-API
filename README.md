<h1>VVDEV-JSON-REST-API</h1><br>
<h2>Описание основных директорий и файлов приложения</h2>
<ul>
  <li>app.js - входная точка в приложение</li>
  <li>/routes/main.router.js - главный роутер</li>
  <li>/router/product.router.js - роутер, отвечающий за все запросы к postgreSQL</li>
  <li>/postgreSQL/settings.js - настройка подключения к базе данных postgreSQL</li>
  <li>/postgreSQL/models/model.js - модель таблицы Products</li>
  <li>/photos - директория с загруженными с сервера фотографиями</li>
  <li>/contoller/product.controller.js - контроллер, в котором прописаны основные методы</li>
</ul><br>
<h2>Описание основных методов</h2>
<ul>
  <li>.getAllProducts(req, res) => возвращает все товары из таблицы Products</li>
  <li>.getProductById(req, res) => возвращает один товар из таблицы Products по его id</li>
  <li>.addNewProduct(req, res) => добавляет новый товар в таблицу Products</li>
  <li>.deleteProduct(req, res) => удаляет товар из таблицы Products по его id</li>
  <li>.updateProduct(req, res) => редактирует сведения о товаре в таблице Products</li>
  <li>.uploadPhoto(req, res) => загружает фото товара на сервер</li>
</ul>
