import stewardess from "../images/stewardess.png";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	Messages: [
		{
			id: 1,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText:
				"Простите. Можно мне принести еще одно одеяло? Я немного замерз",
			is_moderator: true,
			date: "12:35",
		},
		{
			id: 2,
			name: "Стюардесса",
			image: stewardess,
			messageText: "Конечно. Вам нужно лишь одно или два одеяла?",
			is_moderator: false,
			date: "12:35",
		},
		{
			id: 3,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "Думаю, одного будет достаточно",
			is_moderator: true,
			date: "12:36",
		},
		{
			id: 4,
			name: "Стюардесса",
			image: stewardess,
			messageText:
				"ОК. Я сейчас вернусь с вашим одеялом. Хотите чего-нибудь еще?",
			is_moderator: false,
			date: "12:36",
		},
		{
			id: 5,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "Да. Можно также что-нибудь попить?",
			is_moderator: true,
			date: "12:36",
		},
		{
			id: 6,
			name: "Стюардесса",
			image: stewardess,
			messageText:
				"Разумеется. Следует избегать обезвоживания во время таких длительных перелетов. Что вы будете пить?",
			is_moderator: false,
			date: "12:36",
		},
		{
			id: 7,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "Я бы хотел апельсинового сока. И безо льда, конечно же",
			is_moderator: true,
			date: "12:36",
		},
		{
			id: 8,
			name: "Стюардесса",
			image: stewardess,
			messageText:
				"О да. Принесу через минутку. Кстати, вы можете расстегнуть ремни безопасности. Теперь уже безопасно. А почему вы поставили эту сумку под ваше сиденье? Наверное, вам очень неудобно. Нужно поставить ее на полку над вашим местом, в кабинку",
			is_moderator: false,
			date: "12:36",
		},
		{
			id: 9,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText:
				"Хорошо, спасибо. Я сделаю это. Не могли бы вы сказать, как долго лететь до Тайланда?",
			is_moderator: true,
			date: "12:37",
		},
		{
			id: 10,
			name: "Стюардесса",
			image: stewardess,
			messageText:
				"Ну, вы же знаете, что это долгое путешествие. Нам еще лететь 6 часов до приземления",
			is_moderator: false,
			date: "12:37",
		},
		{
			id: 11,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "А нас еще будут кормить перед посадкой?",
			is_moderator: true,
			date: "12:37",
		},
		{
			id: 12,
			name: "Стюардесса",
			image: stewardess,
			messageText:
				"Конечно. Мы подадим еду через 3 часа. Но если вы голодны, я могу принести вам легкую закуску, если хотите",
			is_moderator: false,
			date: "12:37",
		},
		{
			id: 13,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "Да, было бы здорово",
			is_moderator: true,
			date: "12:37",
		},
		{
			id: 14,
			name: "Стюардесса",
			image: stewardess,
			messageText:
				"Без проблем. … Вот, возьмите, сэр. И вот карточка прибытия для иммиграционной службы. Пожалуйста, заполните эту форму черными чернилами до того, как мы приземлимся",
			is_moderator: false,
			date: "12:37",
		},
		{
			id: 15,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "Благодарю. Но мне нужна черная ручка. Вы не одолжите?",
			is_moderator: true,
			date: "12:38",
		},
		{
			id: 16,
			name: "Стюардесса",
			image: stewardess,
			messageText: "Минутку. Наш бортпроводник будет скоро разносить ручки",
			is_moderator: false,
			date: "12:38",
		},
		{
			id: 17,
			name: "Георгий",
			image:
				"https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
			messageText: "Большое спасибо",
			is_moderator: true,
			date: "12:38",
		},
		{
			id: 18,
			name: "Стюардесса",
			image: stewardess,
			messageText: "Приятного полета",
			is_moderator: false,
			date: "12:38",
		},
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
			name: "Саша Шульгина",
			image:
				"https://sun9-1.userapi.com/s/v1/ig2/2LABPGK4zRlnq068bQD-JKyVaO_I1p3dx01KrBFi98z6S-ukDd9xhSW8hL_gRT2N0QIpdfEIOz6iG6GsO65acKAd.jpg?size=50x0&quality=96&crop=0,82,828,828&ava=1",
		},
		{
			id: 7,
			name: "Катерина Казакова",
			image:
				"https://sun9-18.userapi.com/s/v1/ig2/Yc4iIt9jOS8wOrHyDQXve_dskMseXuilaVD6uwAwSRO6Ib6q8TAVtupfm9x15ZIrSxIiTBhkuGkVUQhO1qa9hA1U.jpg?size=50x0&quality=96&crop=0,171,1732,1732&ava=1",
		},
		{
			id: 8,
			name: "Ирина Карташова",
			image:
				"https://sun9-26.userapi.com/s/v1/ig2/X-TJd2erRdUXgBITSEQsqrOXm2soFMgb8pMVJQYrTFsZLZViRxZVMQdGFgG90dIK-hpM3bvq_HwjdgPFt9MC8xnW.jpg?size=50x0&quality=96&crop=0,0,1365,1365&ava=1",
		},
		{
			id: 9,
			name: "Соня Сидякина",
			image:
				"https://sun9-49.userapi.com/s/v1/ig2/QroSM1Qz0TFScritgn9CGjXXP1qC8ZB5zAiP4tmnHc_xhSRDkWawRmzVOtEi8ZEI4OazrPeHOfGEcSFQw3mxXjsV.jpg?size=50x0&quality=96&crop=4,4,801,801&ava=1",
		},
		{
			id: 10,
			name: "Максим Макаров",
			image:
				"https://sun9-42.userapi.com/s/v1/ig2/4_dpIisAqX11TeMhJwG2xIKf4wucL4RPyHEQt3ASJrHzRFJbEAzGnz-BRavcOp3oJMtaBrN7GkvGAM-YnxJfnYwB.jpg?size=50x0&quality=96&crop=785,271,736,736&ava=1",
		},
		{
			id: 11,
			name: "Кристина Мухина",
			image:
				"https://sun9-3.userapi.com/s/v1/ig2/_fd40GDTrhYCQP5St-EmOPWJmiHb9LmgXOAdtgdEgA4WTUCrI0O55Brd6l9CC0iOzqKY0KyVis9-AagjOohnWhAF.jpg?size=50x0&quality=96&crop=387,60,1291,1291&ava=1",
		},
		{
			id: 12,
			name: "Эдгар Ибоян",
			image:
				"https://sun9-29.userapi.com/s/v1/if1/fS5Q-nFShPHvPh46DedrAwBlOAgYXRmAeeUmvIYaq1sVVlZlauOubuIyE3hi1mSp-Fv8o0UX.jpg?size=50x0&quality=96&crop=0,0,2047,2047&ava=1",
		},
		{
			id: 13,
			name: "Аня Иванова",
			image:
				"https://sun9-9.userapi.com/s/v1/ig2/PgYd1t6VovlZieTp5VdYtyTSKbTfzc6wf0oOna9WmwWdmLeINUL3at5g-IwiYDIXR1ANVF57WtlOhE-q5yyh7YIj.jpg?size=50x0&quality=96&crop=0,200,1104,1104&ava=1",
		},
		{
			id: 14,
			name: "Лаваш",
			image:
				"https://sun9-29.userapi.com/s/v1/if1/fS5Q-nFShPHvPh46DedrAwBlOAgYXRmAeeUmvIYaq1sVVlZlauOubuIyE3hi1mSp-Fv8o0UX.jpg?size=50x0&quality=96&crop=0,0,2047,2047&ava=1",
		},
		{
			id: 15,
			name: "Катерина Казакова",
			image:
				"https://sun9-18.userapi.com/s/v1/ig2/Yc4iIt9jOS8wOrHyDQXve_dskMseXuilaVD6uwAwSRO6Ib6q8TAVtupfm9x15ZIrSxIiTBhkuGkVUQhO1qa9hA1U.jpg?size=50x0&quality=96&crop=0,171,1732,1732&ava=1",
		},
		{
			id: 16,
			name: "Ирина Карташова",
			image:
				"https://sun9-26.userapi.com/s/v1/ig2/X-TJd2erRdUXgBITSEQsqrOXm2soFMgb8pMVJQYrTFsZLZViRxZVMQdGFgG90dIK-hpM3bvq_HwjdgPFt9MC8xnW.jpg?size=50x0&quality=96&crop=0,0,1365,1365&ava=1",
		},
		{
			id: 17,
			name: "Соня Сидякина",
			image:
				"https://sun9-49.userapi.com/s/v1/ig2/QroSM1Qz0TFScritgn9CGjXXP1qC8ZB5zAiP4tmnHc_xhSRDkWawRmzVOtEi8ZEI4OazrPeHOfGEcSFQw3mxXjsV.jpg?size=50x0&quality=96&crop=4,4,801,801&ava=1",
		},
		{
			id: 18,
			name: "Максим Макаров",
			image:
				"https://sun9-42.userapi.com/s/v1/ig2/4_dpIisAqX11TeMhJwG2xIKf4wucL4RPyHEQt3ASJrHzRFJbEAzGnz-BRavcOp3oJMtaBrN7GkvGAM-YnxJfnYwB.jpg?size=50x0&quality=96&crop=785,271,736,736&ava=1",
		},
		{
			id: 19,
			name: "Кристина Мухина",
			image:
				"https://sun9-3.userapi.com/s/v1/ig2/_fd40GDTrhYCQP5St-EmOPWJmiHb9LmgXOAdtgdEgA4WTUCrI0O55Brd6l9CC0iOzqKY0KyVis9-AagjOohnWhAF.jpg?size=50x0&quality=96&crop=387,60,1291,1291&ava=1",
		},
		{
			id: 20,
			name: "Эдгар Ибоян",
			image:
				"https://sun9-29.userapi.com/s/v1/if1/fS5Q-nFShPHvPh46DedrAwBlOAgYXRmAeeUmvIYaq1sVVlZlauOubuIyE3hi1mSp-Fv8o0UX.jpg?size=50x0&quality=96&crop=0,0,2047,2047&ava=1",
		},
		{
			id: 21,
			name: "Аня Иванова",
			image:
				"https://sun9-9.userapi.com/s/v1/ig2/PgYd1t6VovlZieTp5VdYtyTSKbTfzc6wf0oOna9WmwWdmLeINUL3at5g-IwiYDIXR1ANVF57WtlOhE-q5yyh7YIj.jpg?size=50x0&quality=96&crop=0,200,1104,1104&ava=1",
		},
		{
			id: 22,
			name: "Лаваш",
			image:
				"https://sun9-29.userapi.com/s/v1/if1/fS5Q-nFShPHvPh46DedrAwBlOAgYXRmAeeUmvIYaq1sVVlZlauOubuIyE3hi1mSp-Fv8o0UX.jpg?size=50x0&quality=96&crop=0,0,2047,2047&ava=1",
		},
		{
			id: 23,
			name: "Кристина Мухина",
			image:
				"https://sun9-3.userapi.com/s/v1/ig2/_fd40GDTrhYCQP5St-EmOPWJmiHb9LmgXOAdtgdEgA4WTUCrI0O55Brd6l9CC0iOzqKY0KyVis9-AagjOohnWhAF.jpg?size=50x0&quality=96&crop=387,60,1291,1291&ava=1",
		},
		{
			id: 24,
			name: "Эдгар Ибоян",
			image:
				"https://sun9-29.userapi.com/s/v1/if1/fS5Q-nFShPHvPh46DedrAwBlOAgYXRmAeeUmvIYaq1sVVlZlauOubuIyE3hi1mSp-Fv8o0UX.jpg?size=50x0&quality=96&crop=0,0,2047,2047&ava=1",
		},
		{
			id: 25,
			name: "Аня Иванова",
			image:
				"https://sun9-9.userapi.com/s/v1/ig2/PgYd1t6VovlZieTp5VdYtyTSKbTfzc6wf0oOna9WmwWdmLeINUL3at5g-IwiYDIXR1ANVF57WtlOhE-q5yyh7YIj.jpg?size=50x0&quality=96&crop=0,200,1104,1104&ava=1",
		},
	],
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.Messages.push({
                id: Math.random(0, 99999999999999999),
                date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                name: "Георгий",
                is_moderator: true,
                image:
                    "https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1",
                messageText: action.payload,
            });
        },
    },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
