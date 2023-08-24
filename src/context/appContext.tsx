import { createContext } from "react"


export interface AppContextData {
    root: string,

}

export const AppContext = createContext<AppContextData>({} as AppContextData)


interface Props {
    children: React.ReactNode,
    ctx: AppContextData
}
export default function AppProvider(props: Props) {

    return(
        <AppContext.Provider value = { props.ctx }>
            { props.children }
        </AppContext.Provider>
    )
}