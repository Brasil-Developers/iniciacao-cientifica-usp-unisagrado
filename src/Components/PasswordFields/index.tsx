import {
  Row,
  Col,
  Form,
  Input,
} from 'antd';

const LoginPass = (props:any) => {
  const { size, gutter } = props;
  return (
    <Row gutter={gutter}>
      <Col span={size}>
        <Form.Item
          label="Senha"
          name="senha"
          rules={[{ required: false, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Crie uma senha (4 a 16 dígitos)" />
        </Form.Item>
      </Col>
      <Col span={size}>
        <Form.Item
          label="Senha Confirmação"
          dependencies={['password']}
          name="senha_confirmacao"
          rules={[{ required: false, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Digite novamente a senha" />
        </Form.Item>
      </Col>
    </Row>
  );
};

const ModifyPass = (props:any) => {
  const { size, gutter } = props;
  return (
    <Row gutter={gutter}>
      <Col span={size}>
        <Form.Item
          label="Senha Atual"
          name="now_password"
          rules={[{ required: false, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Digite a senha atual" />
        </Form.Item>
      </Col>
      <Col span={size}>
        <Form.Item
          label="Nova Senha"
          dependencies={['now_password']}
          name="new_password"
          rules={[{ required: false, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Crie uma senha (4 a 16 dígitos)" />
        </Form.Item>
      </Col>
      <Col span={size}>
        <Form.Item
          label="Nova Senha Confirmação"
          dependencies={['now_password', 'new_password']}
          name="confirm_new_password"
          rules={[{ required: false, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Digite novamente a senha" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default function PasswordFields(props:any) {
  const { type, size, gutter } = props;
  switch (type) {
    case 'create':
      return (
        <>
          <LoginPass size={size} gutter={gutter} />
        </>
      );
    case 'modify':
      return (
        <>
          <ModifyPass size={size} gutter={gutter} />
        </>
      );
    default:
      break;
  }
}
