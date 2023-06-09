import PropTypes from "prop-types";
import { useTable } from "react-table";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
const Board = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table
      css={StyledTable}
      {...getTableProps()}
    >
      <thead css={StyledThead}>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th scope="col" key={column.id} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} css={StyledTbody}>
        {rows.map((r) => {
          prepareRow(r);
          return (
            <tr key={r.id} {...r.getRowProps()}>
              {r.cells.map((c) => (
                <td key={c.id} {...c.getCellProps()}>
                  {c.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const StyledTable = css`
  width: 100%;
  border-spacing: 0;
`;

const StyledThead = css`
  tr {
    height: 45px;
    background-color: #e9ecef;
  }
`;

const StyledTbody = css`
  font-size: 18px;

  td {
    padding: 10px 0px;
  }
  tr > td:first-child,
  tr > td:last-child {
    text-align: center;
  }
`;

Board.prototypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
