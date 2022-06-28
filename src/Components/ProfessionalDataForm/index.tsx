import { useState } from 'react';
import {
  Form,
  Row,
  Input,
  Radio,
  Space,
  Typography,
} from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

export default function ProfessionalDataForm() {
  const [desc, setDesc] = useState(true);
  const handleDesc = (e:any) => {
    setDesc(e.target.value === 4 ? !desc : true);
  };
  return (
    <>
      <Space direction="vertical" size="large">
        <Space size="large" direction="vertical">
          <Row>
            <Text strong>
              1. A respeito do avaliador a ser cadastrado, selecione a opção que mais se adequa:*
            </Text>
          </Row>
          <Form.Item
            name="questao1"
            rules={[{ required: true }]}
          >
            <Radio.Group
              onChange={handleDesc}
            >
              <Space direction="vertical" size="middle">
                <Radio value={1}>Possui acuidade auditiva normal</Radio>
                <Radio value={2}>
                  Tem perda auditiva mas faz uso de aparelho de amplificação sonora
                </Radio>
                <Radio value={3}>Faz uso de implante coclear</Radio>
                <Radio value={4}>Outro</Radio>
                <TextArea disabled={desc} placeholder="Descreva" />
              </Space>
            </Radio.Group>
          </Form.Item>
        </Space>
        <Space size="large" direction="vertical">
          <Row>
            <Text strong>
              2. A respeito da experiência profissional do avaliador a ser cadastrado,
              selecione a opção que melhor o descreve:*
            </Text>
          </Row>
          <Form.Item
            name="questao2"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Space direction="vertical" size="middle">
                <Radio value={1}>
                  Nunca conversou ou ouviu gravações de uma pessoa com hipernasalidade
                  ou hiponasalidade.
                </Radio>
                <Radio value={2}>
                  Já conversou ou ouviu gravações de uma pessoa com hipernasalidade
                  ou hiponasalidade de fala, porém informalmente.
                </Radio>
                <Radio value={3}>
                  Ouviu algumas gravações de pessoas com hipernasalidade ou hiponasalidade
                  de fala, durante a graduação em Fonoaudiologia ou durante algum curso
                  ou palestra (contato breve com hipernasalidade ou hiponasalidade de fala).
                </Radio>
                <Radio value={4}>
                  Ouviu gravações de pessoas com hipernasalidade ou hiponasalidade de
                  fala várias vezes
                  (contato moderado/intermitente com hipernasalidade ou hiponasalidade de fala).
                </Radio>
                <Radio value={5}>
                  Ouviu gravações de pessoas com hipernasalidade ou hiponasalidade
                  de fala muitas vezes
                  (contato regular/constante com hipernasalidade ou hiponasalidade de fala).
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Space>
    </>
  );
}
