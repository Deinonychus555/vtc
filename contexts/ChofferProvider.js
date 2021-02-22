import React, {useContext, createContext} from 'react'
import getChoffer from '../shared/choffers';


export const ChofferContext = createContext()

export const ChofferProvider = ({children}) => {
    const choffer = getChoffer();

    return (
        <ChofferContext.Provider value={choffer}>
            {children}
        </ChofferContext.Provider>
    )
}

export default ChofferProvider

export const useChoffer = () => useContext(ChofferContext);