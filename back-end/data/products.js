const products = [
  {
    name: 'Bạc sỉu',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=8e8bda55-99b6-411e-af38-5d3e4e984dea&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Một thức uống sử dụng sự pha trộn giữa Cafe, sữa tươi và sữa đặc 😘😘, mang lại sự hòa quyện nhẹ nhàng thơm mùi cafe 💖',
    brand: '99Coffe',
    category: 'cafe',
    price: 30000,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12
  },
  {
    name: 'Cà phê finzy',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=27eaf652-0753-467b-9e5e-ebdfb0ba75a5&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Cà phê kết hợp americano , sữa lắc . Hương vị đậm đà 💖💖💖💖',
    brand: '99Coffe',
    category: 'cafe',
    price: 35000,
    countInStock: 7,
    rating: 4.0,
    numReviews: 9
  },
  {
    name: 'Cà phê đen ',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=891c4fa3-a59e-46b2-a792-a7c058eb7f47&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Luôn là một đồ uống lựa chọn đầu tiên 👮‍♀️🤴👳‍♀️ của người ưa tính basic của một thức uống ',
    brand: '99Coffe',
    category: 'cafe',
    price: 22000,
    countInStock: 7,
    rating: 4.0,
    numReviews: 10
  },
  {
    name: 'Cà phê nâu ',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=f983c50f-ed5f-4d91-99be-e9ae4bd6a4a6&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Hương vị béo ngậy của sữa, tinh tế của cafe. Ya đáng để chúng ta chill cả buổi 📅📅📅',
    brand: '99Coffe',
    category: 'cafe',
    price: 22000,
    countInStock: 7,
    rating: 4.0,
    numReviews: 10
  },
  {
    name: 'Trà thạch đào sữa',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=02dac97e-657c-40ef-8274-414d1a04b723&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Món này đang là Hot thời gian gầy đây nha 🍹🍹, đến Dah để trải nghiệm ngay nào',
    brand: '99Coffe',
    category: 'tea',
    price: 35000,
    countInStock: 5,
    rating: 3,
    numReviews: 12
  },
  {
    name: 'Caramel Corn Brew',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=9863f040-a7ba-4146-b935-cc811f2999a7&ImageType=0&W=240&H=180&IsFit=true',
    description:
      '🍺🍺🍹🍹 Trà lên men, bạn đã nghe bao giờ chưa. Chưa thì thử ngay đi ngại chi nhỉ ',
    brand: '99Coffe',
    category: 'tea',
    price: 35000,
    countInStock: 11,
    rating: 5,
    numReviews: 12
  },
  {
    name: 'Trà đào cam xả',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=c60c43db-e528-4c18-b3a7-60c998cb2df2&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Trà đào cam xả, 👨‍🎨👨‍💼👨‍🏫 chắc bạn nghe nhiều và cũng thử nhiều nơi rồi ha. Nhưng tin mình đi, Dah đặc biệt lắm',
    brand: '99Coffe',
    category: 'tea',
    price: 35000,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10
  },
  {
    name: 'Trà cam quế',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=ab033c4c-0983-4f91-a795-531bc42f74bc&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Cuối cùng cũng có thức uống nóng cho bạn nào cần rồi ha 🧉🧉🧉. Rất thơm và ngon',
    brand: '99Coffe',
    category: 'tea',
    price: 30000,
    countInStock: 5,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Trà nha đam lá nếp',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=b70a025f-8d5a-44d5-8f58-44103eb94533&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Nhìn màu xanh của cốc nước có làm bạn cảm thấy mùa hè bớt nóng nực chưa ạ hi hi 🥶🥶🥶🥶',
    brand: '99Coffe',
    category: 'tea',
    price: 35000,
    countInStock: 12,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Trà táo quế caramel',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=a7d39b15-af6f-4735-b85e-72b8f3fc0b4d&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Hương thơm của trà và quế , kết hợp với vị tươi của táo, nhớ kèm thêm tình cảm của bạn vào nha. Ngon lắm đó',
    brand: '99Coffe',
    category: 'tea',
    price: 30000,
    countInStock: 9,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Bạn sỉu lá nếp',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=65e85dae-a1e4-4d1d-96a0-a34137a02aff&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: '99Coffe',
    category: 'cafe',
    price: 30000,
    countInStock: 10,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Dưa hấu.Dưa chuột',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=3d30d4c6-332d-4e4f-97a1-cd6bf93819fe&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Fan của dưa hấu 🍉🍉🥒🥒 đâu rồi . Cho tôi thấy cánh tay của ban được không ạ',
    brand: '99Coffe',
    category: 'fruit',
    price: 30000,
    countInStock: 30,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Cam.Chanh.Dưa chuột ',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=3d30d4c6-332d-4e4f-97a1-cd6bf93819fe&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Các bạn nghe tên 🥒🥒🍊🍊🍋🍋 , thấy sự kết hợp này có lạ không ạ . Chill , dùng từ chill để mô tả nha :3',
    brand: '99Coffe',
    category: 'fruit',
    price: 35000,
    countInStock: 0,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Cam.Táo.Caramel ',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=4d15b71b-f7b7-4ecd-809a-b0ee3e10d0e8&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Vị của nước ép táo, 🍊🍊🍎🍎cam cùng hương thơm nhẹ nhà của siro caramel sẽ đem lại cho bạn cảm giác thú vị',
    brand: '99Coffe',
    category: 'tea',
    price: 30000,
    countInStock: 30,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Hướng dương vị dừa (Gói)',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=29e26810-4f98-449c-9258-ec107d3744c0&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Món ăn vặt không thể thiếu khi đi cafe cùng bạn bè đúng không nào , tách tách vui tai cho cuộc nói chuyện thêm hấp dẫn 🥨🥐🥯',
    brand: '99Coffe',
    category: 'snack',
    price: 15000,
    countInStock: 15,
    rating: 4,
    numReviews: 6
  },
  {
    name: 'Khô bò (phần)',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=8f154780-4ec6-45c7-b5d8-13903452d514&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Thơm mùi bò lắm nha, đồ nhắm đồ nhắm cùng nước của Dah nào mọi người ơi',
    brand: '99Coffe',
    category: 'snack',
    price: 30000,
    countInStock: 7,
    rating: 4,
    numReviews: 6
  },
  {
    name: 'Khô gà lá chanh (phần)',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=ff749ced-dd48-4329-8821-6a7d99a267c1&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Thơm mùi bò lắm nha, đồ nhắm đồ nhắm cùng nước của Dah nào mọi người ơi',
    brand: '99Coffe',
    category: 'snack',
    price: 30000,
    countInStock: 12,
    rating: 3,
    numReviews: 8
  },
  {
    name: 'Bánh Cookie (phần)',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=6970d8b0-3b6d-4ada-a66f-40ea2258b5c7&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Cookie thơm mùi bánh , kết hợp với trà ~, thú vị lắm nha 🍪🍪🍪🍪',
    brand: '99Coffe',
    category: 'cake',
    price: 25000,
    countInStock: 18,
    rating: 3,
    numReviews: 8
  },
  {
    name: 'Bánh Mousse (phần)',
    image: 'https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=1&FileResource=fbe26bf3-8fd3-4a8f-9d73-f1d0b50f374a&ImageType=0&W=240&H=180&IsFit=true',
    description:
      'Mousse là một loại bánh có sự kết hợp cửa rượu và cafe, hương vị rất đáng để thử 🍰🍰🍰',
    brand: '99Coffe',
    category: 'cake',
    price: 30000,
    countInStock: 21,
    rating: 4,
    numReviews: 20
  }
];

export default products;
