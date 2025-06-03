export const usersList = [
  {
    id: 1,
    fullName: 'Pera Peric',
    username: 'peraperic',
    email: 'pera@gmail.com',
    city: 'Beograd',
    phone: '651231234',
    isCraftman: true,
    description: 'Elektricar',
    experience: 12,
    avgRating: 4.25,
    comments: [
      {
        id: 1,
        comment: 'Odlican posao! svaka cast',
        userRating: 5,
        userId: 1
      },
      {
        id: 6,
        comment: 'Super, bravo!',
        userRating: 4,
        userId: 1
      },
      {
        id: 8,
        comment: 'Super bravo legendo',
        userRating: 5,
        userId: 1
      },
      {
        id: 9,
        comment: 'Onako posa',
        userRating: 3,
        userId: 1
      }
    ],
    services: [
      {
        id: 38,
        serviceName: 'Elektricar',
        craftTypeId: 7
      }
    ],
    images: [
      'https://elektrobgd.com/wp-content/uploads/2023/04/elektricarzemun.jpg',
      'https://elektricar011.com/wp-content/uploads/2017/05/Elektricar-Zemun.png'
    ]
  },
  {
    id: 5,
    fullName: 'mikiM',
    username: 'MikiCAr',
    email: 'miki@gmail.com',
    city: 'Zrenjanin',
    phone: '065432132',
    isCraftman: true,
    description: 'Stolar',
    experience: 5,
    avgRating: 5.0,
    comments: [
      {
        id: 7,
        comment: 'Bravo',
        userRating: 5,
        userId: 5
      }
    ],
    services: [
      {
        id: 5,
        serviceName: 'Stolar',
        craftTypeId: 1
      },
      {
        id: 6,
        serviceName: 'Tesar',
        craftTypeId: 5
      },
      {
        id: 7,
        serviceName: 'Drvorezbar',
        craftTypeId: 1
      }
    ],
    images: ['https://www.daibau.rs/images/backgrounds/90-1-m.jpg']
  },
  {
    id: 7,
    fullName: 'Jovana Mikic',
    username: 'jovmik',
    email: 'joka@gmail.com',
    city: 'Kragujevac',
    phone: '06987698',
    isCraftman: true,
    description: 'Ja sam novi krojac u gradu',
    experience: 1,
    avgRating: 2.5,
    comments: [
      {
        id: 2,
        comment: 'Solidno odradjeno, moze bolje!',
        userRating: 3,
        userId: 7
      },
      {
        id: 5,
        comment: 'Los, ne preporucujem!',
        userRating: 2,
        userId: 7
      }
    ],
    services: [
      {
        id: 9,
        serviceName: 'Krojac',
        craftTypeId: 2
      }
    ],
    images: [
      'https://www.011info.com/uploads/Magazin/2023/12/28/2052/900x600_woman-tailor-working-sewing-factory.jpg',
      'https://www.novi-beograd-zemun.com/wp-content/uploads/2022/05/ex1.jpg'
    ]
  },
  {
    id: 8,
    fullName: 'Milica Pesic',
    username: 'mica',
    email: 'milica22@gmail.com',
    city: 'Kraljevo',
    phone: '064321332',
    isCraftman: true,
    description: 'Pruzam usluge staklorezca',
    experience: 10,
    avgRating: 2.0,
    comments: [
      {
        id: 3,
        comment: 'Los posao! Ne svidja mi se ',
        userRating: 1,
        userId: 8
      },
      {
        id: 4,
        comment: 'Solidan posao, ne svidja mi se stil!',
        userRating: 3,
        userId: 8
      }
    ],
    services: [
      {
        id: 21,
        serviceName: 'Staklorezac',
        craftTypeId: 4
      }
    ],
    images: ['https://www.staklorezac.com/wp-content/uploads/2024/08/staklorezac-pocetna1.jpg']
  },
  {
    id: 19,
    fullName: 'Uros Maksic',
    email: 'ukims@gmail.com',
    isCraftman: true,
    description: 'Hey, ja sam novi staklorezac!',
    experience: 2,
    avgRating: 0.0,
    comments: [],
    services: [
      {
        id: 21,
        serviceName: 'Staklorezac',
        craftTypeId: 4
      }
    ],
    images: []
  },
  {
    id: 11,
    fullName: 'Janko Jankovic',
    username: 'jankos',
    email: 'janko@gmail.com',
    city: 'Loznica',
    phone: '066564532',
    isCraftman: true,
    description: 'Ovde Janko, momak koji je najbolji vodoinstalater',
    experience: 15,
    avgRating: 0.0,
    comments: [],
    services: [
      {
        id: 39,
        serviceName: 'Vodoinstalater',
        craftTypeId: 7
      }
    ],
    images: []
  }
];
