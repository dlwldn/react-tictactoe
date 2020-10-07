import React, { memo } from 'react'
import Td from './Td'

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
    console.log('tr렌더링');
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (<Td key={i} cellIndex={i} rowIndex={rowIndex} dispatch={dispatch} cellData={rowData[i]} />))}
        </tr>
    )
})

export default Tr;