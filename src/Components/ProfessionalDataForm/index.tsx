import {
  Form,
  Select,
  Row,
  Col,
  Input,
  Divider,
  Radio,
  Space,
  Typography,
} from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

export default function ProfessionalDataForm() {
  return (
    <>
      <Row gutter={20}>
        <Col span={5}>
          <Form.Item
            label="Área de Atuação"
            name="area_atuacao"
            rules={[{ required: true }]}
          >
            <Select placeholder="Selecionar">
              <Option value="teste">Teste</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item
            label="Qual área?"
            name="area"
            rules={[{ required: true, type: 'string' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Space direction="vertical" size="large">
        <Space size="large" direction="vertical">
          <Row>
            <Text strong>
              1. A respeito do avaliador a ser cadastrado, selecione a opção que mais se adequa:*
            </Text>
          </Row>
          <Radio.Group>
            <Space direction="vertical" size="middle">
              <Radio value="1">Possui acuidade auditiva normal</Radio>
              <Radio value="2">Tem perda auditiva mas faz uso de aparelho de amplificação sonora</Radio>
              <Radio value="3">Faz uso de implante coclear</Radio>
              <Radio value="outro">Outro</Radio>
              <TextArea />
            </Space>
          </Radio.Group>
        </Space>
        <Space size="large" direction="vertical">
          <Row>
            <Text strong>
              2. A respeito da experiência profissional do avaliador a ser cadastrado,
              selecione a opção que melhor o descreve:*
            </Text>
          </Row>
          <Radio.Group>
            <Space direction="vertical" size="middle">
              <Radio value="1">
                Nunca conversou ou ouviu gravações de uma pessoa com hipernasalidade
                ou hiponasalidade.
              </Radio>
              <Radio value="2">
                Já conversou ou ouviu gravações de uma pessoa com hipernasalidade
                ou hiponasalidade de fala, porém informalmente.
              </Radio>
              <Radio value="3">
                Ouviu algumas gravações de pessoas com hipernasalidade ou hiponasalidade
                de fala, durante a graduação em Fonoaudiologia ou durante algum curso
                ou palestra (contato breve com hipernasalidade ou hiponasalidade de fala).
              </Radio>
              <Radio value="outro">
                Ouviu gravações de pessoas com hipernasalidade ou hiponasalidade de
                fala várias vezes
                (contato moderado/intermitente com hipernasalidade ou hiponasalidade de fala).
              </Radio>
              <Radio value="outro">
                Ouviu gravações de pessoas com hipernasalidade ou hiponasalidade
                de fala muitas vezes
                (contato regular/constante com hipernasalidade ou hiponasalidade de fala).
              </Radio>
            </Space>
          </Radio.Group>
        </Space>
      </Space>
    </>
  );
}
