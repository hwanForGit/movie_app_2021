import React from 'react';

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://www.thinkfood.co.kr/news/photo/202011/89192_115694_99.jpg",
    rating : 5
  },
  {
    id: 2,
    name : "Samgyeopsal",
    image : "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating: 4.3
  },
  {
    id: 3,
    name : "Bibimbap",
    image : "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjky/MDAxNDkzMDIzMjY5MjY5.u5q3w1Cl1wjxJoRzSpczd_VT2rScn_zaDV5LfKVMa6Mg.Tz5B-6i_SYH4yydceeZT6bNwDs-P5srXOE2uCDQ_Disg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 3
  },
];

const Food = ({name, picture}) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const renderFood = (dish) =>  {
  return (
    <Food key={dish.id} name={dish.name} picture={dish.image}/>
  );
}

const App = () => {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
 