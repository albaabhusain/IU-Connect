import styled from "styled-components";

const Main = (props) => {
  return(
    <Container>
    
    <ShareBox>Write A Post
    <div>
      <img src="/images/user.svg"/>
      <button>Start a Post</button>
    </div>
    <div>
      <button>
      <img src="/images/camera.png"/>
      <span>Photo</span>
      </button>

      <button>
      <img src="/images/video-camera.png"/>
      <span>Video</span>
      </button>

      <button>
      <img src="/images/writing.png"/>
      <span>Write Article</span>
      </button>
    </div>
    </ShareBox>
    <div>
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg"/>
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Date</span>
          </div>
          </a>
          <button>
            <img src="/images/elipsis.png"/>
          </button>
        </SharedActor>
        <Description>
          Description
        </Description>
        <SharedImg>
          <a>
            <img src="/images/shared-image.jpg"/>
          </a>
        </SharedImg>
         </Article>
    </div>
  </Container>

  ); 
};

const Container = styled.div`
  grid-area: main;
`;

const Commoncard =styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);
`
const ShareBox=styled(Commoncard)`
display: flex;
flex-direction: column;
color:#958b7b;
margin: 0 0 8px;
background: white;
div{
  button{
    outline: none;
    color: rgba(0, 0 ,0 ,0.6);
    font-size:14px;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;

    img{
    width:20px;
      
    }
  }
  &:first-child{
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16px;
    img{
      width: 48px;
      border-radius: 50%;
      margin-top: 8px;
    }
    button{
      margin: 4px 0;
      flex-grow: 1;
      padding-left: 16px;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 35px;
      background-color: white;
      text-align: left;
    }
  }
  &:nth-child(2){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 4px;

    button{
      img{
        margin: 0 4px 0 -2px;
      }
      span{
        color: #026466;
      }
    }
  }
}
`;

const Article=styled(Commoncard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor=styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
  margin-right:12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;


img{
  width: 48px;
  height: 48px;


}
& > div{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin-left: 8px;
  overflow: hidden;
  span{
    text-align: left;
    &:first-child{
      font-size: 14px;
      font-weight: 700;
      color: rgba(0,0,0,1);

    }
    &:nth-child(n+1){
      font-size: 12px;
      color: rgba(0,0,0,0.6);
    }
  }

  }

}

button{
  position: absolute;
  right: 12px;
  top: 0;
  background: transparent;
  border: none;
  outline: none;

}
`;

const Description=styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg=styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
`;


export default Main;
