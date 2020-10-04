import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { UsercardWrapper, UserCard } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const Users = () => {
  const { searchData, users } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      users: state.users,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    current: 0,
    pageSize: 0,
    page: 0,
  });

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onChange = page => {
    setState({ ...state, page });
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Users Card"
          subTitle={
            <>
              <span className="title-counter">274 Users </span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Search by Name"
                width="100%"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" type="primary" key="1">
              <Link to="/admin/pages/add-user/info">
                <FeatherIcon icon="plus" size={14} /> Add New User
              </Link>
            </Button>,
          ]}
        />
      </CardToolbox>
      <Main>
        <UsercardWrapper>
          <Row gutter={25}>
            {users.map(user => {
              const { id, name, designation, img } = user;
              return (
                <Col key={id} xxl={6} xl={8} sm={12} xs={24}>
                  <UserCard>
                    <div className="card user-card">
                      <Cards headless>
                        <figure>
                          <img src={require(`../../${img}`)} alt="" />
                        </figure>
                        <figcaption>
                          <div className="card__content">
                            <Heading className="card__name" as="h6">
                              <Link to="#">{name}</Link>
                            </Heading>
                            <p className="card__designation">{designation}</p>
                          </div>

                          <div className="card__actions">
                            <Button size="default" type="white">
                              <FeatherIcon icon="mail" size={14} />
                              Message
                            </Button>
                            <Button size="default" type="white">
                              <FeatherIcon icon="user-plus" size={14} />
                              Following
                            </Button>
                          </div>
                          <div className="card__info">
                            <Row gutter={15}>
                              <Col xs={8}>
                                <div className="info-single">
                                  <Heading className="info-single__title" as="h2">
                                    $72,572
                                  </Heading>
                                  <p>Total Revenue</p>
                                </div>
                              </Col>
                              <Col xs={8}>
                                <div className="info-single">
                                  <Heading className="info-single__title" as="h2">
                                    3,257
                                  </Heading>
                                  <p>Orders</p>
                                </div>
                              </Col>
                              <Col xs={8}>
                                <div className="info-single">
                                  <Heading className="info-single__title" as="h2">
                                    74
                                  </Heading>
                                  <p>Products</p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </figcaption>
                      </Cards>
                    </div>
                  </UserCard>
                </Col>
              );
            })}
            <Col xs={24}>
              <div className="user-card-pagination">
                <Pagination
                  onChange={onChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  defaultCurrent={6}
                  total={500}
                />
              </div>
            </Col>
          </Row>
        </UsercardWrapper>
      </Main>
    </>
  );
};

export default Users;
