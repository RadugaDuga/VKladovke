import profileReducer from "./profile-reducer";
import messagesReducer from './messages-reducer';
import groupsReducer from "./groups-reducer";





let store = {
	_state: {

		profilePage: {
			PostsData: [
				{
					id: 1,
					name: "Георгий Букиа",
					image:
						"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
					text:
						"Навального вывели из комы, постепенно его отключают от ИВЛ, он реагирует на речь и обращения к нему.",
					likes_count: 7,
					comments_count: "",
					repost_count: "2",
					views_count: "631",
					date: "18 ноя 2020",
				},

				{
					id: 4,
					name: "Георгий Букиа",
					image:
						"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
					text: "",
					likes_count: "92",
					repost_count: "43",
					views_count: "1001",
					date: "4 сен 2020",
				},
			],
			newPostText: "",
		},
		messagesPage: {
			Messages: [
				{ id: 1, messageText: "Привет, что делал сегодня? Я очень скучаю" },
				{ id: 2, messageText: "Дарова, сидел учил реакт по видосам Димыча" },
				{ id: 3, messageText: "Аахахах" },
				{ id: 4, messageText: "Видел этот мем на пикабе" },
			],

			Dialogs: [
				{
					id: 1,
					name: "Дарья Амеличева",
					image:
						"https://sun1-23.userapi.com/impg/kBTMqEc51V77suUcU8DXXV7NMWyz1SIXtR9acQ/cKvcJzxHqA4.jpg?size=50x0&quality=88&crop=5,4,853,853&sign=6f0a40472b73af61b1872a8b5a1006c8&ava=1",
				},
				{
					id: 2,
					name: "Иван Токарев",
					image:
						"https://sun1-92.userapi.com/impg/c857736/v857736275/ff93a/91y1W9Lqpc4.jpg?size=50x0&quality=88&crop=484,258,900,900&sign=a0a404392920e5360e4eed2a6b75f4ba&ava=1",
				},
				{
					id: 3,
					name: "Алекс Семченко",
					image:
						"https://sun1-96.userapi.com/impf/c837322/v837322530/55ff9/7JsqhYlpm34.jpg?size=50x0&quality=88&crop=466,181,1259,1259&sign=d4711f6a174005ed0b92cc8c2959f17f&ava=1",
				},
				{
					id: 4,
					name: "Сергей Лисенок",
					image:
						"https://sun1-97.userapi.com/impf/c626527/v626527581/20991/cuR-S7RYIuM.jpg?size=50x0&quality=88&crop=66,85,372,372&sign=3069b00461edc219322e13bce9da507a&ava=1",
				},
				{
					id: 5,
					name: "Георгий Букиа",
					image:
						"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
				},
				{
					id: 6,
					name: "Сергей Лисенок",
					image:
						"https://sun1-97.userapi.com/impf/c626527/v626527581/20991/cuR-S7RYIuM.jpg?size=50x0&quality=88&crop=66,85,372,372&sign=3069b00461edc219322e13bce9da507a&ava=1",
				},
				{
					id: 7,
					name: "Иван Токарев",
					image:
						"https://sun1-92.userapi.com/impg/c857736/v857736275/ff93a/91y1W9Lqpc4.jpg?size=50x0&quality=88&crop=484,258,900,900&sign=a0a404392920e5360e4eed2a6b75f4ba&ava=1",
				}
			],

			newMessageText: ""
		},
		groupsPage: {
			groupsData: [
				{
					id: "",
					image:
						"https://sun9-18.userapi.com/impg/boB9lKw0bFY7tLGxtwqLY9oPQxK4RLxXYAOZBQ/BroGUMRvwSY.jpg?size=100x0&quality=96&crop=47,39,245,245&sign=8d8346b984ffa11b3f9d193470ebf714&ava=1",
					name: "Я залип..",
					type: "Юмор",
					subsCount: "781 160",
				},
				{
					id: "",
					image:
						"https://sun9-61.userapi.com/impf/c625129/v625129140/2ba73/E9fCln-HXBg.jpg?size=100x0&quality=88&crop=372,1167,824,824&sign=0763a4fdccf3c2be60cecfff6114ba72&ava=1",
					name: "На приеме у шевцова",
					type: "Закрытая группа",
					subsCount: "828 127",
				},
				{
					id: "",
					image:
						"https://sun9-55.userapi.com/impg/c857728/v857728829/1a67ff/zNob7Jykg3k.jpg?size=100x0&quality=88&crop=0,0,391,391&sign=f4c22ae35b29012c65b14df25b48ab8e&ava=1",
					name: "Убежище мурзача",
					type: "Юмор",
					subsCount: "243 171",
				},
				{
					id: "",
					image:
						"https://sun9-18.userapi.com/impg/3OsYgK2pgqU_5Io8EQuHbENrOhwNc_qWiodFPQ/03t2q1kQPkg.jpg?size=100x0&quality=88&crop=355,305,620,620&sign=c41deac125f6a6a79208f7e4b991320f&ava=1",
					name: "MDK",
					type: "Юмор",
					subsCount: "11 622 292",
				},
				{
					id: "",
					image:
						"https://sun9-36.userapi.com/impg/bt0HEQuoHnqPOjUdtS-lu3h1tk0sjRmhxd7lXQ/nkCrMkEjcl8.jpg?size=100x0&quality=88&crop=110,115,800,800&sign=e47df8d43a4c7f70af7849305a8a5974&ava=1",
					name: "Кампус Цифровой Мегаполис - Новосибирск",
					type: "Образование",
					subsCount: "400",
				},
				{
					id: "",
					image:
						"https://sun9-6.userapi.com/impg/c855620/v855620335/1d6d77/dHwaSHt06CU.jpg?size=100x0&quality=88&crop=472,245,815,815&sign=2367f6379e2e6809c22556c809d24563&ava=1",
					name: "БРИТИШ ЮМОР",
					type: "Юмор",
					subsCount: "444 989",
				},
				{
					id: "",
					image:
						"https://sun9-74.userapi.com/impf/c830708/v830708113/195ad7/yMqzNENpE9A.jpg?size=100x0&quality=88&crop=0,0,200,200&sign=5d20a92b52ac8445992905e3702524e1&ava=1",
					name: "WebDesign Guru - обучение digital профессиям",
					type: "Дизайн и графика",
					subsCount: "26 819",
				},
				{
					id: "",
					image:
						"https://sun9-19.userapi.com/impf/c639322/v639322744/3737/VR7g1WpizzQ.jpg?size=100x0&quality=88&crop=72,71,852,852&sign=3a31d0ee042e9f9acba342e164657179&ava=1",
					name: "Уюта",
					type: "Открытая группа",
					subsCount: "113",
				},
			],
		},

	},


	_callSubcriber() {
		console.log("sub changed");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubcriber = observer;
	},

	dispatch(action) {

		profileReducer(this._state.profilePage, action)
		messagesReducer(this._state.messagesPage, action)
		groupsReducer(this._state.profilePage, action)
		this._callSubcriber(this._state);

	},
};





export default store;



