// import HeroImg from '../assets/her01.png';
import { Filter } from '../components';

export const HeroSection = () => {
  return (
    <div className="hero  ">
      <div
        className="text-white flex flex-col justify-center text-center"
        style={{ height: '70vh' }}
      >
        <h1 className="text-6xl font-bold max-auto">
          Lorem ipsum dolor sit amet.
        </h1>
        <h3 className="text-xl mx-auto" style={{ width: '40rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          voluptate officiis veritatis doloribus! Asperiores magnam, dolorem
          ducimus fugit in deleniti.
        </h3>
        <Filter />
      </div>
    </div>
  );
};
