

const DataContext = React.createContext
// react

function UserContext({Data}) {
    return(
        <DataContext.Provider value={data}>

        </DataContext.Provider>
    )
}

export default UserContext