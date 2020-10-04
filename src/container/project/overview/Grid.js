import React, { useState, useEffect } from 'react';
import { Row, Col, Progress, Pagination, Tag } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { textRefactor } from '../../../components/utilities/utilities';
import { ProjectCard, ProjectPagination } from '../style';

const Grid = () => {
  const project = useSelector(state => state.projects.data);
  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={25}>
      {projects.length ? (
        projects.map(value => {
          const { id, title, status, content, percentage } = value;
          return (
            <Col key={id} xl={8} md={12} xs={24}>
              <ProjectCard>
                <Cards headless>
                  <div className="project-top">
                    <div className="project-title">
                      <h1>
                        <Link to={`/admin/project/projectDetails/${id}`}>{title}</Link>
                        <Tag className={status}>{status}</Tag>
                      </h1>
                      <Dropdown
                        content={
                          <>
                            <Link to="#">Total Income</Link>
                            <Link to="#">Total Expense</Link>
                            <Link to="#">Total Tax</Link>
                            <Link to="#">Net Profit</Link>
                          </>
                        }
                      >
                        <Link to="#">
                          <FeatherIcon icon="more-horizontal" size={18} />
                        </Link>
                      </Dropdown>
                    </div>
                    <p className="project-desc">{textRefactor(content, 13)}</p>
                    <div className="project-timing">
                      <div>
                        <span>Start Date</span>
                        <strong>26 Dec 2019</strong>
                      </div>
                      <div>
                        <span>Deadline</span>
                        <strong>18 Mar 2020</strong>
                      </div>
                    </div>
                    <div className="project-progress">
                      <Progress
                        percent={status === 'complete' ? 100 : percentage}
                        strokeWidth={5}
                        status="primary"
                        className="progress-primary"
                      />
                      <p>12/15 Task Completed</p>
                    </div>
                  </div>
                  <div className="project-bottom">
                    <div className="project-assignees">
                      <p>Assigned To</p>
                      <ul>
                        <li>
                          <img src={require(`../../../static/img/users/1.png`)} alt="" />
                        </li>
                        <li>
                          <img src={require(`../../../static/img/users/2.png`)} alt="" />
                        </li>
                        <li>
                          <img src={require(`../../../static/img/users/3.png`)} alt="" />
                        </li>
                        <li>
                          <img src={require(`../../../static/img/users/4.png`)} alt="" />
                        </li>
                        <li>
                          <img src={require(`../../../static/img/users/5.png`)} alt="" />
                        </li>
                        <li>
                          <img src={require(`../../../static/img/users/6.png`)} alt="" />
                        </li>
                        <li>
                          <img src={require(`../../../static/img/users/7.png`)} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Cards>
              </ProjectCard>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Cards headless>
            <Heading>Data Not Found!</Heading>
          </Cards>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        <ProjectPagination>
          {projects.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
};

export default Grid;
