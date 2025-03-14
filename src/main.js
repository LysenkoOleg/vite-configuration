import { title } from './assets/06.module.sass';
import contentStoreData from './assets/contentStore.json'

(function() {
	const titleElement = document.querySelector('.title');
	titleElement.className = title;
	titleElement.textContent = contentStoreData.title

	const descriptionElement = document.querySelector('.description')
	descriptionElement.textContent = contentStoreData.description
})();
