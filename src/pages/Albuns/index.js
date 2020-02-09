/* eslint-disable no-restricted-syntax */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { AlbumList } from './styles';
import { Menu } from '../../components/Menu';
import { Loader } from '../../components/Loader';
import gallery from '../../assets/img/gallery.svg';

import api from '../../services/api';

export default class Albuns extends Component {
  state = {
    albumList: [],
    loading: true,
  };

  async componentDidMount() {
    const [albums, photos] = await Promise.all([
      api.get('/albums/'),
      api.get('/photos/'),
    ]);

    const albumList = [];

    for (const album of albums.data) {
      // Obtendo todas as fotos do álbum
      const photoList = photos.data.filter((value) => value.albumId === album.id);

      // Adaptando estrutura do array para a galeria de fotos
      const photosArranged = [];
      for (const photo of photoList) {
        photosArranged.push({
          src: photo.url,
          width: 4,
          height: 4,
        });
      }

      // Cria nova lista de álbuns com todos os dados necessários
      albumList.push({
        id: album.id,
        title: album.title,
        thumbnailUrl: photoList[0].thumbnailUrl,
        photoList: photosArranged,
      });
    }

    this.setState({ albumList, loading: false });
  }

  render() {
    const { albumList, loading } = this.state;

    return (
      <div className="container">
        <div className="content">
          <Menu />
          {loading ? (
            <Loader />
          ) : (
            <AlbumList>
              {albumList.map((album) => (
                <div className="album">
                  <Link
                    to={{
                      pathname: '/photos',
                      state: {
                        album,
                      },
                    }}
                  >
                    <div className="image">
                      <img
                        className="photo"
                        src={album.thumbnailUrl}
                        alt="Álbum"
                      />
                      <img
                        className="icon"
                        src={gallery}
                        width="45px"
                        alt="Álbum"
                      />
                    </div>
                  </Link>
                  <h1>{album.title}</h1>
                </div>
              ))}
            </AlbumList>
          )}
        </div>
      </div>
    );
  }
}
