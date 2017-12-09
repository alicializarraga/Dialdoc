import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap';
import Col from 'react-bootstrap';
import Nav from 'react-bootstrap';
import NavItem from 'react-bootstrap';
import Tab from 'react-bootstrap';

const tabsInstance = (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={4}>
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey="first">
            Tab 1
          </NavItem>
          <NavItem eventKey="second">
            Tab 2
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            Tab 1 content
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            Tab 2 content
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

ReactDOM.render(<tabsInstance />, document.getElementById('root'));
