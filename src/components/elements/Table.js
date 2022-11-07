import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const infoTable = {
  head: ["", "Maturity", "Fundamental", "Early Stage", "Incubator"],
  body: [
    ["industry", "", "60%", "25%", "15%"],
    ["Priority", "50%", "30%", "13%", "8%"],
    ["industry", "35%", "21%", "9%", "5%"],
    ["industry", "15%", "9%", "4%", "2%"],
  ],
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Industry", "", "60%", "25%", "15%"),
  createData("Priority", "50%", "30%", "13%", "8%"),
  createData("Strategic", "35%", "21%", "9%", "5%"),
  createData("Exploratory", "15%", "9%", "4%", "2%"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              "td , th": { fontSize: { xs: "2vw", sm: "16px" } },
            }}
          >
            {infoTable.head.map((e, i) => (
              <TableCell align="right" key={i}>
                {e}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "td , th": { fontSize: { xs: "2vw", sm: "16px" } },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
