import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Pagination } from "./styles";
import { useState } from "react";

const PagingArea = ({ lastCnt }) => {
  const [pageNum, setPageNum] = useState(0);
  return (
    <Pagination>
      <ul>
        <li>
          <Link to="?page=1">처음</Link>
        </li>
        <li>
          <Link to="/">이전</Link>
        </li>
        {Array(lastCnt)
          .fill()
          .map((_, idx) => (
            <li key={idx} className="page_num">
              <Link to={`?page=${idx + 1}`}>{idx + 1}</Link>
            </li>
          ))}
        <li>
          <Link to="/">다음</Link>
        </li>
        <li>
          <Link>맨끝</Link>
        </li>
      </ul>
    </Pagination>
  );
};

PagingArea.propTypes = {
  lastCnt: PropTypes.number.isRequired,
};

export default PagingArea;
