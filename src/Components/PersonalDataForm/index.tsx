import {
  Form,
  Input,
  Col,
  Row,
  DatePicker,
  Radio,
  Image,
} from 'antd';
import UploadImgEx from 'Image-general/upload_img.jpg';
import './personal-data-form-style.scss';

export default function PersonalDataForm() {
  return (
    <div>
      <Row gutter={30}>
        <Col>
          <Image src={UploadImgEx} width={152} />
        </Col>
        <Col span={15}>
          <Row gutter={22}>
            <Col span={9}>
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="Data de Nasc."
                name=""
                rules={[{ required: true }]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                label="CPF"
                name="cpf"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={22}>
            <Col span={9}>
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'Entrada inválida',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item
                name="sexo"
                label="Sexo"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="masculino">Feminino</Radio>
                  <Radio value="feminino">Masculino</Radio>
                  <Radio value="outro">Outro</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
