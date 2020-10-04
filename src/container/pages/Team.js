import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { UserCard } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';

const Team = () => {
  const { searchData, team } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      team: state.team,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
  });

  const { notData } = state;
  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const actions = (
    <>
      <Link to="#">
        <FeatherIcon size={14} icon="eye" />
        <span>View</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="edit" />
        <span>Edit</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="trash-2" />
        <span>Delete</span>
      </Link>
    </>
  );

  return (
    <>
      <CardToolbox>
        <PageHeader
          backIcon={false}
          title="Team Members"
          subTitle={
            <>
              <span className="title-counter">274 Users</span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                width="100%"
                placeholder="Search by Name"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" key="1" type="primary">
              <FeatherIcon icon="plus" size={14} /> Add New Member
            </Button>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={25}>
          {team.map(user => {
            const { id, name, designation, img } = user;
            return (
              <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                <UserCard>
                  <div className="card team-card">
                    <Cards headless>
                      <figure>
                        <img src={require(`../../${img}`)} alt="" />
                        <figcaption>
                          <div className="edit">
                            <Dropdown content={actions}>
                              <Link className="card__more_actions" to="#">
                                <FeatherIcon icon="more-horizontal" size={16} />
                              </Link>
                            </Dropdown>
                          </div>
                          <Heading className="card__name" as="h6">
                            <Link to="#">{name}</Link>
                          </Heading>
                          <span className="card__designation">{designation}</span>
                          <div className="card__social">
                            <Link className="btn-icon facebook" to="#">
                              <FontAwesome name="facebook" />
                            </Link>
                            <Link className="btn-icon twitter" to="#">
                              <FontAwesome name="twitter" />
                            </Link>
                            <Link className="btn-icon dribble" to="#">
                              <FontAwesome name="dribbble" />
                            </Link>
                            <Link className="btn-icon instagram" to="#">
                              <FontAwesome name="instagram" />
                            </Link>
                          </div>
                        </figcaption>
                      </figure>
                    </Cards>
                  </div>
                </UserCard>
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
};

export default Team;
