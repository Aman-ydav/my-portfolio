import BackGround1 from "../assets/bg1.png";
import BackGround2 from "../assets/bg2.png";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#0e0e21] text-white overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[300px] bg-purple-400 opacity-50 blur-[150px] rounded-full z-0 pointer-events-none" />
        {/* <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[200px] bg-purple-400 opacity-50 blur-[150px] rounded-full z-0 pointer-events-none" /> */}
        <div className="absolute inset-0 bg-grid-pattern mask-gradient-bottom z-[0] pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center pt-20 px-4">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforming Concepts into Seamless User Experiences
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Hi, I'm Aman, a Software Developer based in India.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
            Show my work →
          </button>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-[#0e0e21] text-white">
        <div className="absolute inset-0 z-0 "></div>
        <div className="absolute inset-0 mask-gradient-bottom z-[0] pointer-events-none" />
      </section>
    </>
  );
}

export default HomePage;
