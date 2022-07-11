
import { useEffect, useState } from 'react';
import DefaultTable from 'Components/DefaultTable/index';
import { ModelCol3 } from 'Components/DefaultTable/Columns';
import type { PaginationProps, TableProps } from 'antd';
import { Table } from 'antd';
import {
  Avatar,
  Button,
  Typography,
  Space,
  Row,
} from 'antd';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';
import Task from '../../shared/requests/task';
const { Text } = Typography;


interface ITarefa {
  id: string,
  titulo: string,
  prazo_entrega: string,
  descricao: string,
  criado_por: number,
  concluida: number,
  createdAt: string,
  updatedAt: string,
}

const montaLinha = (row: ITarefa) => {
  return {
    key: `${row.id}-tasks-id`,
    titulo:
      <Space>
        {`${row.id} - ${row.titulo}`}
        <Text type="secondary">
          {row.descricao}
        </Text>
      </Space>,
    criado_por:
      <Row justify="center">
        <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
      </Row>,
    master:
      <Row justify="center">
        <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
      </Row>,
    createdAt:
      <Row justify="center">
        <span>{row.createdAt}</span>
      </Row>,
    recording:
      <Row justify="center">
        <span>0 Gravações</span>
      </Row>,
    prazo_entrega:
      <Row justify="center">
        <span>{row.prazo_entrega}</span>
      </Row>,
    edit_button: <Button type="primary">Ver Tarefa</Button>,
  }
}

const Tasks = () => {
  const [totalItems, setTotalItems] = useState(0);

  const [tableColumns, setTableColumns] = useState([] as Array<any>);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderTable, setOrderTable] = useState('');

  const getData = async () => {
    const response = await Task.getAll({
      page: currentPage,
      size: pageSize,
      order: orderTable
    });

    setTotalItems(response.data.totalItems);

    const rows = response.data.items;
    const componenteLinhas: Array<any> = []

    const componenteLinhasConcluidas: Array<any> = []

    const componenteLinhasNaoConcluidas: Array<any> = []

    rows.map((row: ITarefa) => {
      componenteLinhas.push(montaLinha(row as ITarefa))
      if (row.concluida == 1) {
        componenteLinhasConcluidas.push(montaLinha(row as ITarefa))
      } else if (row.concluida == null) {
        componenteLinhasNaoConcluidas.push(montaLinha(row as ITarefa))
      }
      return row;
    });


    const table = [
      {
        key: 1,
        tab: 'Caixa de Entrada',
        col: ModelCol3,
        data: componenteLinhas,
      },
      {
        key: 2,
        tab: 'Concluídas',
        col: ModelCol3,
        data: componenteLinhasConcluidas,
      },
      {
        key: 3,
        tab: 'Não Finalizadas',
        col: ModelCol3,
        data: componenteLinhasNaoConcluidas,
      },
    ];

    setTableColumns(table);

  }

  useEffect(() => {
    getData()
  }, [currentPage, orderTable, pageSize]);


  return (
    <div>
      <DefaultTable
        tableColumns={tableColumns}
        pageSize={pageSize}
        totalItems={totalItems}
        currentPage={currentPage}
        onChange={(pagination: any, filters: any, sorter: any, extra: any) => {
          console.log(sorter);
          if (typeof sorter.order == `undefined`) {
            setOrderTable(``);
          } else {
            setOrderTable(`${sorter.field}&order=${sorter.order}`);
          }

        }}
        onChangePage={(page: number, newPageSize: number) => {
          setPageSize(newPageSize);
          setCurrentPage(pageSize !== newPageSize ? 1 : page);
        }} />
    </div>
  );
}

export default Tasks;
