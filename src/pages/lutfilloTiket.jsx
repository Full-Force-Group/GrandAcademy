import React from 'react'
import ListPeople from '../components/listPeople/listPeople'
import Navbar from '../components/navbar/navbar'
import TiketCount from '../components/tiketCount/tiketCount'
import TiketDays from '../components/tiketDays/tiketDays'








const LutfilloTiket = () => {
  return (
    <div>
        <div>
            <Navbar>
                
            </Navbar>
        </div>
        
        <div >
            <TiketDays />
        </div>

        <div className='flex gap-5 '>
            <div>
                <TiketCount />
            </div>

            <div>
                <ListPeople />
            </div>



        </div>
    </div>
  )
}

export default LutfilloTiket