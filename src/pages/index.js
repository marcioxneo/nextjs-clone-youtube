import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../component/Layout';

export default function Home() {
  return (
    <Layout title="YouTube">
      <div>
        Clone youtube com Next.js e Material+UI
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </Layout>
  );
}
