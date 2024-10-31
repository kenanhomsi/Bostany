import { createSlice } from "@reduxjs/toolkit";
import { chatType } from "../../Types";
import avaterImage from "/Images/Avatars.png";
interface intitstate {
  SelectedChatId: number;
  chats: chatType[];
}

const initialState: intitstate = {
  SelectedChatId: 0,
  chats: [
    {
      id: 0,
      Person: {
        name: "سارة الشمري",
        image: avaterImage,
      },
      Messages: [
        {
          From: "Him",
          text: "المعرفة قوة، وهي تفتح الأبواب التي كانت مغلقة.",
          date: {
            hour: 15,
            minute: 10,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: true,
        },
        {
          From: "me",
          text: "بالضبط، التعلم المستمر هو المفتاح.",
          date: {
            hour: 15,
            minute: 15,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: true,
        },
      ],
    },
    {
      id: 1,
      Person: {
        name: "محمد القحطاني",
        image: avaterImage,
      },
      Messages: [
        {
          From: "Him",
          text: "أحببت فيلم الأمس، كانت القصة مؤثرة جداً.",
          date: {
            hour: 16,
            minute: 20,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: true,
        },
        {
          From: "me",
          text: "نعم، كانت لحظات مؤثرة بالفعل.",
          date: {
            hour: 16,
            minute: 25,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: false,
        },
      ],
    },
    {
      id: 2,
      Person: {
        name: "فاطمة العتيبي",
        image: avaterImage,
      },
      Messages: [
        {
          From: "Him",
          text: "تذكر أن الأهداف الصغيرة تؤدي إلى إنجازات كبيرة.",
          date: {
            hour: 17,
            minute: 5,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: false,
        },
        {
          From: "me",
          text: "هذا هو السر، التركيز على التفاصيل.",
          date: {
            hour: 17,
            minute: 10,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: false,
        },
      ],
    },
    {
      id: 3,
      Person: {
        name: "يوسف العمري",
        image: avaterImage,
      },
      Messages: [
        {
          From: "Him",
          text: "هل جربت الطبخ الجديد؟ إنه لذيذ!",
          date: {
            hour: 18,
            minute: 15,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: false,
        },
        {
          From: "me",
          text: "لا، لكنني سأجربه قريبًا.",
          date: {
            hour: 18,
            minute: 20,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: false,
        },
      ],
    },
    {
      id: 4,
      Person: {
        name: "نورة السالم",
        image: avaterImage,
      },
      Messages: [
        {
          From: "Him",
          text: "أحببت حديثنا عن الكتب، لدي اقتراحات رائعة.",
          date: {
            hour: 19,
            minute: 30,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: true,
        },
        {
          From: "me",
          text: "أنتظر اقتراحاتك بفارغ الصبر!",
          date: {
            hour: 19,
            minute: 35,
            day: 22,
            mounth: 10,
            year: 2024,
          },
          received: true,
          readed: false,
        },
      ],
    },
  ],
};

const chatMessagesSlice = createSlice({
  name: "chatMessages",
  initialState,
  reducers: {
    PutSelectedChatId(state, action) {
      state.SelectedChatId = action.payload;
    },
    addMessageToChat(state, action) {
      state.chats.map((ele) => {
        if (ele.id == action.payload.id) {
          const arr = ele.Messages.push(action.payload.data);
          return {
            id: ele.id,
            Person: ele.Person,
            ChatMessage: arr,
          };
        } else {
          return ele;
        }
      });
    },
    makeAllMessageSeen(state, action) {
      state.chats.map((ele) => {
        if (ele.id == action.payload) {
          const arr = ele.Messages.map((msg) => {
            return {
              From: msg.From,
              text: msg.text,
              date: msg.date,
              received: msg.received,
              readed: true,
            };
          });
          return {
            id: ele.id,
            Person: ele.Person,
            ChatMessage: arr,
          };
        } else {
          return ele;
        }
      });
    },
  },
});

export const { PutSelectedChatId, addMessageToChat, makeAllMessageSeen } =
  chatMessagesSlice.actions;
export default chatMessagesSlice.reducer;
