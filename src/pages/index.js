import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from 'src/component/Layout';
import VideoCard from 'src/component/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #01]',
      authorId: 1,
      authorName: 'Lucas Mhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title:
        'NEXT.JS: ENTENDENDO A RENDERIZAÇÃO REACT NO LADO SERVIDOR [PARTE #02]',
      authorId: 1,
      authorName: 'Lucas Mhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next02.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'NEXT.JS: ROTAS ESTÁTISTICAS E DINÂMICAS [PARTE #03]',
      authorId: 1,
      authorName: 'Lucas Mhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'NEXT.JS: ROTAS ESTÁTISTICAS E DINÂMICAS [PARTE #03]',
      authorId: 1,
      authorName: 'Lucas Mhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
