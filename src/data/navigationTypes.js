import HomePage from 'src/pages/HomePage'
import AboutPage from 'src/pages/AboutPage'
import CatalogPage from 'src/pages/CatalogPage'
import SamplesPage from 'src/pages/SamplesPage'
import NewsPage from 'src/pages/NewsPage'
import ContactsPage from 'src/pages/ContactsPage'
import CatalogSubPage from 'src/pages/CatalogSubPage'
import CartPage from 'src/pages/CartPage'

import {
	logoSvg,
	livingRoomSvg,
	hallwaySvg,
	bedroomSvg,
	kitchenSvg,
	youthSvg,
	shoppingCartSvg,
} from './svgBodies'

import livingRoomJpg from 'resources/images/jpg/living_room.jpg'
import bedroomJpg from 'resources/images/jpg/bedroom.jpg'
import hallwayJpg from 'resources/images/jpg/hallway.jpg'
import kitchenJpg from 'resources/images/jpg/kitchen.jpg'
import youthJpg from 'resources/images/jpg/youth_child.jpg'
import bedsJpg from 'resources/images/jpg/beds.jpg'
import chestsJpg from 'resources/images/jpg/chests.jpg'
import computerTableJpg from 'resources/images/jpg/computer_table.jpg'
import cabinetJpg from 'resources/images/jpg/sets_of_cabinet_furniture.jpg'
import tvStandJpg from 'resources/images/jpg/tv_thumb.jpg'
import wardrobeJpg from 'resources/images/jpg/wardrobes.jpg'

//------- common navigation types --------//

//-------------- home page ---------------//
export const home = {
	name: 'home',
	title: '',
	svg: logoSvg,
	path: '/',
	component: HomePage,
}
//----------------------------------------//

//-------------- cart page ---------------//
export const cart = {
	name: 'cart',
	title: 'Корзина',
	svg: shoppingCartSvg,
	path: '/cart',
	component: CartPage,
}
//----------------------------------------//

const about = {
	name: 'about',
	title: 'О Компании',
	path: '/about',
	component: AboutPage,
}

const catalog = {
	name: 'catalog',
	title: 'Каталог',
	path: '/catalog',
	component: CatalogPage,
}

const samples = {
	name: 'samples',
	title: 'Образцы материалов',
	path: '/samples',
	component: SamplesPage,
}

const news = {
	name: 'news',
	title: 'Новости',
	path: '/news',
	component: NewsPage,
}

const contacts = {
	name: 'contacts',
	title: 'Контакты',
	path: '/contacts',
	component: ContactsPage,
}

const parentUrl = '/catalog'

const livingRooms = {
	name: 'living_rooms',
	title: 'Гостиные',
	path: `${parentUrl}/living_rooms`,
	fetchUrl: 'https://online.sv-mebel.ru/!api/getItems.php?limit=10',
	component: CatalogSubPage,
}

const livingRoomWithSvg = { ...livingRooms, svg: livingRoomSvg }
const livingRoomWithJpg = { ...livingRooms, jpg: livingRoomJpg }

const hallways = {
	name: 'hallways',
	title: 'Прихожие',
	path: `${parentUrl}/hallways`,
	component: CatalogSubPage,
}

const hallwayWithSvg = { ...hallways, svg: hallwaySvg }
const hallwayWithJpg = { ...hallways, jpg: hallwayJpg }

const bedrooms = {
	name: 'bedrooms',
	title: 'Спальни',
	path: `${parentUrl}/bedrooms`,
	component: CatalogSubPage,
}

const bedroomWithSvg = { ...bedrooms, svg: bedroomSvg }
const bedroomWithJpg = { ...bedrooms, jpg: bedroomJpg }

const kitchens = {
	name: 'kitchens',
	title: 'Кухни',
	path: `${parentUrl}/kitchens`,
	component: CatalogSubPage,
}

const kitchenWithSvg = { ...kitchens, svg: kitchenSvg }
const kitchenWithJpg = { ...kitchens, jpg: kitchenJpg }

const youthRooms = {
	name: 'youth_rooms',
	title: 'Детские и молодежные',
	path: `${parentUrl}/youth_rooms`,
	component: CatalogSubPage,
}

const youthRoomWithSvg = { ...youthRooms, svg: youthSvg }
const youthRoomWithJpg = { ...youthRooms, jpg: youthJpg }

const childRooms = {
	name: 'child_rooms',
	title: 'Детские',
	path: `${parentUrl}/child_rooms`,
	component: CatalogSubPage,
}

const cabinetSets = {
	name: 'cabinet_sets',
	title: 'Наборы корпусной мебели',
	path: `${parentUrl}/cabinet_sets`,
	component: CatalogSubPage,
}

const cabinetSetsWithJpg = { ...cabinetSets, jpg: cabinetJpg }

