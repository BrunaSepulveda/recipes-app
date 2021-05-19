import { connectToDatabase } from '../util/mongodb'
import { useDispatch } from "react-redux";
import { userUpdate } from '../redux/action/user';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home({ isConnected }) {
  const dispatch = useDispatch();
  dispatch(userUpdate({ firstName: 'Foo', lastName: 'Bar' }));

  useEffect(() => {
    const getCategories = async () => {
      const categories = await axios.get('/api/categories')
      console.log(categories)
      return categories;
    };
    getCategories();
  },[]);

  return (
    <div className="container">
      { isConnected ? <p>Connected to DB!</p> : null }
    </div>
  );
};

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
