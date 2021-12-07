import * as actionTypes from "../types";

const initialState = {
  displayName: "",
  counter: null,
  error: null,
  profile: false,
  findStudent: [],
  subComments: [],
  students: [
    {
      id: 1,
      studentName: "Vince Daniel De Leon",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "08-08-2000",
      studentAddress: "Bustos, Bulacan",
      studentNickname: "bit",
      studentSkills: "Javascript, HTML",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/140062376_3670233823095268_9110685302975513583_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG82mOQQ0gSHUYbVY12wpuG-4lzP9iMeID7iXM_2Ix4gJ9mqQKaxDYe222-gAuGInoMWfDChkr8OkJnn1E8rXuo&_nc_ohc=L4aZqr36EigAX_pijP-&_nc_ht=scontent.fmnl3-1.fna&oh=684ce5e9b7138c328396dddce5b7247a&oe=61CEEF05",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbit@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 2,
      studentName: "Bryce Ganotice",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "08-27-1999",
      studentAddress: "Pulilan, Bulacan",
      studentNickname: "bryce",
      studentSkills: "Javascript, C++",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/midterm-4th-year.appspot.com/o/bryce.jpg?alt=media&token=2c3154c0-3b80-48c4-a2cf-31da7616c65d",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbryce@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 3,
      studentName: "Harold Dimson",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "10-14-1999",
      studentAddress: "Baliuag, Bulacan",
      studentNickname: "marold",
      studentSkills: "Javascript, CSS",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/midterm-4th-year.appspot.com/o/harold.jpg?alt=media&token=284c6d69-4237-4887-8394-cd845a7e181a",
      comments: [
        {
          id: 1,
          commentEmail: "defaultharold@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 4,
      studentName: "Ronnie Bagonas",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "10-24-1999",
      studentAddress: "Bustos, Bulacan",
      studentNickname: "butoda",
      studentSkills: "Python, C++",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/midterm-4th-year.appspot.com/o/ronnie.jpg?alt=media&token=74b3225b-ebbf-4261-9447-95a2c5702b4a",
      comments: [
        {
          id: 1,
          commentEmail: "defaultRonnie@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 5,
      studentName: "Nico Mapoy",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "10-24-1999",
      studentAddress: "Candaba, Pampanga",
      studentNickname: "nico",
      studentSkills: "HTML, C#",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/midterm-4th-year.appspot.com/o/nico.jpg?alt=media&token=630af976-bf5f-4ff9-9c80-a5427c2ba59d",
      comments: [
        {
          id: 1,
          commentEmail: "defaultnico@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 6,
      studentName: "Luisa De jesus",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Female",
      studentBirthdate: "03-17-1999",
      studentAddress: "Baliuag, Bulacan",
      studentNickname: "luisa",
      studentSkills: "Python, HTML",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/217651122_2698907126899881_3295613887006229915_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE_VYOD4jnKXWdgDZ3AEV48HmQ354RwFC8eZDfnhHAULzDx_qqhKv8cVPheoG92Yj7uETOUUOjsnclevLgTEJB8&_nc_ohc=Iuo28u00MRAAX85oQxN&_nc_oc=AQkQRilFdaMYnedJ3OsphdTVYeze80sWAnirvrkukPoSMx2owwQ0_Cgnqk2Ykd7-TW8&_nc_ht=scontent.fmnl3-4.fna&oh=960b90090286e3721184aad289d7136d&oe=61B3CB2E",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbit@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 7,
      studentName: "Ivan Bautista",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "02-28-1999",
      studentAddress: "Bustos, Bulacan",
      studentNickname: "ivan",
      studentSkills: "Javascript, Java ",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/244424580_1525808381103506_4444261260433284601_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEG4vSTmkDpmZwJn0a25Ow1tICr8oZi-J-0gKvyhmL4n-fN7ECVOzc-CHYRVSWqVvBGeij3w7tG_kr0wAhVqiJ-&_nc_ohc=5P4GPyNgal8AX8LrjDA&_nc_ht=scontent.fmnl3-3.fna&oh=e50e0841410d4738a0039291a6b70b91&oe=61B3EF68",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbit@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 8,
      studentName: "Jastin Cruz",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Female",
      studentBirthdate: "09-12-2000",
      studentAddress: "Baliuag, Bulacan",
      studentNickname: "tin",
      studentSkills: "Swift, C#",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/240833968_2038243236339415_5039961707252628872_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGTYV23ZJEr0jzu-1_Ww76JGiVu-W6drKEaJW75bp2soWRMSRXJhz4EpaSCPVA5PN455N0-CWdG60R3N3tdxo0E&_nc_ohc=re_UyfiTR_wAX8uAzGD&_nc_ht=scontent.fmnl3-1.fna&oh=e91cbce2c8c77a67b04b3065ab2392e2&oe=61B3EA92",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbit@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 9,
      studentName: "Meressel Manongtong",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Female",
      studentBirthdate: "05-11-2000",
      studentAddress: "Bustos, Bulacan",
      studentNickname: "mem",
      studentSkills: "Ruby, Objective-C",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/250903083_5019590318070870_7531887545027203388_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF0mJIziL0VR8c88f-c8eQhiFtPIw9wt6aIW08jD3C3pqEpVr1CZ7Y4uzXPVyA-2RRBkhsiHOZDTZeVmz5cz0ko&_nc_ohc=0krp7_Zc-GYAX8XPYeT&tn=kNm8z-uMDh7dLY-7&_nc_ht=scontent.fmnl3-4.fna&oh=e1d529ff4f5e61c9657a2c50503af432&oe=61B37F6D",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbit@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
    {
      id: 10,
      studentName: "Mang Kanor",
      studentSection: "BSIT 4B",
      studentReview: 0,
      studentGender: "Male",
      studentBirthdate: "05-11-1721",
      studentAddress: "Bustos, Bulacan",
      studentNickname: "kanor",
      studentSkills: "Javascript, PHP",
      teamworkFive: 0,
      teamworkFour: 0,
      teamworkThree: 0,
      teamworkTwo: 0,
      teamworkOne: 0,
      creativityFive: 0,
      creativityFour: 0,
      creativityThree: 0,
      creativityTwo: 0,
      creativityOne: 0,
      adaptabilityFive: 0,
      adaptabilityFour: 0,
      adaptabilityThree: 0,
      adaptabilityTwo: 0,
      adaptabilityOne: 0,
      leadershipFive: 0,
      leadershipFour: 0,
      leadershipThree: 0,
      leadershipTwo: 0,
      leadershipOne: 0,
      persuasionFive: 0,
      persuasionFour: 0,
      persuasionThree: 0,
      persuasionTwo: 0,
      persuasionOne: 0,
      image:
        "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.6435-9/cp0/e15/q65/p64x64/178469867_107370361504789_1827968329812432963_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeGBtIOM57xJHl1gjoa25EnmK54J4_ktzBwrngnj-S3MHBM76NfAKhig4lHEPVeiajY_z6JTMUa8s4jCH8B8plsn&_nc_ohc=v9o9FeUt7JMAX9NYdB4&_nc_ht=scontent.fmnl3-2.fna&oh=adb80b0dd5accea74c12708074b53a27&oe=61D60380",
      comments: [
        {
          id: 1,
          commentEmail: "defaultbit@email.com",
          commentInfo: "Gago kaba",
          createdTime: 1638351799646,
        },
      ],
    },
  ],
  comments: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case actionTypes.SET_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case actionTypes.GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case actionTypes.GET_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (item) => item.studentName === action.payload
        ),
      };
    case actionTypes.GET_SUB_COMMENT:
      return {
        ...state,
        subComments: state.subComments.filter(
          (item) =>
            item.studentName === action.payload 
         //  && item.commentEmail === action.payload.commentEmail
        ),
      };
    case actionTypes.FIND_STUDENT:
      return {
        ...state,
        findStudent: state.students.find(
          (item) => item.studentName === action.payload
        ),
      };
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
     
        comments: state.comments.concat(action.payload),
        students: state.students.map((content, i) =>
          content.studentName === action.payload.studentName &&
          action.payload.teamworkRating === 5 &&
          action.payload.creativityRating === 5 &&
          action.payload.adaptabilityRating === 5 &&
          action.payload.leadershipRating === 5 &&
          action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName &&  action.payload.teamworkRating === 4  &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName &&action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 1
              
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionOne: content.persuasionOne + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :   content.studentName === action.payload.studentName &&action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 1
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionOne: content.persuasionOne + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkTwo + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFour: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 1
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionOne: content.persuasionOne + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 1
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionOne: content.persuasionOne + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
            :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 1
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionOne: content.persuasionOne + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 1
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionOne: content.persuasionOne + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
            : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              :  content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 1 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkOne: content.teamworkOne + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 2 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityTwo: content.adaptabilityTwo + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 3 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityThree: content.adaptabilityThree + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 4 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFour: content.adaptabilityFour + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 2 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipTwo: content.leadershipTwo + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 3 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipThree: content.leadershipThree + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 4 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFour: content.leadershipFour + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 1 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityOne: content.adaptabilityOne + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 2
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionTwo: content.persuasionTwo + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 3
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionThree: content.persuasionThree + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 5 &&
              action.payload.creativityRating === 5 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 1 &&
              action.payload.persuasionRating === 4
            ? {
                ...content,
                teamworkFive: content.teamworkFive + 1,
                creativityFive: content.creativityFive + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipOne: content.leadershipOne + 1,
                persuasionFour: content.persuasionFour + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName &&action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 2 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkTwo: content.teamworkTwo + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 3 &&
              action.payload.creativityRating === 4 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkThree: content.teamworkThree + 1,
                creativityFour: content.creativityFour + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 1 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityOne: content.creativityOne + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 2 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityTwo: content.creativityTwo + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
              : content.studentName === action.payload.studentName && action.payload.teamworkRating === 4 &&
              action.payload.creativityRating === 3 &&
              action.payload.adaptabilityRating === 5 &&
              action.payload.leadershipRating === 5 &&
              action.payload.persuasionRating === 5
            ? {
                ...content,
                teamworkFour: content.teamworkFour + 1,
                creativityThree: content.creativityThree + 1,
                adaptabilityFive: content.adaptabilityFive + 1,
                leadershipFive: content.leadershipFive + 1,
                persuasionFive: content.persuasionFive + 1,
                studentReview: content.studentReview + 1,
              }
            :content
              
            
            
            //may kulang pa sa pag validate ng rate , next to do creativity 2 test 1 adapatability
        ),
      };
    case actionTypes.ADD_SUB_COMMENT:
      return {
        ...state,
        subComments: state.subComments.concat(action.payload),
      };
    case actionTypes.EDIT_RATING:
      return {
        ...state,
        students: state.students.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                teamworkFive: action.payload.teamworkFive,
                teamworkFour: action.payload.teamworkFour,
                teamworkThree: action.payload.teamworkThree,
                teamworkTwo: action.payload.teamworkTwo,
                teamworkOne: action.payload.teamworkOne,
                creativityFive: action.payload.creativityFive,
                creativityFour: action.payload.creativityFour,
                creativityThree: action.payload.creativityThree,
                creativityTwo: action.payload.creativityTwo,
                creativityOne: action.payload.creativityOne,
                adaptabilityFive: action.payload.adaptabilityFive,
                adaptabilityFour: action.payload.adaptabilityFour,
                adaptabilityThree: action.payload.adaptabilityThree,
                adaptabilityTwo: action.payload.adaptabilityTwo,
                adaptabilityOne: action.payload.adaptabilityOne,
                leadershipFive: action.payload.leadershipFive,
                leadershipFour: action.payload.leadershipFour,
                leadershipThree: action.payload.leadershipThree,
                leadershipTwo: action.payload.leadershipTwo,
                leadershipOne: action.payload.leadershipOne,
                persuasionFive: action.payload.persuasionFive,
                persuasionFour: action.payload.persuasionFour,
                persuasionThree: action.payload.persuasionThree,
                persuasionTwo: action.payload.persuasionTwo,
                persuasionOne: action.payload.persuasionOne,
              }
            : content
        ),
      };
    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default userReducer;
