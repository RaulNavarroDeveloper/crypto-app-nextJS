import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import Layout from '@/components/Layout.jsx'
import MainTable from '@/components/MainTable.jsx'
import { data } from 'autoprefixer'


export default function Home({coinsWithTickers}) {
  return (
    <Layout>
      <Head>
        <title>CoinMarketDev</title>
      </Head>
        <MainTable coinsWithTickers={coinsWithTickers}></MainTable>
    </Layout>
  )
}

export async function getStaticProps () {
  try {
    const resCoinsData = await fetch('http://localhost:3000/api/coins');
    const coinsWithTickers = await resCoinsData.json();
      return {
      props: {
        coinsWithTickers
      }
    }
  }
  catch (err) {
    console.log(err);
    throw err;
  }

}