

const DataContext = React.createContext

function UserContext({Data}) {
    return(
        <DataContext.Provider value={data}>

        </DataContext.Provider>
    )
}

export default UserContext