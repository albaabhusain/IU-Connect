import styled from "styled-components";

import{connect} from "react-redux";

import { signInAPI } from "../actions";

const Login = (props) => {
    return(
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/Navbar_Logo.png" />
                </a>
                <div>
                    <Join>Sign Up</Join>
                    <LogIn>Log In</LogIn>
                </div>
                
            </Nav>

            <Section>
                <Hero>
                    <h1>Welocme to IU Connect , Get Super advice from Super Seniors...</h1>
                    <img src="/images/Landing_illustration.png" />
                    </Hero>
                    <MainForm>
                    <Form>
                        <LogForm onClick={()=>props.signIn}>
                            <img src="images/LoginPage_illustration.png"/>
                            Sign in with Gmail account
                        </LogForm>
                    </Form>
                    <Form>
                        <LogForm>
                            <img src="images/LoginPage_illustration.png"/>
                            Sign in with IUL account
                        </LogForm>
                    </Form>

                    </MainForm>
                    
            </Section>
        </Container>
    )
    
};

const Container = styled.div`
padding:0 30px;
`;

const Nav=styled.div`
    max-width:1128px;
    margin:auto;
    padding:12px 0 16px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap:nowrap;

    &>a{
        width:135px;
        height:34px;
        @media(max-width:768px){
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding:10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.0.9);
        text-decoration: none;
    }
`;

const LogIn= styled.a`
    box-shadow: inset 0 0 0 1px #026466;
    color:#026466;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);

    &:hover{
        background-color: #0264662b;
        color: #026466;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 90px;
    padding: 60px 0px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media(max-width:768px){
        margin: auto;
        min-height: 0px;
    }
`;
const Hero=styled.div`
    width: 100%;
    h1{
        padding-bottom:0 ;
        width: 48%;
        font-size: 48px;
        color: rgba(0,0,0,0.6);
        font-weight: 200;
        line-height: 60px;
        @media(max-width:768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        width: 550px;
        height:400px ;
        position: absolute;
        top: 70px;
        right: -40px;
        @media(max-width:768px){
            top:230px;
            width: initial;
            position: initial;
            height: initial;

        }
    }
`;

const Form = styled.div`
    margin-top: 10px;
    width: 408px;
    img{
        height: 50px;
        width: 50px;
    }
    @media(max-width:768px){
        margin-top: 20px;
    }

`;
const LogForm= styled.button`

    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px ;
    width: 100%;
    border-radius: 26px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

`;

const MainForm=styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
`;

const mapStateToProps=(state)=>{
    return{};
}
const mapDispatchToProps=(dispatch)=>({
    signIn:()=>dispatch(signInAPI()),

});


export default connect(mapStateToProps,mapDispatchToProps)(Login);

