import PagingArea from "./pagingArea";
import ComContents from "./comContents";
import ComHeader from "./comHeader";
import { CommunityContainer, CommunityWrap } from "./styles";

const Community = () => {
  return (
    <CommunityWrap>
      <CommunityContainer>
        <ComHeader />
        <ComContents />
        <PagingArea lastCnt={10}/>  
      </CommunityContainer>
    </CommunityWrap>
  );
};

export default Community;
