import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';

const AuthShowcase: React.FC = () => {
  const { data: secretMessage, isLoading } = trpc.useQuery([
    'auth.getSecretMessage',
  ]);

  console.log(secretMessage);

  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className="px-4 py-2 border-2 border-blue-500 rounded-md"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);
  console.log(hello);

  return (
    <div>
      <h1 className="ml-10 my-10 text-4xl font-bold underline flex justify-center items-center">
        Encore Admin Portal
      </h1>
      <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div>

      <div className="pt-6 flex justify-center items-center w-full">
        <AuthShowcase />
      </div>

      {/* <div className="grid grid-cols-6 place-content-center">
        <form className="flex flex-col gap-4 ml-10">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder=""
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div> */}
    </div>
  );
};

export default Home;
