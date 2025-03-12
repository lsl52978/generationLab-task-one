// pages/index.js

import Head from 'next/head';
import Form from '../components/Form';

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Email and Phone Submission Form</title>
          <meta name="description" content="Submit your email and phone number" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex items-center justify-center h-screen">
          <Form />
        </main>
      </div>
  );
}
