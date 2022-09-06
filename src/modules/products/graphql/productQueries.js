import gql from "graphql-tag";

export const CHARACTERS_QUERY = gql`
              query Characters {
                characters {
                  results {
                    id
                    name
                    image
                  }
                }
              }
            `
export const LOGIN_QUERY = gql`
              query login($loginInput: LoginInput!) {
                login(loginInput: $loginInput) {
                  user {
                    _id
                    name
                    email
                  }
                  access_token
                }
              }
            `

export const REGISTER_QUERY = gql`
              mutation signup($signupInput: SignupInput!) {
                signup(signupInput: $signupInput) {
                   _id
                   name 
                   email
                   password
                }
              }
            `