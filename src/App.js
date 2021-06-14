import React from 'react';
import PropTypes from 'prop-types';
/*
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

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

// 이름은 필수로 propTypes로 정해야 함
Food.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number,  // isRequired가 없으면 undefined일 경우 에러가 나지 않음(있어도 되고 없어도)
}

// 함수로 넣고 싶을 때
function renderFood(dish) {
  return (
    <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating}
    />
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food 
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
        )}
    </div>
  );
}
*/

// life cycle method : react가 component를 생성하고 없애는 방법
// Mounting, Updating, Unmounting(Component가 죽음)
// Mounting
//  1. constructor()
//  2. render()

/*
class App extends React.Component {
  // Component의 데이터를 넣음
  // state는 object
  // 변수를 state 안에 작성
  
  constructor(props) {
    super(props);
    console.log("Constructor Hello");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count : current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  }

  componentDidMount() {
    console.log("Component rendered");
  }

  // Component Update --> render --> componentDidUpdate
  componentDidUpdate() {
    console.log("I just updated");
  }

  // Component가 떠날 때 호출
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  // 자동 실행
  render() {
    console.log("I'm a rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}
*/

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  componentDidMount() {

  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}





export default App;
 