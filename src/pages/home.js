import Card from '../component/cards';
import '../styles/cards.css';

function Home(){
  return(
    <div>
      <h1>Welcome to Clothes Store 👕</h1>
      <p>Best clothes for the best price!</p>
      <div className="cards-container">
        <Card title="T-Shirts" names={['Classic White', 'Black Basic', 'Striped']} />
        <Card title="Pants" names={['Jeans', 'Chinos', 'Joggers']} />
        <Card title="Jackets" names={['Leather', 'Denim', 'Hoodie']} />
      </div>
    </div>
  )
}

export default Home;