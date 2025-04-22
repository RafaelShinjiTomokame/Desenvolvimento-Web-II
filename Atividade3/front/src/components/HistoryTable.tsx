import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
`;

const Th = styled.th`
  background-color:rgb(0, 0, 0);
  color: white;
  padding: 0.5rem;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: center;
`;

interface HistoryTableProps {
  history: number[][];
}

export const HistoryTable = ({ history }: HistoryTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Números</Th>
        </tr>
      </thead>
      <tbody>
        {history.map((bet, index) => (
          <tr key={index}>
            <Td>{index + 1}</Td>
            <Td>
              {bet.map((num, i) => (
                <span key={i} style={{ margin: '0 0.2rem' }}>
                  {num}
                </span>
              ))}
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};