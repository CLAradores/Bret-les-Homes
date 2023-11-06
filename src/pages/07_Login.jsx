import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login text-4xl font-semibold items-center">
        <h2 className="max-w-6xl mx-auto flex justify-start  py-20">LOG IN</h2>
      </div>
      <div className="flex flex-col justify-start my-10 max-w-6xl mx-auto">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            LOG IN
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to login.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button className="mt-6" fullWidth>
              log in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Doesn't have an account?{' '}
              <span
                href="#"
                className="font-medium text-gray-900"
                onClick={() => navigate('properties/signup')}
              >
                Sign Up
              </span>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};
