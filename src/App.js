import React, {Component} from 'react';
import Gallery from 'react-photo-gallery'
import './App.css';
var images=[
  {
    src: 'https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 1,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3623309/pexels-photo-3623309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    width: 0.8,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 3,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 0.7,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 3,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3046404/pexels-photo-3046404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    width: 1,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 3,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    width: 1,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 1,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 1,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 1,
    height: 1
  },
  {
    src: 'https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    width: 1,
    height: 1
  },

]
function App() {
  return (
    <ScrollExample/>
  );
}
class ScrollExample extends Component {
  render() {
    return (
     <div>
        <section className="Landing">
            <h1  style={{margin:0}}>LANDING</h1>
        </section>
        <section id="portfolio" className="portfolio">
            <div style={{height:"50vh"}}>
            <h1  style={{margin:0}}>PORTFOLIO</h1>
            </div>
        </section>
        <section className="imgGallery">
            <Gallery photos={images} direction={"column"}/>
        </section>
        <section className="contact">

        </section>
     </div>
    );
  }
}

export default App;
