import blog2 from "../../images/Blogs/blog2.jpeg"
import blog1 from "../../images/Blogs/blog1.jpeg"

export const getComments = async () => {
  return [
    {
      id: "1",
      body: "პირველი კომენტარი",
      username: "ნიკა",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "მეორე კომენტარი",
      username: "ლუკა",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "პირველი პასუხი",
      username: "ლეილა",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "მეორე პასუხი",
      username: "ლელა",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "ლელა",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};

export const getPage = async () => {
  return {
    time:"28 ივლისი 2022წ",
    title:"რა სასარგებლო თვისებები აქვს შავი ქლიავის ჩირს?",
    paragraphs:[
      {
        title:"ზოგადი მიმოხილვა",
        image:blog2,
        text:"შავი ქლიავის ჩირი სხვადასხვა სახეობის ქლიავისგან მზადდება. ხარისხიანი ქლიავის ჩირი რბილი მაგრამ მყარი\n" +
            "                    უნდა იყოს, არ უნდა იყოს გამომშრალი და გამხმარი. სწროად შრობის შემთხვევაში ერთი კილოგრამი ახალი\n" +
            "                    ქლიავისგან დაახლოებით 200 გრამი ჩირი გამოდის.\n" +
            "                    პირველად შავი ქლიავის ჩირი ჩვენს წელთაღრიცხვამდე მეოთხე საუკუნეში დამზადდა კასპიის ზღვის მიდამოებში.\n" +
            "                    მეცნიერები თვლიან, რომ ადგილობრივმა ტომებმა მწიფე ქლიავის მზეზე გამშრობა დაიწყეს და ასე ცდილობდნენ\n" +
            "                    მოსავლის შენახვის ვადები გაეხანგრძლივებინათ."
      },
    
    ],
  };
};