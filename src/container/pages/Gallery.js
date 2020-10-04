import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { GalleryNav, GalleryCard } from './style';
import Heading from '../../components/heading/heading';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Gallery = () => {
  const dispatch = useDispatch();
  const { gallery, isLoading } = useSelector(state => {
    return {
      gallery: state.gallery.data,
      isLoading: state.gallery.loading,
    };
  });

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = value => {
    dispatch(galleryFilter('category', value));
    setState({
      ...state,
      activeClass: value,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Gallery"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="#"
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('webDesign')}
                    to="#"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('uiDesign')}
                    to="#"
                  >
                    UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'wireframe' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('wireframe')}
                    to="#"
                  >
                    Wireframe
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'Presentation' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('Presentation')}
                    to="#"
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </Col>
          {isLoading ? (
            <Col xs={24}>
              <div className="spin">
                <Spin />
              </div>
            </Col>
          ) : (
            gallery.map(item => {
              const { id, name, img, category } = item;
              return (
                <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                  <GalleryCard style={{ marginBottom: '25px' }}>
                    <figure>
                      <img style={{ width: '100%' }} src={require(`../../${img}`)} alt="" />
                      <figcaption>
                        <div className="gallery-single-content">
                          <Heading className="gallery-single-title" as="h4">
                            {name}
                          </Heading>
                          <p>{category}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </GalleryCard>
                </Col>
              );
            })
          )}
        </Row>
      </Main>
    </>
  );
};

export default Gallery;
