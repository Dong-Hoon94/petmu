import Board from "../Board";
import { faker } from "@faker-js/faker";
import { CommunityContents } from "./styles";
import { useMemo } from "react";

const ComContents = () => {
  const columns = useMemo(
    () => [
      { accessor: "num", Header: "번호"},
      { accessor: "title", Header: "제목" },
      { accessor: "username", Header: "작성자" },
      { accessor: "createdAt", Header: "날짜" },
      { accessor: "views", Header: "조회" },
    ],
    []
  );
  const data = useMemo(
    () =>
      Array(10)
        .fill()
        .map((_, idx) => ({
          num: idx,
          id: faker.string.uuid(),
          title: faker.lorem.paragraph(1),
          username: faker.person.fullName({
            firstName: faker.person.firstName(),
          }),
          createdAt: new Date().toLocaleDateString(),
          views: faker.number.int({ max: 100 }),
        })),
    []
  );
  return (
    <CommunityContents>
      <div className="board-wrap">
        <Board columns={columns} data={data} />
      </div>
    </CommunityContents>
  );
};

export default ComContents;
