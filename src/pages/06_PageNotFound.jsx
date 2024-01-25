import { Link } from 'react-router-dom';
import icon404 from '../assets/000.svg';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <div
          className="flex flex-col justify-center items-center text-center"
          style={{ height: '80vh' }}
        >
          <img src={icon404} alt="" />
          <h3 className="mt-10 text-2xl">PAGE NOT FOUND</h3>
          <div
            onClick={() => navigate(-1)}
            type="button"
            className="text-black focus:ring-4 focus:outline-none  font-bold  text-sm px-4 py-2 text-center mr-3 md:mr-0 outline outline-2  outline-offset-2 mt-10"
          >
            Back to Home
          </div>
        </div>
      </main>
    </div>
  );
};
