import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MusicVideo from '@material-ui/icons/MusicVideo';
import SportsSoccer from '@material-ui/icons/SportsSoccer';
import SportsEsports from '@material-ui/icons/SportsEsports';
import Movie from '@material-ui/icons/Movie';
import ViewStream from '@material-ui/icons/ViewStream';
import Receipt from '@material-ui/icons/Receipt';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import YouTube from '@material-ui/icons/YouTube';
import Theaters from '@material-ui/icons/Theaters';
import Settings from '@material-ui/icons/Settings';
import Flag from '@material-ui/icons/Flag';
import Help from '@material-ui/icons/Help';
import Feedback from '@material-ui/icons/Feedback';
import AddCircle from '@material-ui/icons/AddCircle';
import { useSession, signIn } from 'next-auth/client';

// const logo = 'https://www.youtube.com/s/desktop/a386e432/img/favicon.ico';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Inicio', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
  {
    id: 3,
    label: 'Inscrições',
    path: 'subscriptions',
    icon: Subscriptions,
  },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', path: 'library', icon: VideoLibrary },
  { id: 2, label: 'Histórico', path: 'history', icon: History },
];

const tertiaryMenu = [
  { id: 1, label: 'Música', path: 'music', icon: MusicVideo },
  { id: 2, label: 'Esportes', path: 'sports', icon: SportsSoccer },
  { id: 3, label: 'Jogos', path: 'games', icon: SportsEsports },
  { id: 4, label: 'Filmes', path: 'movies', icon: Movie },
  { id: 5, label: 'Notícias', path: 'news', icon: Receipt },
  { id: 6, label: 'Ao Vivo', path: 'live', icon: ViewStream },
  { id: 7, label: 'Aprender', path: 'learn', icon: EmojiObjects },
  { id: 8, label: 'Vídeos do Momento', path: 'spotligth', icon: YouTube },
  { id: 9, label: 'Vídeo em 360°', path: '360', icon: Theaters },
];

const maisCanais = [
  { id: 1, label: 'Procurar canais', path: 'more', icon: AddCircle },
];

const quatermasterMenu = [
  { id: 1, label: 'Configuração', path: 'config', icon: Settings },
  { id: 2, label: 'Histórico de Denúncias', path: 'denuncias', icon: Flag },
  { id: 3, label: 'Ajuda', path: 'help', icon: Help },
  { id: 4, label: 'Enviar feedback', path: 'feedback', icon: Feedback },
];

function NavBar() {
  const classes = useStyles();
  const router = useRouter();
  const [session] = useSession();
  
  const [subscriptions, setSuscriptions] = useState([
    { is: 1, name: 'Canal 1' },
    { is: 2, name: 'Canal 2' },
    { is: 3, name: 'Canal 3' },
    { is: 4, name: 'Canal 4' },
    { is: 5, name: 'Canal 5' },
    { is: 6, name: 'Canal 6' },
    { is: 7, name: 'Canal 7' },
    { is: 8, name: 'Canal 8' },
  ]);

  const isSelected = (item) => router.pathmame === item.path;

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box>
        {!session ? (
          <Box mx={4} my={2}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
                onClick={() => signIn('google')}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
        ) : (
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                INSCRIÇÕES
              </ListSubheader>
            }
          >
            {subscriptions.map((item) => (
              <ListItem
                key={item.id}
                button
                classes={{ root: classes.listItem }}
                selected={isSelected(item)}
              >
                <ListItemIcon>
                  <Avatar className={classes.avatar}>H</Avatar>
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={item.name}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="subtitle2">
          <b>O MELHOR DO YOUTUBE</b>
        </Typography>
      </Box>
      <List>
        {tertiaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {maisCanais.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="subtitle2">
          <b>MAIS DO YOUTUBE</b>
        </Typography>
      </Box>
      <List>
        {quatermasterMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="caption text">Sobre Imprensa</Typography>
        <Typography variant="body2">Direitos autorais</Typography>
        <Typography variant="body2">Entre em contato</Typography>
        <Typography variant="body2">Criadores de conteúdo</Typography>
        <Typography variant="body2">Publicidade Desenvolvedores</Typography>
        <br />
        <Typography variant="body2">Termos Privacidade</Typography>
        <Typography variant="body2">Política e segurança</Typography>
        <Typography variant="body2">Como funciona o YouTube</Typography>
        <Typography variant="caption text">
          Testar os nossos recursos
        </Typography>
        <br />
        <br />
        <Typography variant="body2">
          <b>&copy; 2021 Google LLC</b>
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
