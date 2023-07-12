import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import Log from '../images/log.png';
import Ore from '../images/ore.png';
import Wheat from '../images/wheat.png';
import { Box, Button, Grid, List } from '@mui/material';

interface Data {
  id: number;
  name: string;
  description: string;
  price: number[];
}

interface ColumnData {
  dataKey: keyof Data;
  label: any;
  numeric?: boolean;
  width: number;
}

type Sample = [string, number, number, number, number];

const sample = [
  createData(1, 'Axe', 'An axe enchanted by unknown powers that lets it become more powerful the more it\'s used.', [100]),
  createData(11, 'Wooden House', 'Create houses made of wood to provide shelter to your villagers.', [200]),
  createData(12, 'Tree Harvesting Techniques', 'Enhances the ability to selectively harvest mature trees, maximizing wood yield while preserving the forest.', [200]),
  createData(13, 'Druidic Blessing', 'Harness the power of nature to increase the rate of wood collection from the forest.', [300]),
];

function createData(
  id: number,
  name: string,
  description: string,
  price: number[],
): Data {
  return { id, name, description, price };
}

const columns: ColumnData[] = [
  {
    width: 120,
    label: 'Upgrade',
    dataKey: 'name',
  },
  {
    width: 200,
    label: 'Description',
    dataKey: 'description',
    numeric: true,
  },
  {
    width: 120,
    label: 'Cost',
    dataKey: 'price',
    numeric: true,
  },
];

// const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   return createData(index, ...randomSelection);
// });

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function Upgrade1Section(props: any) {

  var population = props.population;
  var setPopulation = props.setPopulation;
  var aPop = props.aPop;
  var setAPop = props.setAPop;

  return (
    <Paper style={{ height: 672, width: '100%' }}>
      <List>
        <Button onClick={() => {
          setPopulation(population + 10);
          setAPop(aPop + 10);
        }}>
          Axe
          <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <React.Fragment>
              <Box sx={{border: 1, width: "70px"}}>
                <img src={Log} alt="Air Rune Amount" height="64" width="64"></img>
                200
              </Box>
              </React.Fragment>
          </Grid>
        </Button>
      </List>
    </Paper>
  );
}