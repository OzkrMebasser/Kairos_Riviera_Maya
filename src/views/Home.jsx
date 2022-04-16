import Navbar from "../components/Navbar";
import Slider from '../components/Slider';





const images = [
  'https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/ace.jpg?alt=media&token=70c03bc2-04ce-4e70-973c-5321f5269ac0',
  'https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/ace2.jpg?alt=media&token=9198024a-1f78-4711-9f4a-41f0eff28abc',
  // 'https://source.unsplash.com/random/1920x960?random=3',
]


function Home() {



  

  return (
    <div>
      <Navbar/>
    
      <main>
      <Slider images={images}/>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
          {/* <div className="px-4 py-6 sm:px-0">
            <Slider images={images}/>
          </div> */}
          {/* <!-- /End replace --> */}
          
        </div>
        <Slider images={images}/>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
          {/* <div className="px-4 py-6 sm:px-0">
            <Slider images={images}/>
          </div> */}
          {/* <!-- /End replace --> */}
          
        </div>
        <Slider images={images}/>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
          {/* <div className="px-4 py-6 sm:px-0">
            <Slider images={images}/>
          </div> */}
          {/* <!-- /End replace --> */}
          
        </div>
        <Slider images={images}/>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
          {/* <div className="px-4 py-6 sm:px-0">
            <Slider images={images}/>
          </div> */}
          {/* <!-- /End replace --> */}
          
        </div>
        
      </main>
    </div>
  );
}

export default Home;
