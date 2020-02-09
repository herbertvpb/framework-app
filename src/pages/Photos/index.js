/* eslint-disable react/state-in-constructor */
import React, { Component, useState, useCallback } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { PhotoList } from './styles';
import { Menu } from '../../components/Menu';

export default class Photos extends Component {
  state = {
    currentImage: 0,
    viewerIsOpen: false,
    albumTitle: '',
    photoList: [],
  };

  componentDidMount() {
    const { album } = this.props.location.state;
    this.setState({
      albumTitle: album.title,
      photoList: album.photoList,
    });
  }

  openLightbox = (event, currentIndex) => {
    this.setState({ currentImage: currentIndex.index, viewerIsOpen: true });
  };

  closeLightbox = () => {
    this.setState({ currentImage: 0, viewerIsOpen: false });
  };

  render() {
    const {
 photoList, viewerIsOpen, currentImage, albumTitle
} = this.state;

    return (
      <div className="container">
        <div className="content">
          <Menu />
          <PhotoList>
            <div className="header">
              <h1>{albumTitle}</h1>
              <a href="/albuns">Voltar</a>
            </div>

            <Gallery
              photos={photoList}
              onClick={(e, currentIndex) => this.openLightbox(e, currentIndex)}
            />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={() => this.closeLightbox()}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photoList.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </PhotoList>
        </div>
      </div>
    );
  }
}
