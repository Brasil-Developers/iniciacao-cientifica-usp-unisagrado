import { useState } from 'react';
import {
  Row,
  Col,
  Select,
  Form,
  Input,
} from 'antd';

const { Option } = Select;

export default function OccupationArea(props:any) {
  const { type } = props;
  const [area, setArea] = useState(true);
  const handleArea = (vl:any) => setArea(vl === 'outra_area' ? !area : true);
  return (
    <Row gutter={20} className="form_space">
      <Col span={5}>
        <Form.Item
          label="Área de Atuação"
          name="area_atuacao"
          rules={[{ required: true }]}
        >
          <Select placeholder="Selecionar" onChange={handleArea}>
            <Option value="fonoaudiologo">Fonoaudiólogo(a)</Option>
            <Option value="graduando">Graduando de Fonoaudiologia</Option>
            <Option value="outra_area">Outra área</Option>
          </Select>
        </Form.Item>
      </Col>
      {type === 'area' ? (
        <Col span={5}>
          <Form.Item
            label="Qual área?"
            name="area"
            rules={[{ required: true, type: 'string' }]}
          >
            <Input disabled={area} />
          </Form.Item>
        </Col>
      )
        : (
          <Col span={3}>
            <Form.Item
              label="Número CRFa"
              name="area"
              rules={[{ required: true, type: 'string' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        )}
    </Row>
  );
}
