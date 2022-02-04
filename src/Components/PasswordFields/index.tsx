import {
  Row,
  Col,
  Form,
  Input,
} from 'antd';

export default function PasswordFields(props:any) {
  const { size, gutter } = props;
  return (
    <Row gutter={gutter}>
      <Col span={size}>
        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Crie uma senha (4 a 16 dígitos)" />
        </Form.Item>
      </Col>
      <Col span={size}>
        <Form.Item
          label="Senha Confirmação"
          dependencies={['password']}
          name="confirm"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Digite novamente a senha" />
        </Form.Item>
      </Col>
    </Row>
  );
}
