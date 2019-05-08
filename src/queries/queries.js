import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $genere: String!, $authorId: ID!){
        addBook(name: $name, genere: $genere, authorId: $authorId) {
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id: ID){
        book(id: $id) {
            id
            name
            genere
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`

export {
    getAuthorsQuery,
    getBooksQuery,
    addBookMutation,
    getBookQuery
}