const computerTables = {
	name: 'computer_tables',
	title: 'Компьютерные столы',

	path: `${parentUrl}/computer_tables`,
	component: CatalogSubPage,
}

const computerTablesWithJpg = { ...computerTables, jpg: computerTableJpg }

const chests = {
	name: 'chests',
	title: 'Комоды',

	path: `${parentUrl}/chests`,
	component: CatalogSubPage,
}

const chestsWithJpg = { ...chests, jpg: chestsJpg }

const wardrobes = {
	name: 'wardrobes',
	title: 'Шкафы',

	path: `${parentUrl}/wardrobes`,
	component: CatalogSubPage,
}

const wardrobesWithJpg = { ...wardrobes, jpg: wardrobeJpg }

const beds = {
	name: 'bads',
	title: 'Кровати',

	path: `${parentUrl}/bads`,
	component: CatalogSubPage,
}

const bedsWithJpg = { ...beds, jpg: bedsJpg }

const tables = {
	name: 'tables',
	title: 'Столы',
	path: `${parentUrl}/tables`,
	component: CatalogSubPage,
}

const tvStands = {
	name: 'tv_stands',
	title: 'ТВ-тумбы',

	path: `${parentUrl}/tv_stands`,
	component: CatalogSubPage,
}

const tvStandsWithJpg = { ...tvStands, jpg: tvStandJpg }

const stocks = {
	name: 'stocks',
	title: 'Акции',

	path: `${parentUrl}/stocks`,
	component: CatalogSubPage,
}

const certificates = {
	name: 'certificates',
	title: 'Сертификаты',

	path: `${parentUrl}/certificates`,
	component: CatalogSubPage,
}

const novelties = {
	name: 'novelties',
	title: 'Новинки',

	path: `${parentUrl}/novelties`,
	component: CatalogSubPage,
}

const hits = {
	name: 'hits',
	title: 'Хиты',

	path: `${parentUrl}/hits`,
	component: CatalogSubPage,
}

const discounts = {
	name: 'discounts',
	title: 'Скидки',

	path: `${parentUrl}/discounts`,
	component: CatalogSubPage,
}

export const pathToFetchUrl = {
	[`${livingRooms.path}`]: livingRooms.fetchUrl,
	[`${kitchens.path}`]: kitchens.fetchUrl,
	[`${youthRooms.path}`]: youthRooms.fetchUrl,
	[`${bedrooms.path}`]: bedrooms.fetchUrl,
	[`${hallways.path}`]: hallways.fetchUrl,
}

//----------------------------------------//

//----------- full navigation ------------//
export const allNavTypes = [
	home,
	about,
	catalog,
	samples,
	news,
	contacts,
	cart,
	livingRooms,
	hallways,
	bedrooms,
	kitchens,
	youthRooms,
	cabinetSets,
	computerTables,
	chests,
	wardrobes,
	beds,
	tables,
	tvStands,
	stocks,
	certificates,
	childRooms,
	novelties,
	hits,
	discounts,
]
//----------------------------------------//

//----------- main navigation ------------//
export const mainNavTypes = [about, catalog, samples, news, contacts]
//----------------------------------------//

//---------- catalog navigation ----------//
/*/------- main catalog navigation ------/*/
export const catalogMainNavTypes = [livingRooms, hallways, bedrooms, kitchens, youthRooms]
/*/--------------------------------------/*/
/*/-- main catalog navigation with svg --/*/
export const catalogMainNavSvg = [
	livingRoomWithSvg,
	hallwayWithSvg,
	bedroomWithSvg,
	kitchenWithSvg,
	youthRoomWithSvg,
]
/*/--------------------------------------/*/
/*/------- sub catalog navigation -------/*/
export const catalogSubNavTypes = [
	cabinetSets,
	computerTables,
	chests,
	wardrobes,
	beds,
	tables,
	tvStands,
]
/*/--------------------------------------/*/
//----------------------------------------//

//---------- footer navigation -----------//
/*/------- first footer navigation ------/*/
export const footerNavFirst = [about, samples, stocks, certificates]
/*/--------------------------------------/*/
/*/------ second footer navigation ------/*/
export const footerNavSecond = [livingRooms, hallways, bedrooms, childRooms, kitchens]
/*/--------------------------------------/*/
/*/------ third footer navigation -------/*/
export const footerNavThird = catalogSubNavTypes
/*/--------------------------------------/*/
/*/------ fourth footer navigation ------/*/
export const footerNavFourth = [novelties, hits, discounts]
/*/--------------------------------------/*/
//----------------------------------------//

//----- home page catalog navigation ------//
export const homePageCatalog = [
	livingRoomWithJpg,
	hallwayWithJpg,
	bedroomWithJpg,
	kitchenWithJpg,
	youthRoomWithJpg,
	cabinetSetsWithJpg,
	computerTablesWithJpg,
]
//----------------------------------------//
