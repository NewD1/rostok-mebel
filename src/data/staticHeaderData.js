import { watchSvg, phoneSvg, coffeeSvg, faxSvg } from './svgBodies'

export const workTime = {
	svg: watchSvg,
	text: '8:00–17:00',
	className: 'header_time_text work_time',
}

export const restTime = {
	svg: coffeeSvg,
	text: '12:00–13:00',
	className: 'header_time_text rest_time',
}

export const phoneNumber = {
	svg: phoneSvg,
	text: '+7 (8412) 99-19-92',
	className: 'header_number_text',
}

export const faxNumber = {
	svg: faxSvg,
	text: '+7 (8412) 90-96-40',
	className: 'header_number_text',
}


