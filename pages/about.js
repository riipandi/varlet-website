import { useEffect, useState } from 'react'
import Layout from "@components/layout";
import Head from '@components/head'

const Home = () => {
const [release, setRelease] = useState(null);
  useEffect(() => {
    async function getRelease() {
      const res = await fetch('/api/release');
      const newRelease = await res.json();
      setRelease(newRelease);
    }
    getRelease();
  }, []);
  return (
    <Layout>

      <Head title="About - Varlet" />

      <div className="lg:px-0 px-5"></div>

    </Layout>
  )
}

export default Home
