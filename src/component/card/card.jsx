import { Card, Col, Row } from "antd";
import { Data, DataUser } from "component/data";

const CardH = () => (
  <Row gutter={10}>
    <Col span={8}>
      <Card
        style={{ height: 300 }}
        hoverable={true}
        title="User"
        bordered={false}
      >
        <DataUser />
      </Card>
    </Col>
    <Col span={8}>
      <Card
        style={{ height: 300 }}
        hoverable={true}
        title="Product"
        bordered={false}
      >
        <Data />
      </Card>
    </Col>
    <Col span={8}>
      <Card
        style={{ height: 300 }}
        hoverable={true}
        title="Orders"
        bordered={false}
      >
        <Data />
      </Card>
    </Col>
  </Row>
);
export default CardH;
