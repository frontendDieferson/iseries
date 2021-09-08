import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Badge } from 'reactstrap'
import axios from 'axios'

const InfoSerie = ({ match }) => {

    const [form, setForm] = useState({})
    const [success, setSuccess] = useState(false)
    const [mode, setMode] = useState('EDIT')
    const [genres, setGenres] = useState([])



    const [data, setData] = useState({})

    useEffect(() => {
        axios
        .get('/api/series/' + match.params.id)
        .then(res => {
            setData(res.data)
            setForm(res.data)
        })
    }, [match.params.id])

 useEffect(() => {
    axios
    .get('/api/genres')
    .then(res => {
        setGenres(res.data.data)
    })
 })


    const masterHeader = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url('${data.background}')`,
        backgroundsize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }





    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value
        })
    }

    const save = () => {
        axios
        .post('/api/series', {
            form
        })
        .then(res => {
            setSuccess(true)
        })
    }
    if (success) {
      return  <Redirect to='/series' />
    }

    return (

     <div>
         <header style={masterHeader}>
             <div className='h-100' style={{background: 'rgba(0,0,0,0.7'}}>
                 <div className='h-100 container'>

                <div className='row h-100 align-items-center'>
                    <div className='col-3'>
                        <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster} />
                    </div>
                    <div className='col-8'>
                        <h1 className='font-wheight-light text-white'>{data.name}</h1>
                        <div className='lead text-white'>
                           <Badge color='success'>Assistido</Badge>
                           <Badge color='warning'>Para Assistir</Badge>
                            Gênero: {data.genre}
                        </div>
                    </div>
                </div>
               </div>
             </div>
         </header>
         <div>
             <button style={{marginTop: 10}} className='btn btn-primary' onClick={() => setMode('EDIT')}>Editar</button>
         </div>
         {
             mode === 'EDIT' &&


        <div className='container'>
            <h1>Nova Série</h1>
            <button className='btn btn-danger' onClick={() => setMode('INFO')}>Cancelar Edição</button>
            <form>
            <div className='form-group'>
                <label htmlFor='name'>Nome</label>
                <input type='text' value={form.name} onChange={onChange('name')} className='form-control' id='name' placeholder="Nome da Série" /> 
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Comentários</label>
                <input type='text' value={form.comments} onChange={onChange('comments')} className='form-control' id='name' placeholder="Sobre a Série" /> 
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Gênero</label>
                <select className='form-control'>
                  { genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>) }
                </select>
            </div>
            <button type='button' onClick={save} className='btn btn-primary' style={{marginTop: 10}}>Salvar</button>
            </form>
        </div>
        }
     </div>
    )
}

export default InfoSerie