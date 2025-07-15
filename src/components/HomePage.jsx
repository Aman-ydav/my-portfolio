import BackGround1 from '../assets/bg1.png';
import BackGround2 from '../assets/bg2.png';

function HomePage() {
  return (
    <section className="h-auto w-full bg-blue-950" id="home">
      <img className='w-full'  src={BackGround1} alt="" />
      <img className='w-full'  src={BackGround2} alt="" />
      <img className='w-full'  src={BackGround1} alt="" />
    </section>
  );
}

export default HomePage;
