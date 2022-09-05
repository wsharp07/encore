import { Tabs } from 'flowbite-react';
import { NextPage } from 'next';

import Client from '../components/client';

// const AuthShowcase: React.FC = () => {
//   const { data: secretMessage, isLoading } = trpc.useQuery([
//     'auth.getSecretMessage',
//   ]);

//   console.log(secretMessage);

//   const { data: sessionData } = useSession();

//   return (
//     <div>
//       {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
//       {secretMessage && <p>{secretMessage}</p>}
//       <button
//         className="px-4 py-2 border-2 border-blue-500 rounded-md"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   );
// };

const Home: NextPage = () => {
  return (
    <div className="container mt-10 justify-center">
      <Tabs.Group style="underline">
        <Tabs.Item title="Clients">
          <Client />
        </Tabs.Item>
        <Tabs.Item title="Collections">Collection content</Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Home;
