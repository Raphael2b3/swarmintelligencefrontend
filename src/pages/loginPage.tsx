import styled from 'styled-components'
import { useContext, useState } from 'react'
import { UserCreateRequest, UserCreateResponse } from "../data/interface";
import { AppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom'


const Frame = styled.div`

    width: inherit;
    height: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const InnerFrame = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BorderFrame = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: solid 1px grey;
    border-radius: 10px;
    overflow: hidden;

    max-width: 400px;

`

const Title = styled.div`
    font-size: 24;
    text-align: center;
    padding: 10px 0;

    background-color: #333;
    color: white;

`

interface InputFrameProps {
    hide?: boolean,
}
const InputFrame = styled.div<InputFrameProps>`
    padding-top: 10px;
    display: ${props => props.hide ? 'none' : 'hide'};
`

const SubmitButton = styled.div`
    
    margin-top: 20px;
    padding: 5px 20px;
    border-radius: 100px;
    border: solid 2px lightgrey;
    
    text-align: center;
    cursor: pointer;

    &:hover {
        outline: solid 1px lightgrey;
    }
    
`

const ChangeMode = styled.div`
    text-align: center;
    text-decoration: underline;
    color: darkblue;
    font-size: 12px;

    cursor: pointer;

    margin-top: 10px;
`

interface PasswordErrorProps {
    show: boolean,
}
const PasswordError = styled.div<PasswordErrorProps>`
    
    display: ${props => props.show ? 'block' : 'hidden'};
    color: darkred;
    font-size: 12px;
    text-align: center;
    padding-top: 15px;
`




export default function Login() {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')
    const [registerState, setRegisterState] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<string>('')

    const AppCtx = useContext(AppContext)

    const navigate = useNavigate()

    return <Frame>

        <BorderFrame>

            <Title>
                {registerState ? 'Register' : 'Login'}
            </Title>

            <InnerFrame>

                <InputFrame>
                    <input 
                        placeholder = 'username' 
                        type = 'text'
                        value = {username}
                        onChange = {(e) => handleInput(e, 'username')}
                        onKeyDown = {(e) => handleEnter(e)}
                    />
                </InputFrame>
                <InputFrame>
                    <input 
                        placeholder = 'password' 
                        type = 'password'
                        value = {password}
                        onChange = {(e) => handleInput(e, 'password')}
                        onKeyDown = {(e) => handleEnter(e)}
                    />
                </InputFrame>
                <InputFrame hide={!registerState}>
                    <input 
                        placeholder = 'confirm password' 
                        type = 'password'
                        value = {passwordConfirm}
                        onChange = {(e) => handleInput(e, 'confirm-password')}
                        onKeyDown = {(e) => handleEnter(e)}
                    />
                </InputFrame>

                <PasswordError show = {passwordError !== ''}>
                    {passwordError}
                </PasswordError>

                <SubmitButton onClick={handleSubmit}>
                    {registerState ? 'mach neue account' : 'einloggen diese'}
                </SubmitButton>

                <ChangeMode onClick={handleChangeMode}>
                    {registerState ? 'ich hab shcon account' : 'darf ich neuen account bitte'}
                </ChangeMode>

            </InnerFrame>
        </BorderFrame>

    </Frame>

    function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }

    function handleChangeMode() {
        setPasswordError('')
        setRegisterState(!registerState)
    }

    function handleSubmit() {

        if(registerState) {
            if(password === passwordConfirm) {

                postUserCreate(username, password)
                    .then((result): void => {
                        console.log(result)
                        // save user to context and get token

                        navigate('/')

                    })
                    .catch((message) => {
                        console.log('ERROR: ' + message)
                    })


            }
            else {
                setPasswordError('Passwort und passwort bestätigung stimmen nicht überein.')
            }
        }


    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>, type: string) {

        let input = e.currentTarget.value
        switch(type) {
            case 'username':
                if(input !== ' ') {
                    setUsername(input)
                }
                break;
            case 'password':
                setPassword(input)
                break;
            case 'confirm-password':
                setPasswordConfirm(input)
                break;
        }
    }


    function postUserCreate(username: string, password: string): Promise<UserCreateResponse> {

        return new Promise<UserCreateResponse>(
    
          (resolve, reject): void => {
    
            const request: UserCreateRequest = {
              username: username,
              password: password,
            }
    
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(request)
            }
    
            fetch(AppCtx.root + 'user/create', requestOptions)
              .then( response => resolve(response.json()) )
              .catch( message => reject(message) )
    
          }
        )
    
      }

}