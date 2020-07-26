const DarkTheme = {
	dark: true,
	colors: {
		primary: 'rgb(10, 132, 255)',
		background: 'rgb(1, 1, 1)',
		card: 'rgb(18, 18, 18)',
		text: 'rgb(229, 229, 231)',
		border: 'rgb(39, 39, 41)'
	}
};

const DefaultTheme = {
	dark: false,
	colors: {
		primary: 'rgb(0, 122, 255)',
		background: 'rgb(242, 242, 242)',
		card: 'rgb(255, 255, 255)',
		text: 'rgb(28, 28, 30)',
		border: 'rgb(224, 224, 224)'
	}
};

export default function theme(state = DefaultTheme, action: any) {
	if (!action) {
		return state;
	}
	switch (action.type) {
		case 'THEME':
			console.log('2');
			return state;
		default:
			console.log('33');
			return state;
	}
}
