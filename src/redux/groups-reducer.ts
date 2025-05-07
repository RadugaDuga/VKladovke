import { createSlice } from '@reduxjs/toolkit';

interface Group {
    id: number;
    image: string;
    name: string;
    type: string;
    subsCount: string;
}

interface GroupsState {
    groupsData: Group[];
}

const initialState: GroupsState = {
    groupsData: [
        {
            id: 1,
            image:
                "https://sun9-18.userapi.com/impg/boB9lKw0bFY7tLGxtwqLY9oPQxK4RLxXYAOZBQ/BroGUMRvwSY.jpg?size=100x0&quality=96&crop=47,39,245,245&sign=8d8346b984ffa11b3f9d193470ebf714&ava=1",
            name: "Я залип..",
            type: "Юмор",
            subsCount: "781 160",
        },
        {
            id: 2,
            image:
                "https://sun9-61.userapi.com/impf/c625129/v625129140/2ba73/E9fCln-HXBg.jpg?size=100x0&quality=88&crop=372,1167,824,824&sign=0763a4fdccf3c2be60cecfff6114ba72&ava=1",
            name: "На приеме у шевцова",
            type: "Закрытая группа",
            subsCount: "828 127",
        },
        {
            id: 3,
            image:
                "https://sun9-55.userapi.com/impg/c857728/v857728829/1a67ff/zNob7Jykg3k.jpg?size=100x0&quality=88&crop=0,0,391,391&sign=f4c22ae35b29012c65b14df25b48ab8e&ava=1",
            name: "Убежище мурзача",
            type: "Юмор",
            subsCount: "243 171",
        },
        {
            id: 4,
            image:
                "https://sun9-18.userapi.com/impg/3OsYgK2pgqU_5Io8EQuHbENrOhwNc_qWiodFPQ/03t2q1kQPkg.jpg?size=100x0&quality=88&crop=355,305,620,620&sign=c41deac125f6a6a79208f7e4b991320f&ava=1",
            name: "MDK",
            type: "Юмор",
            subsCount: "11 622 292",
        },
        {
            id: 5,
            image:
                "https://sun9-36.userapi.com/impg/bt0HEQuoHnqPOjUdtS-lu3h1tk0sjRmhxd7lXQ/nkCrMkEjcl8.jpg?size=100x0&quality=88&crop=110,115,800,800&sign=e47df8d43a4c7f70af7849305a8a5974&ava=1",
            name: "Кампус Цифровой Мегаполис - Новосибирск",
            type: "Образование",
            subsCount: "400",
        },
        {
            id: 6,
            image:
                "https://sun9-6.userapi.com/impg/c855620/v855620335/1d6d77/dHwaSHt06CU.jpg?size=100x0&quality=88&crop=472,245,815,815&sign=2367f6379e2e6809c22556c809d24563&ava=1",
            name: "БРИТИШ ЮМОР",
            type: "Юмор",
            subsCount: "444 989",
        },
        {
            id: 7,
            image:
                "https://sun9-74.userapi.com/impf/c830708/v830708113/195ad7/yMqzNENpE9A.jpg?size=100x0&quality=88&crop=0,0,200,200&sign=5d20a92b52ac8445992905e3702524e1&ava=1",
            name: "WebDesign Guru - обучение digital профессиям",
            type: "Дизайн и графика",
            subsCount: "26 819",
        },
        {
            id: 8,
            image:
                "https://sun9-19.userapi.com/impf/c639322/v639322744/3737/VR7g1WpizzQ.jpg?size=100x0&quality=88&crop=72,71,852,852&sign=3a31d0ee042e9f9acba342e164657179&ava=1",
            name: "Уюта",
            type: "Открытая группа",
            subsCount: "113",
        },
    ]
};

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        // reducers can be added here if needed in the future
    },
});

export default groupsSlice.reducer;
