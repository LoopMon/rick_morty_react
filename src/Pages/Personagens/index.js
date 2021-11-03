import React, { useEffect, useState} from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HeaderResponsive } from '../../Components/HeaderResponsive'
import { api } from '../../Api'
import './styles.css'


export function Personagens() {
    const [data, setData] = useState(null)
    const [name, setName] = useState('')

    useEffect(() => {
        async function loadAll() {
            let res = await api.getCharacterByName()
            setData(res.data)
        }
        loadAll()
    }, [data])

    function getInputValue(e) {
        console.log('Nome: ' + name)
    }

    return (
        <div>
            <HeaderResponsive />
            <div className="search-container">
                <form onSubmit={getInputValue}>
                    <div>
                        <input type="text" placeholder="nome do personagem" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <button type="submit">
                            <HiOutlineSearch size="30px"/>
                        </button>    
                    </div>
                </form>
            </div>
        </div>
    )
}

// continuar 02:10:30