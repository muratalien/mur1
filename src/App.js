import './App.css';
import Card from './components/Card';

function App() {
  return (
    <main>
      <div className='container'>
        <div className='row'>
           <Card url="https://fastly.picsum.photos/id/307/250/300.jpg?hmac=VGZYqwIOsU2WGaTa-CMPWSfyuqsK1Kiiwzl1RIxAqcA" header="Alex Smith" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
           <Card url="https://fastly.picsum.photos/id/338/250/300.jpg?hmac=bxqinbYXCf_MigDNiTHSj917RaDLf1QaoNQndQxGb5U" header="Melanie Grande" content="Ipsum dolor sit amet consectetur adipiscing elit" />
           <Card url="https://fastly.picsum.photos/id/204/250/300.jpg?hmac=rTF1r9TEQGt6JB36uk3bxkMYOQdGkWK79rQNxHR4M_w" header="Jane Anderson" content="Nisl condimentum id venenatis a condimentum vitae" />
           <Card url="https://fastly.picsum.photos/id/933/250/300.jpg?hmac=bpppN6WPjn1VvdRMR4Z4_5ra2mrZBJLab5l9FOFBmMM" header="John Martinez" content="Odio facilisis mauris sit amet massa vitae tortor" />
        </div>
      </div>

    </main>
  );
}

export default App;
