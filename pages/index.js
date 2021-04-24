import { userUpdate } from '../redux/action/user';
import { storeWrapper } from '../redux/store';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ isConnected }) {
  return (
    <div className="container">
    </div>
  );
};

export const getServerSideProps = storeWrapper.getServerSideProps(async({store}) => {
  const { client } = await connectToDatabase();
  const isConnected = await client.isConnected();

  const user = userUpdate({firstName: "Marconha", lastName: "Juzefa"})
  console.log(user)
  store.dispatch(user);

  return {
    props: { isConnected },
  }
})

/*export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
*/